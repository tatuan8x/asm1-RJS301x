import "./PropertyList.css";

const PropertyList = ({ items }) => {
  // render các loại hotel
  return (
    <div className="pList">
      {items.map((item, i) => (
        <div key={i} className="pListItem">
          <img src={item.image} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>{item.name}</h1>
            <h2>{item.count} hotels</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;