import { HiArrowLongRight } from "react-icons/hi2";

export default function ServicesBottom() {
  return (
    <div className="mx-12 relative mt-12">
      <div className="absolute right-0 flex items-center">
        <div className="w-[3rem] h-[3rem] flex border justify-center items-center bg-red-800 rounded-full">
          <p className="text-white text-xl">
            <HiArrowLongRight />
          </p>
        </div>
        <div className="self-end font-sans ml-4 text-lg font-bold text-red-900">
          To Service All
        </div>
      </div>
    </div>
  );
}
