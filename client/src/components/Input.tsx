import { Textarea } from "./ui/textarea"

interface InputProp {
  onClick: ()=>void
}

export function Input({onClick}:InputProp) {
  return <div>
    <Textarea onDoubleClick={onClick} placeholder="                                                                                                  your text goes here" className="text-white rounded-3xl  h-5"  />
  </div>
}
