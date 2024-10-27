import profile from '../../assets/logo.png'
import { AiFillDollarCircle } from "react-icons/ai";


const Header = ({coin}) => {
    return (
        <div className="flex lg:flex-row md:flex-row flex-col  justify-between p-4 items-center mx-auto">
            <div className='hidden md:block'>
        <img className='w-16' src={profile} />
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row list-none space-x-6 text-[16px] font-medium ">
               
                <div className='flex gap-x-4 items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
                </div>
               <div className="">
               <li className="flex justify-center items-center pl-4 py-2 bg-gray-100 rounded-lg
               "> { coin} Coin 
                <AiFillDollarCircle className='text-red-400 text-xl'/>
               </li>
               </div>

            </div>
        </div>
    );
};

export default Header;