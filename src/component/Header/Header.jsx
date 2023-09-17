// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProviders";

// const Header = () => {
//     const {user,logOut} = useContext(AuthContext);
//     console.log(user);
//     const handleLogout = () =>{
//         logOut()
//         .then(result =>{})
//         .catch(error =>console.log(error))
//     }

//     return (
//         <div className='bg-lime-600 justify-between text-white flex py-2 px-10 items-center'>
//             <p className="font-bold">Ema John</p>
//             <ul className="flex font-bold">
//                 <li className="mr-4"><Link to='/'>Home</Link></li>
//                 <li className="mr-4"><Link to='/order'>Order</Link></li>
//                 <li className="mr-4"><Link to='/store'>Store</Link></li>
                
//                 <li className="mr-4"><Link to='/login'>Login</Link></li>
//                 <li className="mr-4"><Link to='/register'>Register</Link></li>
//                 {
//                     user &&
//                     <li className="mr-4" onClick={handleLogout}>logout</li>
//                     // <p>{user.email}</p>
//                 }
                
//             </ul>
//         </div>
//     );
// };

// export default Header;
//******************************************************/
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))

    }
    return (
        <div className='bg-lime-600 justify-between text-white flex py-2 px-10 items-center'>
            <p className="font-bold">Ema John</p>
            <ul className="flex font-bold">
                <li className="mr-4"><Link to='/'>Home</Link></li>
                <li className="mr-4"><Link to='/order'>Order</Link></li>
                <li className="mr-4"><Link to='/store'>Store</Link></li>
                

                {
                    user ?
                    <>
                      <img src={user.photoURL} alt="" />
                      <li className="mr-4" onClick={handleLogOut}>logout</li>
                    </>:
                    <>                
                    <li className="mr-4"><Link to='/login'>Login</Link></li>
                    <li className="mr-4"><Link to='/register'>Register</Link></li>
                    </>
                    // <p>{user.email}</p>
                }
                
            </ul>
        </div>
    );
};

export default Header;