
import { useNavigate } from 'react-router-dom'
import './FeaturedProperties.css'

const FeaturedProperties = ({ items }) => {
    const navigate = useNavigate();

    // chuyển sang trang detail
    const handlerDetail = () => {
        navigate('/detail');
    };

    // render chi tiết các hotel
    return (
        <div className="fp">
            {items.map((item, i) => (
                <div key={i} className="fpItem" onClick={handlerDetail}>
                    <img src={item.image_url} alt="" className="fpImg" />
                    <span className="fpName">{item.name}</span>
                    <span className="fpCity">{item.city}</span>
                    <span className="fpPrice">Staring from ${item.price}</span>
                    <div className="fpRating">
                        <button>{item.rate}</button>
                        <span>{item.type}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FeaturedProperties;