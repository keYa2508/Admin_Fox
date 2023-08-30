import React, {useState} from 'react'
import Animation from './Animation'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

function Login() {
  const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='row col-12 d-flex justify-content-center h-screen align-items-center'>
            <div className='mt-5 col-6 flex justify-center items-center '>
                <Animation/></div>
            <div className='d-flex gap-5 flex-column justify-content-center align-items-center col-6'>
                <div className='text-gray-700 text-4xl flex justify-start font-extrabold'>Welcome Back !
                </div>
                <div className='d-flex gap-3 flex-column w-50 align-items-start'>
                    <label className='text-2xl font-semibold'>Username</label>
                    <input className='rounded-3xl border-black border-2 p-2 w-full'
                        value={user}
                        type='text'
                        placeholder='Enter your Username here'
                        onChange={(e) => setUser(e.target.value)}
                    />

                    <label className='text-2xl font-semibold'>Password</label>
                    <div className='flex flex-row justify-end items-center w-full'>
                    <input className='relative rounded-3xl border-black border-2 p-2 w-full'
                        value={password}
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter your Password here'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className ='absolute pr-4 text-xl' style={{cursor:"pointer"}} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye/>}
                        </div>
                    </div>
                    <span className='flex flex-col gap-5 items-center justify-center w-full'>
                        <a className='text-xl font-semibold text-black' href='#' disabled>Forget Password</a>

                        <button  className='rounded-3xl text-white bg-black border-black border-2 p-2 w-full'>Sign In</button>
                    </span>
                </div>

            </div>
</div>
  )
}

export default Login