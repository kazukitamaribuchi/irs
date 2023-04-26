import { IoMdPerson } from "react-icons/io";

export default function ContactIndividualsBtn() {
  return (
    <div className="border rounded border-gray-500 w-64 h-[55%]">
      <div className="flex h-full justify-center items-center gap-6">
        <div className="basis-3/4 px-6">
          <p className="font-serif tracking-widest">
            Individual
            <br />
            Customers
          </p>
        </div>
        <div className="basis-1/4 text-center">
          {/* <IoMdPerson className="text-xl lg:text-4xl border rounded-full border-gray-500" /> */}
        </div>
      </div>
    </div>
  );
}
