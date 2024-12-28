import { DotIcon } from "@/icons/DotIcons";

export function UserNameAvailable() {

  return <div className="flex justify-start items-center pt-1 pl-1">
    <div className="text-green-400 pr-1">
      <DotIcon />
    </div>
    <div className="text-green-400">
      username
    </div>
    <div className="text-green-400 pl-1">
      available
    </div>
  </div>
}
