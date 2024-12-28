import { ScrollArea } from "@radix-ui/react-scroll-area";
import { MessageHome } from "./MessageHome";
import { useState } from "react";
import { messageHomeContext } from "./context";
import { InputHome } from "./InputHome";
import { msgHome } from "./types";

const firstMessage : msgHome = {
  owner: "chatify",
  type: "Secondary",
  content: "hi there welcome to chatify",
}

export function ChatAreaHome() {
  const [messages, setMessages] = useState([firstMessage]);

 
  return (
    <div className="border border-white-3 rounded-3xl">
      <ScrollArea className="overflow-auto w-400 h-[200px]">
        {messages.map(message => <MessageHome
          owner={message.owner}
          type={message.type}
          content={message.content}
        />)}
      </ScrollArea>
      <messageHomeContext.Provider
        value={{
          setMessages: setMessages,
        }}
      >
        <InputHome/>
      </messageHomeContext.Provider>
    </div>
  );
}
