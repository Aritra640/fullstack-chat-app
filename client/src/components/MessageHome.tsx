interface MessageHomeprop {
  type: "Primary"|"Secondary"
  owner: string 
  content: string
}

const flexStyles = {
  "Primary": "flex justify-end pr-2",
  "Secondary": "flex justify-start pl-2"
}

const variantStyles = {
  "Primary": "bg-blue-500",
  "Secondary": "bg-green-500",
}

const fontStyles = {
  "Primary": "text-white p-2",
  "Secondary": "text-black p-2"
}

const defaultStyles = "rounded-3xl"

export function MessageHome({
  type,
  owner,
  content
}:MessageHomeprop) {

  return <div className={flexStyles[type] + " pt-1"}>
    <span className={variantStyles[type] + " " + defaultStyles}>
      <div className={fontStyles[type] + " font-medium text-xl pl-2"}>{owner}</div>
      <div className={fontStyles[type] + " pt-3"}>{content}</div>
    </span>
  </div>
}
