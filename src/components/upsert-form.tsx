"use client";

import { createTodo } from "@/app/actions";
import { todoSchema } from "@/app/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form, useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
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
import { Todo } from "@/app/types";

export function UpsertForm() {
  const { toast } = useToast();
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = async (data: any) => {
    await createTodo(data);

    toast({
      title: "Todo has been created",
    });

    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <div>
            <Input
              type="text"
              placeholder="Add todo..."
              {...register("title")}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
