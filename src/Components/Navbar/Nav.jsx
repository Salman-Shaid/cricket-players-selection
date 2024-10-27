

import bg from '../../assets/banner-main.png'
const Nav = ({setCoin,coin}) => {
   

    return (
       
        <div className='flex justify-center items-center  p-10  bg-gradient-to-bl from-[#553131b9] via-[#0c072b] to-[#4f49aafb] via-black to to-purple   rounded-xl m-5' >
            <div className='text-center'>
            <div className='flex justify-center items-center'><img className=' mb-2' src={bg} alt="" /></div>
            <h1 className='text-2xl font-bold p-2 text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className='text-xl text-gray-50 font-medium mb-2'>Beyond Boundaries Beyond Limits</h3>
            <button onClick={()=>setCoin(()=>coin+90000)} className='btn p-2 bg-[#e2f928] text-black rounded-lg font-medium'>claim free credit</button>
            </div>

            
        </div>
    );
};

export default Nav;