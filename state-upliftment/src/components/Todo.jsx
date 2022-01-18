import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

export const Todo = () => {
    const [list, setList] = useState([]);

    const handleClick = (data) => {
        //  data
        console.log("Data in Parent", data);
        const payload = {
            title: data,
            status: false,
            id: nanoid(7)
        }
        setList([...list, payload]);
    };
    const handleToggle = (id) => {
        //  Delete this ID from main list
        //  hint; list.filter()
    }
    return (
        <>
            <TodoInput getData={handleClick} />
            {list.map((e, i) => (
                <TodoItem key={e.id} {...e} handleToggle={handleToggle} />
                // <TodoItem key={e.id} title={e.title} status={e.status} />
            ))}
        </>
    );
};