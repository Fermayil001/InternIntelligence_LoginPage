import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks"
import { logout } from "../redux/slices/auth"
import CustomButton from "../components/custom/CustomButton"

const Home = () => {

    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const user = useAppSelector(state => state.auth.user)

    return (
        <div className="flex justify-center items-center  h-screen">
            <div className="flex flex-col items-center gap-3">
                <h2 className="text-3xl ">{isLoggedIn ? `Welcome, ${user?.displayName ? user?.displayName : user?.email}` : 'Welcome, Guest!'}</h2>
                <div className="mt-2">
                    {!isLoggedIn && <Link className="border w-fit px-15 py-2 rounded-lg text-center bg-blue-500 hover:bg-blue-600 text-white font-light" to={'auth/login'}>Login</Link>}
                    {!isLoggedIn && <Link className=" w-fit px-15 py-2 rounded-lg text-center text-blue-900 hover:opacity-80 font-light" to={'auth/register'}>Register</Link>}
                    {isLoggedIn && <CustomButton
                        label="Log out"
                        onClick={() => dispatch(logout())}
                        type="button"
                    />}
                </div>
            </div>
        </div >
    )
}

export default Home