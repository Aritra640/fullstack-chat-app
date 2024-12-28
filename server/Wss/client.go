package Wss

import "github.com/gorilla/websocket"

type Client struct {
	//socket is the wensocket for this client
	Socket *websocket.Conn

  //receive is a channel to receive messages from other clients 
  Receive chan []byte 

  //room is the room this client is chatting to 
  Room *Room
}

func (c *Client) Read() error {
  defer c.Socket.Close()

  for {
    _,msg,err := c.Socket.ReadMessage()
    if err != nil {
      return err
    }

    c.Room.forward <- msg
  }
}

func (c *Client) Write() error {
  defer c.Socket.Close()

  for msg := range c.Receive {
    err := c.Socket.WriteMessage(websocket.TextMessage , msg)
    
    if err != nil {
      return err
    }
  }

  return nil
}
