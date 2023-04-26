import { HiArrowLongRight } from "react-icons/hi2";

interface Props {
  title: string;
  description: string;
}

export default function ServiceDetail({ title, description }: Props) {
  if (description.length >= 30) {
    description = description.substring(0, 170) + "...";
  }

  return (
    <div className="py-12">
      <h1 className="font-serif text-4xl tracking-wider text-stone-800">
        {title}
      </h1>
      <p className="pt-16 text-xl text-slate-600 tracking-wide">
        {description}
      </p>
      <div className="flex mt-12">
        <div className="w-[9rem] h-[3rem] flex justify-center items-center bg-gray-900 rounded-3xl duration-100">
          <p className="font-mono font-bold text-white ">more detail</p>
        </div>
        <div className="w-[3rem] h-[3rem] flex justify-center items-center border border-red-800 rounded-full">
          <p className="text-red-900 text-xl">
            <HiArrowLongRight />
          </p>
        </div>
      </div>
    </div>
  );
}
