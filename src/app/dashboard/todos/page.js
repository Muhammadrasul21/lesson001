import { getTodos } from "@/lib/api";
import React from "react";

const TodosPage = async () => {
  const todos = await getTodos();

  return (
    <div className=" p-4 flex flex-col items-center gap-4">
      <p className="my-4 font-semibold text-2xl text-cyan-400">Todos</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {todos?.map((todo) => (
          <div
            key={todo.id}
            className="p-2 border border-gray-500 rounded flex flex-col gap-4"
          >
            <h3 className="text-xl font-medium">{todo.title}</h3>
            <p
              className={`text-sm ${
                todo.completed ? "text-green-500" : "text-red-500"
              }`}
            >
              {todo.completed ? "Completed" : "Pending"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodosPage;
