import { Button } from "@/components/ui/button";
import { useState } from "react";
import style from "./Swipe.module.css";

interface Todo {
    id: number;
    task: string;
}

const Swipe = () => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, task: "Eat" },
        { id: 2, task: "Drink" },
        { id: 3, task: "Walk" },
        { id: 4, task: "Bath" },
        { id: 5, task: "Sleep" },
    ]);

    const swap = (srcId: number, destId: number) => {
        const newTodos = [...todos];
        const [deleted] = newTodos.splice(srcId, 1);
        newTodos.splice(destId, 0, deleted);
        setTodos(newTodos);
    };

    const moveUp = (id: number) => {
        const destElIndex = id === 0 ? todos.length - 1 : id - 1;
        swap(id, destElIndex);
    };
    const moveDown = (id: number) => {
        const destElIndex = id === todos.length - 1 ? 0 : id + 1;
        swap(id, destElIndex);
    };
    const generateTodoList = () => {
        return todos.map((todo, idx) => {
            return (
                <li
                    key={todo.id}
                    className={style.swipeItem}
                    style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                    <span className={style.swipeTask}>{todo.task}</span>
                    <div className={style.swipeActions}>
                        <Button onClick={() => moveUp(idx)}>Up</Button>
                        <Button onClick={() => moveDown(idx)}>Down</Button>
                    </div>
                </li>
            );
        });
    };

    return (
        <div className={style.swipeContainer}>
            <ul className={style.swipeList}>{generateTodoList()}</ul>
        </div>
    );
};

export default Swipe;
