import ContactBtn from "../../elements/ContactBtn";

export default function HeroHeaderMenu() {
  return (
    <div>
      <div className="absolute top-0 left-0 w-[35%] z-40 bg-slate-100 opacity-70 h-[100%]"></div>
      <div className="absolute top-0 pt-48 left-[50px] w-[27%] z-[50] h-full">
        <div>
          <h1 className="text-4xl leading-[3rem] font-semibold">
            Unleash the power of global insights with our professional research
            team, satisfying all your diverse needs
          </h1>
          <h2 className="text-2xl pt-10 font-medium">
            Findings from Aon’s 2021 Global Risk Management Survey
          </h2>
        </div>
        <div className="mt-12">
          <ContactBtn />
        </div>
      </div>
    </div>
  );
}
