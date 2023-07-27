import { useNavigate } from 'react-router-dom'

export const Item = ({ id, img, category, title, price }) => {
    const navigate = useNavigate();

    return (
        <div className="card m-3" style={{ width: '18rem' }} onClick={() => navigate(`/item/${id}`)}>
            <img src={img} className="imagenPro"></img>
            <div className="card-body auto">
                <h5 className="card-title"> {title}</h5>
                <div className="card-text text-primary"> {category}
                </div>
                <div className="card-text text-warning"> ${price.toLocaleString("es-AR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}</div>
                <p className="card-text text-secondary">
                    <small>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa beatae, quis pariatur id illo recusandae a harum ex suscipit dolorum, culpa eaque quisquam unde vel omnis nobis rerum veniam.
                    </small></p>
            </div>
        </div>
    )
}
