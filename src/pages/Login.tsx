import { FormEvent, useState } from "react"
import { useAppDispatch } from "../redux/hooks/hooks"
import { signIn } from "../fireBase"
import { login } from "../redux/slices/auth"
import { Link, useNavigate } from "react-router-dom"
import CustomInput from "../components/custom/CustomInput"
import CustomButton from "../components/custom/CustomButton"

const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [password, setPAssword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        if (!email || !password) {
            setError('Email və şifrə boş ola bilməz!');
        } else {
            setError(null);
            const user = await signIn(email, password);
            if (user) {
                dispatch(login({
                    id: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                }));
                navigate('/', { replace: true });
            }
            setIsLoading(false);
        }
    }

    return (
        <div className=" p-4 w-[60%]">
            <h2 className="text-2xl font-bold">Login In</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <CustomInput
                    id="1"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your username"
                    type="email"
                    value={email}
                    error={error}
                />
                <CustomInput
                    id="2"
                    label="Password"
                    onChange={(e) => setPAssword(e.target.value)}
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    error={error}
                />

                <CustomButton
                    label='Sign in'
                    onClick={() => handleSubmit}
                    disabled={!email || !password}
                    isLoading={isLoading}
                />
                <div className="text-center py-2 mt-2">
                    <Link to={'/forgetPassword'} className="text-blue-700 w-fit">Forgot password? </Link>
                </div>
            </form>
            <div className="flex justify-center mt-5">
                <CustomButton
                    label='Sign Up'
                    onClick={() => navigate('/auth/register')}
                    isCreate={true}
                />
            </div>
        </div>
    )
}

export default Login