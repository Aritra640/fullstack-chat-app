

import { Message } from "../components/Message";
import { ChatArea } from "../components/ChatArea";

export function ChatRoom() {
  return <div className="bg-slate-800 h-screen flex flex-shrink-0 justify-center items-center">
     
    <ChatArea>
      <Message owner = "user1" type="Secondary" content="testing" />
      <Message owner = "self" type="Primary" content="testing" />

    </ChatArea>
  </div>
}
