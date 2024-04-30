"use client";

import axios from "axios";
import { Heading } from "./heading";
import { Todo } from "./todo";
import { useEffect, useState } from "react";
import { ITodo } from "@/interfaces/ITodo";
import { useRouter } from "next/navigation";

export function Wrapper() {
  const [data, setData] = useState<ITodo[]>([]);
  const router = useRouter();
  function getTodos() {
    axios.get<ITodo[]>("/api/todos").then((results) => {
      setData(results.data);
    });

    router.refresh();
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="w-full max-w-[1320px] px-20 flex flex-col">
      <Heading />

      <div className="flex flex-col gap-6">
        {data.map((item) => (
          <Todo {...item} />
        ))}
      </div>
    </div>
  );
}
