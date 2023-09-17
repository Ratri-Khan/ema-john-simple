// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProviders';

// const Login = () => {
//     const {signIn} = useContext(AuthContext);
//     const handleLogin = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);

//         signIn(email,password)
//         .then(result =>{
//           const loggedUser = result.user;
//           console.log(loggedUser);
//         })
//         .catch(error =>{
//             console.log(error);
//         })
//     }
//     return (
//         <form onSubmit={handleLogin} className='m-auto  w-2/4'>
//             <div className='p-10 w-3/4 border-2 m-auto'>
//                 <h3 className='text-center text-xl'>Please Login</h3>
//                 <div>
//                     <label className='block text-xl'>Email</label>
//                     <input className='w-full border-2 py-2 bg-lime-100 border-lime-600' type="email" name="email" placeholder='Enter Your Email' id="" />
//                 </div>
//                 <div>
//                     <label className='block text-xl'>Password</label>
//                     <input className=' w-full border-2 py-2 bg-lime-100 border-lime-600' type="text" name="password" placeholder='Enter Your password' id="" />
//                 </div>
//                 <div>
//                     <p>new to ema-john?<span className='text-red-500'><Link to='/register'>Create an Account</Link></span></p>
//                 </div>
//                 <div>
//                     <button className='w-full border-2 py-2 mt-5 bg-lime-600 border-lime-600 text-white' type="submit">Login</button>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default Login;
//*******************************************/
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
     const {signIn , handleGoogleSignIn} = useContext(AuthContext);
     const navigate = useNavigate();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate('/');
        })
        .catch(error=>{
           console.log(error);
        })
    }
    const handleGoogle = () =>{
        handleGoogleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
           console.log(error);
        })
    }

    return (
         <form onSubmit={handleLogin} className='m-auto  w-2/4'>
            <div className='p-10 w-3/4 border-2 m-auto'>
                <h3 className='text-center text-xl'>Please Login</h3>
                <div>
                    <label className='block text-xl'>Email</label>
                    <input className='w-full border-2 py-2 bg-lime-100 border-lime-600' type="email" name="email" placeholder='Enter Your Email' id="" />
                </div>
                <div>
                    <label className='block text-xl'>Password</label>
                    <input className=' w-full border-2 py-2 bg-lime-100 border-lime-600' type="text" name="password" placeholder='Enter Your password' id="" />
                </div>
                <div>
                    <p>new to ema-john?<span className='text-red-500'><Link to='/register'>Create an Account</Link></span></p>
                </div>
                <div>
                    <button className='w-full border-2 py-2 mt-5 bg-lime-600 border-lime-600 text-white' type="submit">Login</button>
                </div>
            </div>
        </form>
    );
};

export default Login;