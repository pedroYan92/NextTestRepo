export const Navbar: React.FC = () => {
  return (
    <div className="px-4">
      <nav className="bg-slate-900 h-10 flex items-center text-amber-500">
        <ul className="flex  ml-auto">
          <li className="cursor-pointer mr-4">About</li>
          <li className="cursor-pointer mr-4">Services</li>
          <li className="cursor-pointer mr-4">Contact</li>
        </ul>
      </nav>
    </div>
  );
};
