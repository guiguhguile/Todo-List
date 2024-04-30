"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios";
import { useToast } from "./ui/use-toast";

export function Heading() {
  const [name, setName] = useState("");

  const { toast } = useToast();

  const handleTodo = async (event: any) => {
    const data = {
      name,
    };

    await axios.post("/api/todos", { ...data });
    toast({
      title: "todo has been created ",
    });
  };

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-300 p-3 mb-[50px]">
      <h1 className="text-gray-500 text-4xl font-bold">Todo list</h1>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Add Todo</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleTodo}>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <label>New Todo</label>
                  <Input
                    placeholder="Add todo... "
                    className="w-full"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4"></div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit">Save changes</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
