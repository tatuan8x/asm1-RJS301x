import "@fortawesome/free-solid-svg-icons";
import "./NavBarItem.css";


const NavBarItem = ({ items }) => {
  // render items trên navbar
  return (
    <div className="navBarList">
        {items.map((item, i) => (
            <div
                // i để xác định mỗi phần tử trong danh sách
                key={i}
                className={item.active ? "navBarListItem active" : "navBarListItem"}
            >
                <i className={item.icon} />
                {/* hiển thị loại của item */}
                <span>{item.type}</span>
            </div>
        ))}
    </div>
  );
};

export default NavBarItem;