import { useState } from "react";
import {MessageContainer} from "../../components/message/MessageContainer";
import { Sidebar } from "../../components/sidebar/Siderbar";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex h-full w-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div
        className={`absolute md:relative transition-transform duration-300 md:translate-x-0 z-50
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      bg-gray-700 md:bg-transparent w-56 h-full`}
      >
        <Sidebar hideSidebar={setIsOpen} />
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-lg size-7 md:hidden"
      >
        <FaArrowRightArrowLeft className="w-4 h-4 text-slate-500" />
      </button>
      <MessageContainer />
    </div>
  );
};

export default Home;
