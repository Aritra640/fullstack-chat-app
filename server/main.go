package main

import (
	"flag"
	"path/filepath"
	"sync"
	"text/template"

	"github.com/Aritra640/fullstack-chat-app/server/Wss"
	"github.com/labstack/echo/v4"
)

//Templ represents a single templ
type TemplateHandler struct {
  once sync.Once
  filename string 
  templ *template.Template
}

func (t *TemplateHandler) ServeHTTP(c echo.Context) error {
  t.once.Do(func(){
    t.templ = template.Must(template.ParseFiles(filepath.Join("templates" , t.filename)))
  })

  t.templ.Execute(c.Response() , c.Request())
  return nil
}

func main() {
  e := echo.New()
  r := Wss.NewRoom()

  e.Any("/room" , r.ServeHTTP)
  go r.Run()

  e.Logger.Fatal(e.Start(":8080"))
}

