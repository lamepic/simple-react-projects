import { useEffect, useState } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";

function App() {
  const [user, setUser] = useState({});
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const resp = await fetch(url);
      const res = await resp.json();
      const data = res.results[0];
      setUser({
        name: `${data.name.first} ${data.name.last}`,
        email: data.email,
        age: data.dob.age,
        street: `${data.location.street.number} ${data.location.street.name}`,
        phone: data.phone,
        password: data.login.password,
        img: data.picture.large,
      });
      setTitle("name");
      setInfo(`${data.name.first} ${data.name.last}`);
    } catch (error) {
      console.log(results);
    }
  };

  const display = (title, info) => {
    setTitle(title);
    setInfo(info);
  };

  return (
    <div className="h-screen bg-[#f1f5f8]">
      <div className="h-1/2 bg-[#2c2e31]"></div>
      <div className="mx-auto my-auto w-5/12 rounded-md shadow-md -mt-[150px] bg-white overflow-hidden">
        <div className="bg-[#f1f5f8] h-28"></div>
        <div className="relative flex flex-col items-center p-5 gap-10">
          <div className="rounded-full bg-red-400 h-32 w-32 absolute -top-16 overflow-hidden border-black">
            <img src={user.img} />
          </div>
          <div className="text-center space-y-1 mt-16 duration-300">
            <p className="text-lg text-gray-400">My {title} is</p>
            <p className="text-3xl">{info}</p>
          </div>
          <div className="flex items-center gap-16">
            <FaUser
              size={40}
              className="text-gray-500 cursor-pointer hover:text-blue-400 duration-300"
              onMouseOver={() => display("name", user.name)}
            />
            <FaEnvelopeOpen
              size={40}
              className="text-gray-500 cursor-pointer hover:text-blue-400 duration-300"
              onMouseOver={() => display("email", user.email)}
            />
            <FaCalendarTimes
              size={40}
              className="text-gray-500 cursor-pointer hover:text-blue-400 duration-300"
              onMouseOver={() => display("age", user.age)}
            />
            <FaMap
              size={40}
              className="text-gray-500 cursor-pointer hover:text-blue-400 duration-300"
              onMouseOver={() => display("street", user.street)}
            />
            <FaPhone
              size={40}
              className="text-gray-500 cursor-pointer hover:text-blue-400 duration-300"
              onMouseOver={() => display("phone", user.phone)}
            />
            <FaLock
              size={40}
              className="text-gray-500 cursor-pointer hover:text-blue-400 duration-300"
              onMouseOver={() => display("password", user.password)}
            />
          </div>
          <button
            className="uppercase text-white bg-blue-400 rounded-md px-3 py-1"
            onClick={fetchUser}
          >
            random user
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
