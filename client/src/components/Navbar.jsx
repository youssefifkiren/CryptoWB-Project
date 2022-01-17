import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavItem = ({title, Properties}) => {
    return (
        <li className={`mx-4 cursor-pointer ${Properties}`}>
            {title}
        </li>
    );
}
const Navbar = () => {
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-inital justify-center items-center">
                <img src={logo} alt="CryptoWB" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hiddent list-none flex-row justify-between items-center flex-inital">
                {["Marché", "Echanges", "Coures", "Port-feullies"].map( (item, id) => (
                    <NavItem key={item + id} title={item} />
                ) )}
                <li className="bg-[#2955f3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2440b0]">Login</li> 
            </ul>
        </nav>
    );
}

export default Navbar;