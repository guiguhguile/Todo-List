import axios from "axios";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useToast } from "./ui/use-toast";

export function DeleteDialog({ _id, name }: any) {
  const { toast } = useToast();

  const deleteTodo = () => {
    axios.delete(`/api/todos/${_id}`);
    toast({
      title: "todo has been deleted",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Todo</DialogTitle>
          <DialogDescription>
            Are you sure to want delete the{" "}
            <span className="font-bold uppercase text-black">{name}</span> Todo
            ?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button onClick={deleteTodo} variant={"destructive"}>
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
