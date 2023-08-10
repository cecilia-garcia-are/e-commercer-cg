import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import  './styles/Login.css'

const LoginPage = () => {

  const{handleSubmit, reset, register} = useForm()

  const { loginUser } = useAuth()
  const navigate = useNavigate()

  const submit = data =>{
    loginUser(data, navigate)

  }

  return (
  
    <form className='form__container' onSubmit={handleSubmit(submit)}>

      <h3 className='form__title'>Welcome! Enter your email and password to continue</h3>

      <div className='form__login'>

        <label className='form__label' htmlFor="email">Email:</label>
        <input className='form__input' {...register('email')} type="email" id="email" />

      </div>

      <div className='form__login'>

        <label className='form__label' htmlFor="password">Password:</label>
        <input className='form__input' {...register('password')} type="password" id="password" />

      </div>

      <div className='form__checkbox'>
        <input className='box' type="checkbox" name="" id="" />
        <span>Remind me</span>
      </div>

      <button className='button__login'>Login</button>

      <h4 className='form__signup'>Don't have an account? <Link to={'/register'}>Sign up</Link></h4>

     
    </form>
  
  )
}

export default LoginPage