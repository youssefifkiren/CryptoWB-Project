import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';
import React from 'react';

const NavItem = ({title, Properties}) => {
    return (
        <li className={`mx-4 cursor-pointer ${Properties}`}>
            {title}
        </li>
    );
}
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-inital justify-center items-center">
                {/* <img src={logo} alt="CryptoWB" className="w-32 cursor-pointer" /> */}
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-inital">
                {["Marché", "Echanges", "Coures", "Port-feullies"].map( (item, id) => (
                    <NavItem key={item + id} title={item} />
                ) )}
                <li className="bg-[#2955f3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2440b0]">Login</li> 
            </ul>
            <div className="flex relative">
                {toggleMenu ? 
                    <AiOutlineClose fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => {setToggleMenu(false)}}/> 
                :
                    <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => {setToggleMenu(true)}}/>
                    
                }
                {toggleMenu && (
                    <ul className="z-10 flex top-0 right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide">
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                        </li>
                        {["Marché", "Echanges", "Coures", "Port-feullies"].map( (item, id) => (
                        <NavItem key={item + id} title={item} Properties="my-2 text-lg"/>
                    ) )}
                
                    </ul>
                )}
            </div>
        </nav>
        
    );
}

export default Navbar;