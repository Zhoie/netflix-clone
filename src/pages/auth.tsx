import { useCallback, useState } from "react"
import { useRouter } from 'next/router'

import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'

import Input from "@/components/Input"

export default function Auth() {

    const router = useRouter()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])



    function loginHandler() {
        if (variant === 'login') {
            router.push('/browse')
        } else {
            router.push('/browse')
        }
    }

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover" >
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img className="h-12" src="./images/logo.png" alt="logo" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">{variant === 'login' ? 'Sign in' : 'Register'}</h2>

                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input label="UserName" onChange={(ev: any) => setName(ev.target.value)} id="username" value={name} />
                            )}
                            <Input label="Email" onChange={(ev: any) => setEmail(ev.target.value)} id="email" type="email" value={email} />
                            <Input label="Password" onChange={(ev: any) => setPassword(ev.target.value)} id="password" value={password} />
                        </div>
                        <button onClick={loginHandler} className="bg-red-600  text-white py-3 mt-6 rounded-md w-full hover:bg-red-800" type="button">
                            {variant === 'login' ? 'login' : 'sign up'}
                        </button>

                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                            <div className=" w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-70 transition">
                                <FcGoogle className="text-2xl" />
                            </div>
                            <div className=" w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-70 transition">
                                <FaGithub className="text-2xl" />
                            </div>

                        </div>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ?'First time using Netflix?': 'Already had an account?'}
                            <span onClick={toggleVariant} className="text-white ml-2 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account': 'Sign in'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}