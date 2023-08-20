import './Skeleton.css'
import '../Item/Item.css'

export const Skeleton = () => {

    return (
        <>
            <div className="card m-3 item">
                <div className="imagenPro skeleton"></div>
                <div className="card-body auto">
                    <h5 className="card-title tit-skeleton skeleton"> </h5>
                    <div className="card-text text-skeleton skeleton">  </div>
                </div>
            </div>
        </>)
}