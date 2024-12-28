
import { Button } from "../components/ui/button";
import { ChatAreaHome } from "../components/ChatAreaHome";

export  function HomePage() {

  return (
    <div className="bg-slate-800 h-screen w-screen fixed">
      <div className="pt-4 pr-3 flex justify-end">
        <Button variant="outline" onClick={() => {}}>
          signin
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="pt-5 text-7xl flex justify-start flex-shrink-0">
          <div className="text-white">Chat</div>
          <div className="text-red-900">ify</div>
        </div>
      </div>

      <br />

      <div className="flex justify-center">
        <div className="text-white"><a href="/signup">Sign up </a></div>
        <div className="pl-1 text-slate-400"> to create chat rooms </div>
      </div>

      <div className="pt-3 flex justify-center">
        <span className="max-h-72 max-w-12 flex justify-center">
          <ChatAreaHome>

          </ChatAreaHome>
        </span>
      </div>

      <br />
      <br />
      <br />

      <div className="flex justify-center">
        <br />
        <div className="pl-8">
          <div className="text-white text-xl">Short & Sweet</div>

          <div className="pl-3 pt-2 text-slate-400">
            Connect with friends and family in private rooms
          </div>
          <div className="pl-3 text-slate-400">
            Your space for conversations , create rooms, invite who you want
          </div>
          <div className="pl-3 text-slate-400">
            Easy group chats , start a room, chat freely
          </div>
        </div>
        <br />
        <div>
          <div className="text-white text-xl">Benefit-Oriented</div>
          <div className="pl-3 pt-2 text-slate-400">
            Effortlessly create private chat rooms for your groups
          </div>
          <div className="pl-3 text-slate-400">
            Stay connected with the people who matter most.
          </div>
          <div className="text-slate-400 pl-3">
            Say goodbye to crowded group chats.
          </div>
        </div>
        <br />
        <div>
          <div className="text-white text-xl">
            Unique & Intriguing
          </div>
          <div className="pl-3 pt-2 text-slate-400">
            Your pocket-sized clubhouse
          </div>
          <div className="pl-3 text-slate-400">
            The app that lets you build your own chat universe
          </div>
          <div className="pl-3 text-slate-400">
            Create chat rooms that reflect your unique connections
          </div>
        </div>
      </div>
    </div>
  );
}
