import BgImage from '../assets/images/premium_photo-1720192861639-1524439fc166.jpeg'
import Login from './Login'

const LoginPage = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className='w-[90%] border h-[90vh] flex'>
                <div
                    className={`w-1/2 bg-cover bg-center`}
                    style={{ backgroundImage: `url(${BgImage})` }}
                >
                </div>

                <div className='w-1/2 border flex items-center justify-center'>
                <Login/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;