import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface MessageProp {
  type: "Primary" | "Secondary";
  content: string;
  owner: string;
}

const variantStyles = {
  "Primary" : "bg-blue-500 mr-2",
  "Secondary": "bg-green-500 ml-2",
}

const flexStyles = {
  "Primary" : "flex w-full pt-5 justify-end",
  "Secondary" : "flex w-full pt-5 justify-start",
}


const defaultStyles = "max-w-48 rounded-3xl flex-shrink-0 w-1/2"

export function Message({ type, content, owner }: MessageProp) {
  return (
    <div  className={flexStyles[type]}>
      <Card className={variantStyles[type] + " " + defaultStyles}>
        <CardHeader>
          <CardTitle>{owner}</CardTitle>
        </CardHeader>

        <CardContent className="overflow-y-auto">
          {content}
        </CardContent>
      </Card>
    </div>
  );
}
