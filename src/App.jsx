import React from "react";
import { FaSearch } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import "./App.css";
import Nav from "./sections/Nav";
import Main from "./sections/Main";
import NewArticles from "./sections/NewArticles";
import Redes from "./sections/Redes";
import Videos from "./sections/Videos";
import SabiasQue from "./sections/SabiasQue";
import ParaLaHistoria from "./sections/ParaLaHistoria";

function App() {
  return (
    <div className='bg-stone-200 '>
      <header className='max-w-[1000px] m-auto py-2'>
        <h1 className='text-6xl font-medium text-slate-900'>MasterDev</h1>
      </header>
      <div className='max-w-[1000px] m-auto h-[1px] bg-black my-4'></div>
      <Nav />
      <div className='max-w-[1000px] m-auto flex py-4 flex-row-reverse items-center gap-2'>
        <FaSearch />
        <input
          type='text'
          placeholder='Search'
          className='outline-none px-2 '
        />
      </div>
      <div className='max-w-[1000px] m-auto h-[1px] bg-black my-4'></div>
      <div className='max-w-[1000px] m-auto grid grid-cols-1 md:grid-cols-footer gap-10'>
        <Main />
        <aside>
          <NewArticles />
          <div className='m-auto h-[1px] bg-black my-4'></div>
          <Redes />
          <div className='m-auto h-[1px] bg-black my-4'></div>
          <Videos />
          <div className='m-auto h-[1px] bg-black my-4'></div>
          <SabiasQue />
          <div className='m-auto h-[1px] bg-black my-4'></div>
          <ParaLaHistoria />
        </aside>
      </div>
    </div>
  );
}

export default App;
