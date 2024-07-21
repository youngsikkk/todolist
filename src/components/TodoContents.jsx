"use client"
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // useSelector: state 조회, useDispatch: 액션 발생
// import { RootState } from "../store";
import { bookmarkTodo, deleteTodo, toggleTodo } from "@/slices/todoSlice";
import { CiStar } from "react-icons/ci";
import { FaStar, FaTrashAlt, FaRegCheckSquare, FaRegSquare } from "react-icons/fa";


const TodoContents = () => {
    const [isBookmark, setIsBookmark] = useState(false);
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    
    return (
        <div className="bg-slate-100/60 grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:grid-cols-3">
            {todos.map((items, idx) => (
                <div key={items.id} className="flex justify-center">
                    <div className="flex flex-col w-[500px] mb-20 justify-center items-center border-2 rounded-lg duration-300 hover:shadow-lg" key={items.id}>
                        <div className="w-full flex justify-between">
                            <button className ="ml-10" onClick={() => {dispatch(bookmarkTodo(items.id))}}>{items.bookmark ? <FaStar className="text-3xl mt-5 animate-rainbow"/> : <CiStar className="text-4xl mt-4"/>}</button>
                            <button className ="mr-10" onClick={() => {dispatch(deleteTodo(items.id))}}><FaTrashAlt className="text-3xl mt-5"/></button>
                        </div>
                        <span className="text-3xl mt-5 text-wrap">
                            {items.title}
                        </span>
                        <span className="mt-10 mb-10 text-wrap">
                            {items.contents}
                        </span>
                        <span className="mt-10 mb-10 text-wrap">
                            {items.start} ~ 
                        </span>
                        <div className=" mb-5">
                            <button className="active:scale-105" onClick={() => {dispatch(toggleTodo(items.id))}}>{items.completed ? <FaRegCheckSquare className="text-3xl mt-5"/> : <FaRegSquare className="text-3xl mt-5"/> }</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoContents