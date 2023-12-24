import Navbar from "@/components/Navbar";
import Image from "next/image";
import logo from "@/assets/landingPage/ReliveLogo.png";
import Login from "@/components/auth/Login";

const Home = () => {
  return (
    <div className="h-screen max-h-min flex flex-col">
      <Navbar />

      <div className="body lg:flex px-16 w-full lg:h-5/6 ">
        <Image
          src={logo}
          alt="Graphics"
          className="lg:w-1/3 lg:my-auto lg:mx-auto mt-24"
        />
        <div className="lg:ml-auto lg:w-1/2 w-screen">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
