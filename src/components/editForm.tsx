"use client";

import { ITodo } from "@/interfaces/ITodo";
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
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios";
import { useState } from "react";
import { dateFormater } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

export function EditForm({ name, _id, updatedAt }: any) {
  const [newName, setNewName] = useState(name || undefined);

  const { toast } = useToast();

  const editTodo = async () => {
    await axios.put(`/api/todos/${_id}`, { newName });

    toast({
      title: "todo has been updated",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your Todo here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Input
              className="w-full"
              onChange={(event) => setNewName(event.target.value)}
              value={newName}
            />
            <span className="text-xs ml-1 text-gray-400">
              Last update: {dateFormater(new Date(updatedAt))}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={editTodo}>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
