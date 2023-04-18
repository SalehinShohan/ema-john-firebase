import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const {singIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        
        singIn(email, password)
        .then( result =>{
           const logedUser = result.user;

           console.log(logedUser)
           form.reset();
           navigate(from, {replace: true});
        })
        .catch(error =>{
            console.log(error)
            
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>

            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='' required  placeholder='Enter your email'/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='' required  placeholder='Enter your password'/>
                </div>
                <button className='btn-login'>Login</button>
            </form>
            <p className='text-some'><small>New to Ema-john? <Link to='/singup' >Create New Account</Link></small></p>
        </div>
    );
};

export default Login;