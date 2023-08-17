import { useNavigate } from 'react-router-dom'
import { LocaleString } from '../LocaleString/LocaleString';
import './Item.css';


export const Item = ({ id, img, category, title, price }) => {
    const navigate = useNavigate();

    return (
        <div className="card bg-light m-3 item" onClick={() => navigate(`/item/${id}`)}>
            <img src={img} className="imagenPro"></img>
            <div className="card-body auto">
                <h5 className="card-title"> {title}</h5>
                <div className="card-text text-secondary text-categ" style={{fontStyle:"oblique"}}> {category}
                </div>
                <div className="card-text" style={{color: "red"}}><LocaleString num ={price}/></div>
            </div>
        </div>
    )
}
