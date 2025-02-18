import { FormEvent, useState } from "react"
import CustomInput from "../assets/components/custom/CustomInput"
import CustomButton from "../assets/components/custom/CustomButton"
import { useAppDispatch } from "../redux/hooks/hooks"
import { signIn } from "../fireBase"
import { login } from "../redux/slices/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [password, setPAssword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email || !password) {
            setError('Email və şifrə boş ola bilməz!');
        } else {
            setError(null);
            const user = await signIn(email, password);
            if (user) {
                dispatch(login(user));
                navigate('/', { replace: true });
            } else {
                setError('User not found!');
            }
        }
    }



    return (
        <div className=" p-4 w-[60%]">
            <h2 className="text-2xl font-bold">Login In</h2>
            <form className="flex flex-col">
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
                    label="Sign In"
                    onClick={() => handleSubmit}
                    disabled={!email || !password}
                />
            </form>

            <button >LogOut</button>

        </div>
    )
}

export default Login