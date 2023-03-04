import React, { useState } from "react";
import './SearchPopup.css'
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const SearchPopup = ({ popup }) => {
  const [destination, setDestination] = useState(popup?.destination ?? '');
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState(popup?.option) ?? '';
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  // render seach popup
  return (
    <div className="popupSearch">
      <h1 className="ppTitle">Search</h1>
      <div className="ppItem">
        <label>Destination</label>
        {/* ========= nhập địa điểm ========= */}
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className="ppItem">
      {/* ========= chọn thời gian ========= */}
        <label>Check-in date</label>
        <span onClick={() => setOpenDate(!openDate)}>
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            minDate={new Date()}
            onChange={(item) => setDate([item.selection])}
            ranges={date}
          />
        )}
      </div>

        <div className="ppItem">
        {/* ========= phần Options ========= */}
          <label>Options</label>
            <div className="ppOptions">
              <div className="ppOptionItem">
                {/* nhập số tiền phòng rẻ nhất muốn tìm */}
                <span>Min Price <small>per night</small></span>
                <input 
                type='number' 
                className="ppOptionInput" 
                min={0}>
                </input>
              </div>
            </div>
            <div className="ppOptions">
              <div className="ppOptionItem">
                {/* nhập số tiền phòng mắc nhất muốn tìm */}
                <span>Max Price <small>per night</small></span>
                <input 
                type='number' 
                className="ppOptionInput" 
                min={0}>
                </input>
              </div>
            </div>  
            <div className="ppOptions">
              <div className="ppOptionItem">
                <span>Adult</span>
                {/* ========= nhập số lượng adult ========= */}
                <input
                  type="number"
                  className="ppOptionInput"
                  min={0}
                  defaultValue={option && option.adult}
                  onChange={(e) =>
                    setOption((prev) => {
                      return { ...prev, adult: e.target.value };
                    })
                  }
                />
              </div>   
            </div> 
            <div className="ppOptions">  
              <div className="ppOptionItem">
                <span>Children</span>
                {/* ========= nhập số lượng children ========= */}
                <input
                  type="number"
                  className="ppOptionInput"
                  min={0}
                  defaultValue={option && option.children}
                  onChange={(e) =>
                    setOption((prev) => {
                      return { ...prev, children: e.target.value };
                    })
                  }
                />
              </div> 
            </div>   
            <div className="ppOptions">   
              <div className="ppOptionItem">
                <span>Room</span>
                {/* ========= nhập số lượng room ========= */}
                <input
                  type="number"
                  className="ppOptionInput"
                  min={0}
                  defaultValue={option && option.room}
                  onChange={(e) =>
                    setOption((prev) => {
                      return { ...prev, room: e.target.value };
                    })
                  }
                />
              </div>  
            </div>     
        </div>
      
        {/* ========= nút search ========= */}
      <button className="ppButton">
        Search
      </button>
    </div>
  );
};

export default SearchPopup;
