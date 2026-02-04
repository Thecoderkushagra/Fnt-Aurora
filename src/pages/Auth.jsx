import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import { useState } from 'react';

const Auth = () => {
    const [haveAccount, setHaveAccount] = useState(true);

    return (   
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <div className="relative z-10 bg-[#212529]/80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-gray-600/30 w-full max-w-md">
               {haveAccount ? <Login /> : <Signup />}
            </div>           
        </div>
    );
}
export default Auth;