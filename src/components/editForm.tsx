"use client";

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
import { Todo } from "@/app/types";
import { UpsertForm } from "./upsert-form";

import { todoSchema } from "@/app/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { prisma } from "@/database";
import { updateTodo } from "@/app/actions";

export function EditForm({ item }: { item: Todo }) {
  const { toast } = useToast();
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(todoSchema),
  });

  const handleUpdatedTodo = async (data: any) => {
    await updateTodo(data, item.id);

    toast({
      title: "Todo has been updated",
    });

    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(handleUpdatedTodo)} className="space-y-5">
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
              defaultValue={item?.title}
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
