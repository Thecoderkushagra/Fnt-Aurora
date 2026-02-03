import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';

const Auth = () => {

    return (   
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1d20] text-white">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            
            <div className="relative z-10 bg-[#212529]/80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-gray-600/30 w-full max-w-md">
                <Signup />
            </div>           
        </div>
    );
}
export default Auth;