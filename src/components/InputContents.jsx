"use client"
import { addTodo } from "@/slices/todoSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const InputContents = () => {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const day = new Date();
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todos.todos);
    const handleClick = (e) => {
        e.preventDefault();
        if(title.trim().length === 0) {
            alert("제목을 입력해주세요");
            return;
        }
        if(contents.trim().length === 0) {
            alert("내용을 입력해주세요");
            return;
        }
        const start = `${day.getFullYear()}.${day.getMonth() + 1}.${day.getDate()}`;    
        dispatch(addTodo({title, contents, start}));
        setTitle("");
        setContents("");
    }
    
    return (
        <section className={`bg-slate-100/60 flex w-full flex-col items-center mt-20 p-10 max-h-[816px] h-auto`}>
            <h1 className="text-4xl mt-10 mb-10 animate-rainbow">To Do List</h1>
            <form className="flex flex-col items-center">
                <input
                    type="text"
                    placeholder="할 일 제목을 적어주세요"
                    value={title}
                    className="border-2 mt-5 text-2xl w-[500px] text-center rounded-lg focus:border-none"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <textarea
                    type="text"
                    placeholder="할 일을 적어주세요"
                    rows="10"
                    value={contents}
                    className="border-2 mt-5 text-2xl w-[500px] text-center rounded-lg focus:border-none"
                    onChange={(e) => {
                        setContents(e.target.value);
                    }}>
                </textarea>
                <button onClick={handleClick} type="submit" className="text-slate-700 text-xl font-bold bg-slate-100/60 border-2 duration-300 rounded-md mt-10 w-[200px] h-[50px] hover:bg-slate-600 hover:text-white">Submit</button>
            </form>
        </section>
    )
}

export default InputContents;