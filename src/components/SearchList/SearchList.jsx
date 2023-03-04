import React, { useState } from "react";
import './SearchList.css'


const SearchList = ({ items }) => {
  const [modal, setModal] = useState(false);
  const [imgModal, setImgModal] = useState({});

  // hàm click vào hình ảnh
  const imageModalHandler = (index) => {
    setModal(true);
    setImgModal(items[index]);
  };

  // hàm đóng hình ảnh
  const closeHandler = () => {
    setModal(false);
    setImgModal({});
  };

  // render seach list
  return (
    <div>
      {/* ========= khi click vào hình ảnh ========= */}
      {items.map((item, index) => (
        <div className="searchItem" key={index}>
          <img
            src={item.image_url}
            alt=""
            className="siImg"
            onClick={() => imageModalHandler(index)}
          />
          <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance} from center</span>
            <span className="siTaxiOp">{item.tag}</span>
            <span className="siSubtitle">{item.description}</span>
            <span className="siFeatures">{item.type}</span>
            {item.free_cancel && (
              <>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                  You can cancel later, so lock in this great price today!
                </span>
              </>
            )}
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>{item.rate_text}</span>
              <button>{item.rate}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">${item.price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See availability</button>
            </div>
          </div>
        </div>
      ))}
         {/* ========= hiển thị modal ========= */}
      {modal && (
        <div>
          <div className="backdrop" onClick={closeHandler} />
          <div className="modal">
            <i className="fas fa-times-circle close" onClick={closeHandler} />
            <img src={imgModal.image_url} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchList;
