// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProviders';

// const Register = () => {
//     const {createUser , user} = useContext(AuthContext);
//     console.log(user);
//     const [error,setError] = useState('');

//     const handleRegister = (event) =>{
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         const confirmPassword = form.confirmPassword.value;
//     setError('');
//     if(password !== confirmPassword){
//         setError('Your password did not match')
//         return}

//     if(password.length <6){
//         setError('Password must be 6 character')
//         return}

//     createUser(email,password)
//     .then(result =>{
//         const loggedUser = result.user;
//         console.log(loggedUser);
//     })
//     .catch(error => {
//         console.log(error);
//         setError(error.massage);
//     })
// }
//     return (
//         <form onSubmit={handleRegister} className='m-auto mt-5 w-2/4'>
//         <div className='p-10 w-3/4 border-2 m-auto'>
//             <h3 className='text-center text-xl'>Please Register</h3>
//             <div  className="form-control">
//                 <label className='block text-xl'>Email</label>
//                 <input className='rounded w-full border-2 py-2 bg-lime-100 border-lime-600' type="email" name="email" placeholder='Enter Your Email' id="" />
//             </div>
//             <div className="form-control">
//                 <label className='block text-xl'>Password</label>
//                 <input className='rounded w-full border-2 py-2 bg-lime-100 border-lime-600' type="text" name="password" placeholder='Enter Your password' id="" />
//             </div>
//             <div className="form-control">
//                 <label className='block text-xl'>Confirm Password</label>
//                 <input className='rounded w-full border-2 py-2 bg-lime-100 border-lime-600' type="text" name="confirmPassword" placeholder='Enter Your password' id="" />
//             </div>
//             <div className="form-control">
//                 <p className=''><Link to='/login'>Already have an Account?</Link></p>
//             </div>
//             <div>
//                 <button className='rounded w-full border-2 py-2 mt-5 bg-lime-600 border-lime-600 text-white' type="submit">Register</button>
//             </div>
//             <p>{error}</p>
//         </div>
//     </form>
//     );
// };



// export default Register;
//******************************************************/
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {
    const { createUser, user } = useContext(AuthContext);
    const {error,setError} = useState('')
    console.log(user);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        if (password !== confirmPassword) {
            setError('Your password did not match')
            return
        }

        if (password.length < 6) {
            setError('Password must be 6 character')
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <form onSubmit={handleRegister} className='m-auto mt-5 w-2/4'>
            <div className='p-10 w-3/4 border-2 m-auto'>
                <h3 className='text-center text-xl'>Please Register</h3>
                <div className="form-control">
                    <label className='block text-xl'>Email</label>
                    <input className='rounded w-full border-2 py-2 bg-lime-100 border-lime-600' type="email" name="email" placeholder='Enter Your Email' id="" />
                </div>
                <div className="form-control">
                    <label className='block text-xl'>Password</label>
                    <input className='rounded w-full border-2 py-2 bg-lime-100 border-lime-600' type="text" name="password" placeholder='Enter Your password' id="" />
                </div>
                <div className="form-control">
                    <label className='block text-xl'>Confirm Password</label>
                    <input className='rounded w-full border-2 py-2 bg-lime-100 border-lime-600' type="text" name="confirmPassword" placeholder='Enter Your password' id="" />
                </div>
                <div className="form-control">
                    <p className=''><Link to='/login'>Already have an Account?</Link></p>
                </div>
                <div>
                    <button className='rounded w-full border-2 py-2 mt-5 bg-lime-600 border-lime-600 text-white' type="submit">Register</button>
                </div>
                <p>{error}</p>
            </div>
        </form>
    );
};

export default Register;