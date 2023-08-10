import { Link } from "react-router-dom"
import './styles/Header.css'

const Header = () => {
  return (
    <header className="header_container">
        <Link to='/'>
        <h1 className="header__log">e-commerce </h1>
        </Link>
        
        <nav className="header__nav">

            <ul className="header__container__list">
              
                <li className="header__btn"> 
                  <Link to='/login'><i className='bx bx-user bx-sm'></i></Link>
                  </li>
                
                  <li className="header__btn"> 
                    <Link to='/register'><i className='bx bx-log-out-circle bx-sm'></i></Link>
                  </li>

                  <li className="header__btn">
                    <Link to='/cart'><i className='bx bx-cart bx-sm' ></i></Link></li>

                    <li className="header__btn">
                      <Link to='/purchases'><i className='bx bx-purchase-tag-alt bx-sm'></i></Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header