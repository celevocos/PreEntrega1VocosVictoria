import { FaInstagram } from 'react-icons/fa'
import { BsFacebook ,  BsWhatsapp} from 'react-icons/bs'
import './Footer.css'

export const Footer = () => {
    return (

        <footer>
            <div className="footer">
                <div className="footer-nav centrado" >
                    <a className="nav-link active">Sigamos conectados!</a>
                </div>
                <div className="centrado">
                    <div className="footer-nav">
                        <a className="nav-link active" href="#"><FaInstagram /></a>
                    </div>
                    <div className="footer-nav">
                        <a className="nav-link active" href="#"><BsFacebook /></a>
                    </div>
                    <div className="footer-nav">
                        <a className="nav-link active" href="#">< BsWhatsapp/></a>
                    </div>
                 </div>
            </div>

        </footer>
    )
}


