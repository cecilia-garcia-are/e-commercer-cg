
import './styles/Footer.css'


const Footer = () => {
  return (
    <footer>
        <div  className="footer_container">
        <h3 className="footer__log">E-comerce 2023 </h3>
        
        
        <nav className="footer__nav">

            <ul className="footer__container__list">
              
                <li className="footer__icon"> 
                  <i className='bx bxl-instagram bx-sm'></i>
                  </li>
                
                  <li className="footer__icon"> 
                    <i className='bx bxl-linkedin bx-sm' ></i>
                  </li>

                  <li className="footer__icon">
                    <i className='bx bxl-youtube bx-sm' ></i></li>
            </ul>
        </nav>
        </div>
    </footer>
  )
}

export default Footer