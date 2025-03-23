import React, {useState} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import PasswordInput from '../../components/Input/PasswordInput';
import axios from 'axios'

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");
        try{
            const response = await axios.post("http://localhost3001/signup", {
                name,
                email,
                password
            });
        }catch(err){
            setError(err.response?.data?.message || "SignUp Failed !")
        }
    }
    return (
        <>
            <NavBar />
            <div className='flex justify-center items-center mt-28'>
                <div className='w-96 bg-white rounded mx-auto p-4'>
                    <h4 className='mb-12 text-[36px]'>SignUp </h4>
                    <form onSubmit={handleSignUp}>
                        <input 
                            type="text" 
                            placeholder='Enter your name..'
                            className='input-box'
                            value={name}
                            onChange={(e)=>{setName(e.target.value);}}
                        />
                        <input 
                            type="text"
                            placeholder='Enter your email'
                            className='input-box'
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value);}}
                        />
                        <PasswordInput 
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <button 
                            type='submit'
                            className='btn-primary p-2'
                        >
                            SignUp !
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;