import { useForm } from 'react-hook-form'
import './styles/FilterPrice.css'

const FilterPrice = ({setFromTo}) => {

  const { register, reset, handleSubmit} = useForm()

  const submit = data => {
    const from = Number(data.from.trim())
    const to = +data.to.trim()
    const obj = {
      from: from || 0,
      to: to || Infinity
    }
    setFromTo(obj)
  }

  return (
    <article className='price__container'>
        <h3 className='price__title'>Price</h3>

        
        <form className='price__form-container' onSubmit={handleSubmit(submit)}>

        <div className='price__group'>
          <label className='price__label' htmlFor="from">From</label>
          <input {...register('from')} className='price__input' type="number" id="from" />
        </div>

        <div className='price__group'>
          <label className='price__label' htmlFor="to">To</label>
          <input {...register('to')} className='price__input' type="number" id="to" />
        </div>
        <button className='price__button'>Filter Price</button>

      </form>
    </article>
  )
}

export default FilterPrice