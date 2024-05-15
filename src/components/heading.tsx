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
import { useToast } from "./ui/use-toast";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem } from "./ui/form";

import { todoSchema } from "@/app/schema";
import { useForm } from "react-hook-form";

import { UpsertForm } from "./upsert-form";

export function Heading() {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-300 p-3 mb-[50px]">
      <h1 className="text-gray-500 text-4xl font-bold">Todo </h1>
      <div>
        <UpsertForm />
      </div>
    </div>
  );
}
