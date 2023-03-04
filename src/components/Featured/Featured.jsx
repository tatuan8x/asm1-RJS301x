import './Featured.css';


const Featured = ({ items }) => {
  // render các thành phố
    return (
      <div className="featured">
        {items.map((item, i) => (
          <div key={i} className="featuredItem">
            <img src={item.image} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>{item.name}</h1>
              <h2>{item.subText}</h2>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Featured;