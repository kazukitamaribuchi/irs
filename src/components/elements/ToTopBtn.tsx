import { SlArrowUp } from "react-icons/sl";
import { useEffect, useState } from "react";

export default function ToTopBtn() {
  const [showToTopBtn, setShowToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", watchScroll);
    return () => {
      window.removeEventListener("scroll", watchScroll);
    };
  }, []);

  const watchScroll = () => {
    const basePosition = 800;
    const scrollPosition = window.scrollY;
    setShowToTopBtn(basePosition <= scrollPosition);
  };

  return (
    <>
      {showToTopBtn && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-16 right-20 z-50 rounded-full p-3 duration-500 hover:bg-slate-100/50 cursor-pointer text-slate-300 hover:text-slate-500"
        >
          <SlArrowUp className="text-6xl" />
        </div>
      )}
    </>
  );
}
