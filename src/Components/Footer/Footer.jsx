
import footer from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-gray-800 text-gray-50 pt-56 mt-52'>
           <div className='flex justify-center items-center mb-10 '> <img className=' text-center' src={footer} alt="" /></div>
           <div className='flex flex-col lg:flex-row md:flex-row justify-around border-b-2 pb-10 text-gray-300 text-center lg:text-start md:text-start'>
            <div>
               <h3 className='font-medium text-white'>About us</h3>
               <p>We are a passionate team</p>
               <p>dedicated to providing the best</p>
               <p>services to our customers.</p>
            </div>
            <div>
                <h3 className='font-medium text-white'>Quick links</h3>
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact</li>
            </div>

            <div>
                <h3 className='font-medium text-white'>Subscribe</h3>
                <p>Subscribe to our newsletter for the <br /> latest updates.</p>
                <div className='mt-2'>
                    <input className='p-2 rounded-l-lg' type="email" placeholder='Enter Email'/>
                    <button className=  'rounded-r-lg bg-orange-400 p-2 text-gray-700'>Subscribe</button>
                </div>
            </div>
           </div>
           <div>
            <p className='text-center p-4'>@2024 Your Company All Rights Reserved.</p>
           </div>

        </div>
    );
};

export default Footer;