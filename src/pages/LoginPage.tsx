import { useLocation } from 'react-router-dom';
import BgImage from '../assets/images/premium_photo-1720192861639-1524439fc166.jpeg'
import Login from './Login'
import Register from './Register';

const LoginPage = () => {
    const location = useLocation();

    const isLogin = location.pathname.includes('login');


    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className='w-full sm:w-[90%] h-[90vh] flex flex-col sm:flex-row'>
                <div
                    className={`w-[20%] mx-auto rounded-full sm:rounded-lg h-full sm:w-1/2 bg-contain sm:bg-cover bg-no-repeat bg-center`}
                    style={{ backgroundImage: `url(${BgImage})` }}
                >
                </div>

                <div className='w-full sm:w-1/2 flex items-center justify-center'>
                    {isLogin ? <Login /> : <Register />}
                </div>
            </div>
        </div>
    )
}

export default LoginPage;