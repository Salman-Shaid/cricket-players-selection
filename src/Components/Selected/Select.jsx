
import { MdDeleteForever } from "react-icons/md";
const Select = ({ selectedProduct, handleDelete }) => {
    // console.log(selectedProduct);
    return (
        <div>
            <h3 className="text-2xl font-bold ml-4"> Selected player({selectedProduct.length}/6)</h3>
            {
                selectedProduct.map((p) => (
                    <div className="flex justify-between items-center px-5 bg-gray-100  m-2 rounded-lg">
                        <div className="flex gap-x-4 items-center">
                            <img className="w-16 h-16 rounded-lg" src={p.cover} alt="" />
                            <div>
                                <p className="text-xl font-medium">{p.player_name}</p>
                                <p className="text-gray-700">{p.batting_direction}</p>
                                <p className="font-medium"> price: ${p.price}</p>
                            </div>
                        </div>
                        <button onClick={() => handleDelete(p.id)} className="btn py-2 px-4 rounded-lg text-red-400 bg-gray-200">
                            <MdDeleteForever />
                        </button>

                    </div>
                ))
            }

            <button className='btn mx-2 p-2 bg-[#e2f928] text-black rounded-lg font-medium'>Add More Players</button>
        </div>
    );
};

export default Select;