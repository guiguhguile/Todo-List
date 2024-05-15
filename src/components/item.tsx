import { dateFormater } from "@/lib/utils";
import { Todo } from "@/app/types";
import { EditForm } from "./editForm";
import { DeleteDialog } from "./deleteDialog";

export function Item({ item }: { item: Todo }) {
  return (
    <div className="w-full border-2 border-gray-300 shadow-lg rounded-md p-6 flex justify-between items-center">
      <div className="flex flex-col text-lg text-orange-500">
        <h1 className="uppercase text-gray-500">{item.title}</h1>
        <span className="text-sm">
          {dateFormater(new Date(item.createdAt))}
        </span>
      </div>

      <div className="flex flex-row gap-3">
        <EditForm item={item} />
        <DeleteDialog item={item} />
      </div>
    </div>
  );
}
