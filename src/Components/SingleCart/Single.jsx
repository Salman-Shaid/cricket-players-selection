import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Single = ({cart,handleSelectedProduct}) => {
    // console.log(cart)
    // console.log(handleSelectedProduct);
    const{cover,player_name,country,player_status,batting_direction,price}=cart
    return (
        <div className='space-x-4 border p-3  rounded-xl shadow-lg'>
            <img className='bg-cover h-64 w-full rounded-lg mb-4' src={cover} alt="" />
            <div className='flex items-center gap-2'>
                <h3 className='text-xl font-bold'> {player_name}</h3>

            </div>
            <div className='flex justify-between items-center border-b-2 pb-1'>
                <h3 className='font-medium flex items-center gap-2'> {country}</h3>
                <button className='bg-gray-100 p-2 rounded-lg '>{player_status}</button>
            </div>
            <h2 className='font-medium my-2'>Rating</h2>

            <div className='flex justify-between items-center'>
                <h3 className='font-medium'>{batting_direction}</h3>
                <h3>{batting_direction} batsman</h3>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-medium'>price: ${price}</p>
                <button onClick={()=>handleSelectedProduct(cart)} className='btn bg-gray-100 p-2 px-4 rounded-xl my-3'>Choose player</button>
               
            </div>
            
           
        </div>
    );
};
Single.propTypes={
    cart:PropTypes.object
}
export default Single;