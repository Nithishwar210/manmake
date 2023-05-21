
const Home = () => {
    return (
        <div className="height-full bg-red-500 ">
            <div className="bg-gray-100 py-10 px-24">
                <p className="text-red-500 text-1xl mb-4 font-medium">NSE & BSE Authorized Firm</p>

                <h1 className="text-[80px] text-black mb-4">
                    Finance Your <br /> Future With US...
                </h1>

                <p className="text-gray-400 mb-4">
                    {`Stock market doesn't only teaches to make money but it also teaches lot`}<br /> about life, patience, persistence and wisdom.
                </p>

                <div className="flex mt-10">
                    <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-800">Certificates</button>
                    <button type="button" className="text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-800">Certificates</button>
                </div>
            </div>
        </div>
    )
}

export default Home