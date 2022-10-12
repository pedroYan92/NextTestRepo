import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Navbar
        menu1="About"
        menu2="Last section"
        menu3="Contact"
        color="text-red-500"
        logoColor="text-gray-200"
      />
    </div>
  );
};

export default Home;
