import React, { useContext, useState } from 'react';
import './SingUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SingUp = () => {

    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSingUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm);
        
        setError('');

        if(password !== confirm){
            setError('Your password did not match.');
            return
        }
        else if(password.length < 6){
            setError('Your password must be six characters.')
            return
        }
        createUser(email, password)
        .then(result =>{
            const logedUser = result.user;
            console.log(logedUser);
        })
        .catch(errorr =>{
            console.log(error);
            setError(error.message);
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sing Up</h2>

            <form onSubmit={handleSingUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='' required  placeholder='Enter your email'/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='' required  placeholder='Enter your password'/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' id='' required  placeholder='Enter your password'/>
                </div>
                <button className='btn-login'>Sing Up</button>
            </form>
            <p className='text-some'><small>Already have an account?<Link to='/login'>Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SingUp;