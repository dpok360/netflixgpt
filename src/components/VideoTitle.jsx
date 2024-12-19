import { IoMdPlay } from 'react-icons/io';
import { TfiInfoAlt } from 'react-icons/tfi';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] px-20 absolute bg-gradient-to-r from-black">
      <h1 className=" font-inter text-gray-50 text-3xl mb-2">{title}</h1>
      <p className=" font-extralight text-gray-50 text-xl mb-2 w-1/3">
        {overview}
      </p>
      <div className="flex gap-2">
        <button className="px-6 py-2 font-roboto bg-gray-100  flex rounded-sm hover:bg-opacity-85">
          <span className="pr-1  text-3xl">
            <IoMdPlay />
          </span>
          <span className="text-xl">Play</span>
        </button>
        <button className="px-6 py-2 font-roboto bg-gray-400 flex rounded-sm bg-opacity-50">
          <span className="text-xl pr-2 py-1 text-white">
            <TfiInfoAlt />
          </span>
          <span className="text-xl text-white">More info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
