import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Input } from "./Input";

export function ChatArea({ children }: any) {
  return (
    <div className="border border-white-3 rounded-3xl">
      <ScrollArea className="h-[450px] w-400 overflow-auto">
        {children}
      </ScrollArea>

      <Input onClick={()=>{}} />
    </div>
  );
}
