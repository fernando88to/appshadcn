import {Button} from "@/components/ui/button";
// import { RocketIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {RocketIcon} from "@radix-ui/react-icons";

export default function Home() {
  return (
      <div>
        <Button>Click me</Button>
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>



  );
}
