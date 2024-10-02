import logo from '../assets/ll.png';

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50">
            <div className="navbar px-12 bg-base-100 shadow-lg">
                <div className="flex-1">
                    <img className='h-20 w-44' src={logo} alt="logo" />
                </div>
                <div className="flex-none">
                    <ul className="font-bold text-lg menu menu-horizontal gap-12 px-1">
                        
                        <li><a className="hover:bg-salmon hover:text-white p-2 rounded">Home</a></li>
                        <li><a className="hover:bg-salmon hover:text-white p-2 rounded">Get Funded</a></li>
                        <li>
                            <details>
                                <summary className="hover:bg-salmon hover:text-white p-2 rounded">Category</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a className="hover:bg-salmon hover:text-white p-2 rounded">ProfitSharing</a></li>
                                    <li><a className="hover:bg-salmon hover:text-white p-2 rounded">Stocks</a></li>
                                    <li><a className="hover:bg-salmon hover:text-white p-2 rounded">Debt</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="hover:bg-salmon hover:text-white p-2 rounded">Login</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a className="hover:bg-salmon hover:text-white p-2 rounded">Investor</a></li>
                                    <li><a className="hover:bg-salmon hover:text-white p-2 rounded">Founder</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
