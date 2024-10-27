

const Mail = () => {
    return (
        <div className="w-full absolute bottom-[500px] ">
            <nav className="w-10/12 mx-auto bg-gradient-to-tr from-sky-200 via-white to-orange-200 text-center space-y-4 p-20 bg-red-50 rounded-lg">
                <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
                <p className="text-gray-600 font-medium">Get the latest updates and news right in your inbox!</p>
                <div className="flex flex-col lg:flex-row md:flex-row gap-y-2 gap-x-2 justify-center items-center">
                    <input className="border shadow-md px-4 py-2 rounded-lg" type="email" placeholder="Enter Your Email" />
                    <button className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 px-4 py-2 rounded-lg">Subscribe</button>
                </div>
            </nav>
        </div>
    );
};

export default Mail;