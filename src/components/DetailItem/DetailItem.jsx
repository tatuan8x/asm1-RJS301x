import React, { useState } from "react";
import "./DetailItem.css";

const DetailItem = ({ items }) => {
  const [modal, setModal] = useState(false);
  const [indexImage, setIndexImage] = useState(0);

  // hàm khi click vào hình ảnh
  const imageModalHandler = (i) => {
    setIndexImage(i);
    setModal(true);
  };

  // đóng hình ảnh
  const closeHandler = () => {
    setModal(false);
  };

  // moving slide
  const moveSlideHandler = (leftright) => {
    let newSlide;
    if (leftright === "left") {
      newSlide = indexImage === 0 ? 5 : indexImage - 1;
    } else {
      newSlide = indexImage === 5 ? 0 : indexImage + 1;
    }
    setIndexImage(newSlide);
  };

  // render detail
  return (
    <div>
      {items.map((item, index) => (
        <div className="detail" key={index}>
          <img src={item.photos} alt="" />
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="detailTitle">{item.name}</h1>
          <div className="detailAddress">
            <i className="fa fa-location-dot" />
            <span>{item.address}</span>
          </div>
          <span className="detailDistance">{item.distance}</span>
          <span className="detailPriceHighlight">{item.price}</span>
          <div className="detailImages">
            {/* ========= khi click vào hình ========= */}
            {item.photos.map((photo, i) => (
              <div className="detailImgWrapper" key={i}>
                <img
                  src={photo}
                  alt=""
                  className="detailImg"
                  onClick={() => {
                    imageModalHandler(i);
                  }}
                />
              </div>
            ))}
             </div>
          <div className="detailDetails">
            <div className="detailDetailsTexts">
              <h1 className="detailTitle">{item.title}</h1>
              <p className="detailDesc">{item.description}</p>
            </div>
            <div className="detailDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${item.nine_night_price}</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      ))}
      {/* ========= hiện/đóng modal ========= */}
      {modal && (
        <div>
          <div className="backdropDetail" onClick={closeHandler} />
          <div className="modalDetail">
            <i
              className="fas fa-times-circle closeDetail"
              onClick={closeHandler}
            />
            <i
              className="fas fa-chevron-circle-left arrowLeft"
              onClick={() => moveSlideHandler("left")}
            />
            <img src={items[0].photos[indexImage]} alt="" />
            <i
              className="fas fa-chevron-circle-right arrowRight"
              onClick={() => moveSlideHandler("right")}
            />
          </div>
        </div>
      )}
    </div>
  )
};

export default DetailItem;
