type NavbarProps = {
  menu1: string;
  menu2: string;
  menu3: string;
  color?: string;
  bgColor?: string;
  logoColor?: string;
};
export const Navbar = ({
  menu1,
  menu2,
  menu3,
  color = "text-amber-500",
  bgColor = "bg-slate-900",
  logoColor = "text-amber-500",
}: NavbarProps) => {
  return (
    <div className="px-32">
      <nav className={`${bgColor} h-10 flex items-center `}>
        <h1 className={`font-black ${logoColor} ml-4`}>Logo</h1>
        <ul className={`flex ml-auto ${color}`}>
          <li className="cursor-pointer mr-4">{menu1}</li>
          <li className="cursor-pointer mr-4">{menu2}</li>
          <li className="cursor-pointer mr-4">{menu3}</li>
        </ul>
      </nav>
    </div>
  );
};
