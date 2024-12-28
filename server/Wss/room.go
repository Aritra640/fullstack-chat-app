package Wss

import (
	"log"

	"github.com/gorilla/websocket"
	"github.com/labstack/echo/v4"
)

type Room struct {

	//Clients holds all curent clientsin this room
	Clients map[*Client]bool

	//Join is a channel for clients wishing to join the room
	Join chan *Client

	//Leave is a channel for clients wishing to leave the room
	Leave chan *Client

	//forward is a  channel that holds incoming messages that should be forwared to the other clients
	Forward chan []byte
}

// new room creates a new chat room
func NewRoom() *Room {
	return &Room{
		Forward: make(chan []byte),
		Clients: make(map[*Client]bool),
		Join:    make(chan *Client),
		Leave:   make(chan *Client),
	}
}

func (r *Room) Run() {
	for {
		select {
		case client := <-r.Join:
			r.Clients[client] = true
		case client := <-r.Leave:
			delete(r.Clients, client)
			close(client.Receive)
		case msg := <-r.Forward:
			for client := range r.Clients {
				client.Receive <- msg
			}
		}
	}
}

const (
	socketBufferSize  = 1024
	messageBufferSize = 256
)

var upgrader = &websocket.Upgrader{ReadBufferSize: socketBufferSize, WriteBufferSize: socketBufferSize}

func (r *Room) ServeHTTP(c echo.Context) error {
  ws,err := upgrader.Upgrade(c.Response() , c.Request() , c.Response().Header())
  if err != nil {
    log.Fatal("ServeHTTP " , err)
    return err
  }

  defer ws.Close()

  client := &Client{
    Socket: ws,
    Receive: make(chan []byte , messageBufferSize),
    Room: r,
  }

  r.Join <- client
  defer func() {r.Leave <- client} ()

  go client.Write()

  client.Read()
  return nil
}
