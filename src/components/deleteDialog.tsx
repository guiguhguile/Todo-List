"use client";
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
import { Todo } from "@/app/types";
import { deleteTodo } from "@/app/actions";
import { useRouter } from "next/navigation";

export function DeleteDialog({ item }: { item: Todo }) {
  const router = useRouter();

  const { toast } = useToast();

  const handleDeleteTodo = async () => {
    await deleteTodo(item);

    toast({
      title: "Todo deleted Sucesufly",
    });

    router.refresh();
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
            <span className="font-bold uppercase text-black">{item.title}</span>
            Todo ?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button onClick={handleDeleteTodo} variant={"destructive"}>
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
