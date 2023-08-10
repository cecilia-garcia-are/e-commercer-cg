import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import './styles/Register.css'


const RegisterPage = () => {


    const {register, reset, handleSubmit} = useForm()
    
    const { createUser }= useAuth()
    const navigate = useNavigate()

    const submit = data =>{
        createUser(data, navigate)

        reset({
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            phone:''
        })
    }
  return (

    <form className="form__container_r" onSubmit={handleSubmit(submit)}>
       <h3 className='form__title_r'>Welcome! Create an account to continue</h3>
      <div className='form__register'>
        <label className='form__label' htmlFor="firstname">First Name</label>
        <input className='form__input' {...register('firstName')} type="text" id="firstname" />
      </div>

      <div className='form__register'>
        <label className='form__label_r' htmlFor="lastname">Last Name</label>
        <input className='form__input_r' {...register('lastName')} type="text" id="lastname" />
      </div>

      <div className='form__register'>
        <label className='form__label_r' htmlFor="email">Email</label>
        <input className='form__input_r' {...register('email')} type="email" id="email" />
      </div>

      <div className='form__register'>
        <label className='form__label_r' htmlFor="password">Password</label>
        <input className='form__input_r' {...register('password')} type="password" id="password" />
      </div>

      <div className='form__register'>
        <label className='form__label_r' htmlFor="phone">Phone</label>
        <input className='form__input_r' {...register('phone')} type="text" id="phone" />
      </div>

      <div className='form__checkbox_r'>
        <input className='box_r' type="checkbox" name="" id="" />
        <span>Remind me</span>
      </div>

        <button className='button__register'>Create User</button>
        
        <h4 className='form__login'>Do you have an account? <Link to={'/login'}>Login</Link></h4>

    </form>
  )
}

export default RegisterPage