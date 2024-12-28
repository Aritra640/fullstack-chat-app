import { Textarea } from "./ui/textarea";

interface InputProp {
  onClick?: () => void;
}

export function Input({ onClick}: InputProp) {

  return (
    <div>
      <Textarea
        onDoubleClick={onClick}
        className="text-white rounded-3xl  h-3 items-center"
      ></Textarea>
    </div>
  );
}
