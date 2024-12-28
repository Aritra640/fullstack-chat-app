import { DotIcon } from "@/icons/DotIcons";

export function UserNameNotAvailable() {

  return <div className="flex justify-start items-center pt-1 pl-1">
    <div className="text-red-700 pr-1">
      <DotIcon />
    </div>
    <div className="text-red-700">
      username
    </div>
    <div className="text-red-700 pl-1">
      not
    </div>
    <div className="text-red-700 pl-1">
      available
    </div>
  </div>
}
