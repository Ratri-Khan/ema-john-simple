// import React from 'react';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='bg-lime-600 justify-between text-white flex py-2 px-10 items-center'>
            <p className="font-bold">Knowledge Cafe</p>
            <ul className="flex font-bold">
                <li className="mr-4"><Link to='/'>Home</Link></li>
                <li className="mr-4"><Link to='/order'>Order</Link></li>
                <li className="mr-4"><Link to='/store'>Store</Link></li>
                {/* <li><Link to='/'>Home</Link></li> */}
            </ul>
        </div>
    );
};

export default Header;