import { useState } from "react"
import { handleResetPassword } from "../fireBase"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import CustomInput from "../components/custom/CustomInput"
import CustomButton from "../components/custom/CustomButton"

const ForgetPassword = () => {

    const [email, setEmail] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await handleResetPassword(email)
            await Swal.fire('Success', 'Reset link has been sent to your email!', 'success')
            navigate("/auth/login")
            setIsLoading(false)
        } catch (error: any) {
            const errorMessage = error?.message
            Swal.fire('Error', `${errorMessage}`, 'error')
            setIsLoading(false)
        }
    }

    return (
        <div className="h-screen w-[30%] mx-auto flex flex-col justify-center items-center">
            <h2 className="text-2xl font-medium mb-5">Forgot Password?</h2>
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <CustomInput
                    id="755"
                    label="Write your email address"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <CustomButton
                    label="Send Password Reset Link"
                    type="submit"
                    isLoading={isLoading}
                />
            </form>
            <p className="text-center mt-5">
                Back to <span onClick={() => navigate("/auth/login")} className="underline text-blue-700">Login</span>
            </p>
        </div>
    )
}

export default ForgetPassword