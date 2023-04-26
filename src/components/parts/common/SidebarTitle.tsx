interface Props {
  title: string;
  textwhite?: boolean;
}

var getSideTitle = (title: string) => {
  let st = title;
  let items = [];
  for (let i = 0; i < st.length; i++) {
    items.push(
      <p key={i} className="rotate-90 text-[0.8rem] h-[10px] w-[110px]">
        {st[i]}
      </p>
    );
  }
  return <>{items}</>;
};

export default function SidebarTitle({
  title,
  textwhite = false,
  ...props
}: Props) {
  let cls = textwhite ? "text-white text-center" : "text-center";

  return <div className={cls}>{getSideTitle(title)}</div>;
}
