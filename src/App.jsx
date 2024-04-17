import { useEffect } from "react";

const App = () => {
  useEffect(() => {}, []);
  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold">Translate</h1>
        {/* Ust kisim */}
        <div className="flex gap-2 text-black">
          <select className="flex-1"></select>
          <button className="rounded py-2 px-6 bg-zinc-700 text-white transition hover:ring-2 hover:bg-zinc-800">
            Change
          </button>
          <select className="flex-1"></select>
        </div>
        {/* text alanları */}
        <div className="flex mt-5 gap-3 md:gap-[105px] max-md:flex-col">
          <div className="flex-1">
            <textarea className="w-full min-h-[300px] max-h-[500px] p-[10px] text-[20px] rounded text-black"></textarea>
          </div>

          <div className="flex-1">
            <textarea
              disabled
              className="w-full min-h-[300px] max-h-[500px] p-[10px] text-[20px] rounded text-black"
            ></textarea>
          </div>
        </div>
        {/* buton */}
        <button className="rounded-md py-3 px-5 text-[17px] font-semibold cursor-pointer bg-zinc-700 mt-3 hover:ring-2 hover:bg-zinc-900 transition">
          Translate
        </button>
      </div>
    </div>
  );
};

export default App;
