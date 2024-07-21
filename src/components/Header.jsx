import React from "react";

const Header = () => {
    return (
        <nav className="bg-white border-b-2 border-b-slate-300 flex fixed justify-between items-center w-full h-[100px] top-0">
            <a href="/" className="text-4xl ml-20 mr-20">TodoList</a>
            <div className="flex">
                <div className="flex mr-10">
                    <div className="hidden md:flex p-2 items-center">
                        <a className="mr-10 cursor-pointer">Home</a>
                        <a className="mr-10 cursor-pointer">About</a>
                        <a className="mr-10 cursor-pointer">Blog</a>
                        <a className="mr-10 cursor-pointer">Work</a>
                    </div>
                </div>
                {/* <div className="p-2">
                    <button className="mr-10 bg-slate-400/40 w-[120px] h-[50px] rounded-md text-white">Sign In</button>
                    <button className="mr-10 bg-gray-700 w-[120px] h-[50px] rounded-md text-white">Sign UP</button>
                </div> */}
            </div>
        </nav>
    )
}

export default Header;