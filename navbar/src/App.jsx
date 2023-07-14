import { useState } from "react";
import { links } from "./data";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaBars,
} from "react-icons/fa";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="p-5 lg:w-9/12 mx-auto flex items-center justify-between">
        <p className="text-3xl text-orange-600">Lamepic</p>

        <div className="hidden lg:flex gap-4">
          {links.map((link) => {
            return (
              <a
                href={link.url}
                key={link.id}
                className="capitalize text-lg hover:text-blue-400 duration-150"
              >
                {link.text}
              </a>
            );
          })}
        </div>
        <div className="items-center gap-3 text-xl text-blue-600 hidden lg:flex">
          <a href="/">
            <FaFacebook />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
          <a href="/">
            <FaBehance />
          </a>
        </div>
        <button
          onClick={() => setShowNav(!showNav)}
          className="block md:hidden"
        >
          <FaBars className="text-3xl" />
        </button>
      </div>
      {showNav && (
        <div className="flex flex-col gap-4 px-5  md:hidden">
          {links.map((link) => {
            return (
              <a
                href={link.url}
                key={link.id}
                className="capitalize text-lg hover:text-blue-400 duration-150"
              >
                {link.text}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
