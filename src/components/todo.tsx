import { ITodo } from "@/interfaces/ITodo";
import { EditForm } from "./editForm";

import { DeleteDialog } from "./deleteDialog";
import { dateFormater } from "@/lib/utils";

export function Todo({ name, _id, createdAt, updatedAt }: ITodo) {
  return (
    <div className="w-full border-2 border-gray-300 shadow-lg rounded-md p-6 flex justify-between items-center">
      <div className="flex flex-col text-lg text-orange-500">
        <h1 className="uppercase text-gray-500">{name}</h1>
        <span className="text-sm">{dateFormater(new Date(createdAt))}</span>
      </div>

      <div className="flex flex-row gap-3">
        <EditForm name={name} _id={_id} updatedAt={updatedAt} />
        <DeleteDialog name={name} _id={_id} />
      </div>
    </div>
  );
}
