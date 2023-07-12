import { FaQuoteRight } from "react-icons/fa";

function Profile({ profile }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center gap-5">
        <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-gray-300 shadow-xl">
          <img src={profile.image} className="w-full h-full object-cover" />
        </div>
        <div className="text-center space-y-3">
          <p className="capitalize text-4xl text-violet-400">{profile.name}</p>
          <p className="text-xl capitalize text-gray-600">{profile.title}</p>
        </div>

        <div className="flex flex-col items-center mt-6 space-y-5">
          <p className="text-center text-lg text-gray-500 leading-9">
            {profile.quote}
          </p>
          <FaQuoteRight className="text-blue-600 text-6xl" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
