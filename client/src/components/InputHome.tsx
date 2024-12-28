import { useContext, useRef} from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { messageHomeContext } from "./context";
import { msgHome } from "./types";

export function InputHome() {

  const {setMessages} = useContext(messageHomeContext);
  const inputRef = useRef<HTMLInputElement>();

  function sendMesage() {


    const newMessage : msgHome = {
      owner: "self",
      content: inputRef.current?.value,
      type: "Primary",
    };

    setMessages(m => [...m , newMessage]);
    inputRef.current.value = "";
  }
 
  return (<div className="flex justify-between">
      <Input className="rounded-l-3xl text-white" ref={inputRef}/>
      <Button className = "bg-white rounded-r-3xl text-black" onClick={sendMesage}>Send</Button>
      </div>
  );
}
