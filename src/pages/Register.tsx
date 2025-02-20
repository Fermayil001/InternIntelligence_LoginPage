import { FormEvent, useState } from "react";
import { signUp } from "../fireBase";
import { useAppDispatch } from "../redux/hooks/hooks";
import { login } from "../redux/slices/auth";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import CustomInput from "../components/custom/CustomInput";
import CustomButton from "../components/custom/CustomButton";

const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (!email || !password || !username) {
            setError('Email, şifrə və istifadəçi adı boş ola bilməz!');
            setIsLoading(false);
        } else {
            setError(null);
            try {
                const user = await signUp(email, password);
                if (user) {
                    await updateProfile(user, {
                        displayName: username,
                    });
                    dispatch(login(user));
                    navigate('/auth/login', { replace: true });
                }
                Swal.fire('Success', 'You are registered successfully!', 'success')

            } catch (err: any) {
                setError(err?.message);
            } finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <div className="p-4 w-[60%]">
            <h2 className="text-2xl font-bold">Register</h2>
            <form className="flex flex-col p-4" onSubmit={handleSubmit}>
                <CustomInput
                    id="3"
                    label="Name"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your name"
                    type="text"
                    value={username}
                    error={error}
                />

                <CustomInput
                    id="1"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    error={error}
                />

                <CustomInput
                    id="2"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    error={error}
                />

                <div className="text-right px-1">
                    <span>Already have an account? </span>
                    <Link className="text-blue-700 font-medium" to={'/auth/login'}>Log in</Link>
                </div>
                <CustomButton
                    label='Sign Up'
                    type="submit"
                    disabled={!email || !password || !username || isLoading}
                    isLoading={isLoading}
                />
            </form>
        </div>
    )
}

export default Register;
