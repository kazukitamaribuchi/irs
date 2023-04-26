import Link from "next/link";

export default function EntryBtn() {
  return (
    <div className="w-[250px] py-3 text-right border-b border-gray-500 cursor-pointer">
      <Link href="contact">
        <div className="text-2xl font-mono">Show Details</div>
      </Link>
    </div>
  );
}
