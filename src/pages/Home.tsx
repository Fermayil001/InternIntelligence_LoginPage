import { Link } from "react-router-dom"
import { useAppSelector } from "../redux/hooks/hooks"

const Home = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const user = useAppSelector(state => state.auth.user)

    console.log(user)

    return (
        <div className="flex justify-center items-center  h-screen">
            <div>
                {/* {isLoggedIn? `Welcome, ${user?.name}` : 'Welcome, Guest!'} */}
                <br />
                <Link to={'auth/login'}>Login</Link>
                <br />
                <Link to={'auth/register'}>Register</Link>
                <br />
                {isLoggedIn && <Link to={'/logout'}>Logout</Link>}
                <br />
            </div>
        </div >
    )
}

export default Home