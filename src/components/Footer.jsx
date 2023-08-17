import { FaInstagram } from 'react-icons/fa'
import { BsFacebook ,  BsWhatsapp} from 'react-icons/bs'

export const Footer = () => {
    return (

        <footer>

            <div className="footer">
                <div className="footer-nav" style={{ display: "flex" , justifyContent: "center"}}>
                    <a className="nav-link active">Sigamos conectados!</a>
                </div>
                <div style={{ display: "flex" , justifyContent: "center"}}>
                    <div className="footer-nav">
                        <a className="nav-link active text-white"><FaInstagram /></a>
                    </div>
                    <div className="footer-nav">
                        <a className="nav-link active text-white" href="#"><BsFacebook /></a>
                    </div>
                    <div className="footer-nav">
                        <a className="nav-link active text-white" href="#">< BsWhatsapp/></a>
                    </div>
                 </div>
            </div>

        </footer>
    )
}


