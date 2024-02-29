import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const Home = () => {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex items-center gap-4 absolute mr-5 mt-5 top-0 right-0">
        <h1 className="text-black ">Gmail</h1>
        <h1 className="text-blakc ">Images</h1>
        <div className="flex items-center">
          <MenuIcon className="text-black" />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-700"></div>
      </div>

      <div className="flex flex-col justify-center items-center absolute inset-0">
        <img
          src="https://imagetolink.com/ib/jS8XcfZrLa.png"
          alt="jS8XcfZrLa"
          height={120}
          width={350}
        />
        <div className="border border-black h-50 w-100 rounded-full overflow-hidden">
          <input
            value={input}
            placeholder="Enter your search"
            onChange={(e) => setInput(e.target.value)}
            className="p-5 w-full"
          />
        </div>

        <button className="w-20 h-10 bg-blue-700 rounded-full text-white mt-10">
          <Link to={`/result/${input}`}>Search</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
