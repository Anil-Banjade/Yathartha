import Logo from "../assets/logo.jpg";
import "../styles/footer.css"
import { Socials } from "./Navbar";
import { _EventDetails, _QuickLinks } from "../assets/data/Yathartha";

import { FaMobileScreen, FaRegEnvelope, FaLocationDot } from "react-icons/fa6";

const Footer : React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="lg:px-16 px-2 p-8 bg-theme-black text-theme-white text-center">
      <div className="flex md:flex-row flex-col justify-evenly items-center md:items-start min-h-[10rem]">
        <div className="flex flex-col justify-evenly items-center m-2">
          <img src={Logo} alt="Logo" className="w-[2rem]"/>
          <h1 className="text-theme text-4xl font-bold">{_EventDetails.name}</h1>
          <span>{_EventDetails.mainquote}</span>
        </div>
        <div className="flex flex-col justify-evenly items-center m-2 md:items-start">
          <h1 className="text-theme-red text-xl font-bold">Quick Links</h1>
          <ul className="flex flex-col md:items-start justify-evenly items-center">
            {
              _QuickLinks.map(({item, url})=>
              {
                return <li><a href={url}>{item}</a></li>
              })
            }
          </ul>
        </div>
        <div className="flex flex-col justify-evenly items-center m-2 text-sm md:items-start">
          <h1 className="text-theme-red text-xl font-bold">Contact Us</h1>
          <div className="flex items-center">
            <FaMobileScreen />
            <span className="m-2">{_EventDetails.contact.phone}</span>
          </div>

          <div className="flex items-center">
            <FaRegEnvelope />
            <a href="mainto:techfest@tcioe.edu.np" className="m-2">{_EventDetails.contact.email}</a>
          </div>

          <div className="flex items-center">
            <FaLocationDot />
            <span className="m-2">{_EventDetails.location}</span>
          </div>
        </div>
      </div>
      <div className="text-theme-white text-center">
        <span className="text-xl text-theme-red font-bold">Connect with us on:</span>
        <div className="text-4xl mx-auto w-[50%] my-2">
          <Socials />
        </div>
        <div className="m-4 font-light">
          Copyright &copy; {currentYear} | <span className="text-theme font-bold">{_EventDetails.name}</span> | All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
