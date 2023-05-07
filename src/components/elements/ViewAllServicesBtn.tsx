import Link from "next/link";

export default function ViewAllServicesBtn() {
  return (
    <Link
      href="services/all/"
      className="block border border-white text-white w-[180px] px-6 py-4 text-center z-[100] mx-auto hover:bg-gray-700 duration-300 cursor-pointer"
    >
      View All Services
    </Link>
  );
}
