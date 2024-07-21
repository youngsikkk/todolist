import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputContents from "../components/InputContents";
import TodoContents from "../components/TodoContents";
export default function Home() {
  return (
    <div className="relative h-screen">
      <Header/>
      <InputContents/>
      <TodoContents/>
      <Footer/>
    </div>
  );
}
