
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Input } from "./Input";
import { Message } from "./Message";
import { MessageHome } from "./MessageHome";

export function ChatAreaHome({ children }: any) {
  return (
    <div className="border border-white-3 rounded-3xl">

      <ScrollArea className="overflow-auto w-400 h-[200px]">
        <MessageHome owner="chatify" content="double click to send" type="Secondary" />
      </ScrollArea>

      <Input onClick={()=>{}} />
    </div>
  );
}
