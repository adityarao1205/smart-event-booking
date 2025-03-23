import React, {useState} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import PasswordInput from '../../components/Input/PasswordInput';
// import API from '../../utils/axiosInstance';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleLogin = async (e) => {
        // e.preventDefault();
        // setError("");
        // try{
        //     const {data} = await API.post("/login", {email, password});
        //     console.log("Response: ", data);
        // }catch(err){
        //     setError(err.response?.data?.message || "LoginFailed !")
        // }
    }
    return (
        <>
            <NavBar />
            <div className='flex justify-center items-center mt-28'>
                <div className='w-96 rounded mx-auto p-4 bg-white'>
                    <h4 className='mb-12 text-[36px]'>Login </h4>
                    <form onSubmit={handleLogin}>
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
                            Login !
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;