import { Heading, Item } from "@/components";
import { getTodos } from "./actions";

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="flex min-h-screen items-center align-middle justify-center">
      <div className="w-full max-w-[1320px] px-20 flex flex-col">
        <Heading />
        <div className="flex flex-col gap-5">
          {todos.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
