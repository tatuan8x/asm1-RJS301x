import './Footer.css';
// import footer from '../../data/footer.json'

const Footer = ({ items }) => {
    return (
      <div className="footer">
        <div className="footerLists">
          {items.map((item, i) => (
            <ul key={i} className="footerList">
              {item.col_values.map((col, j) => (
                <li key={j} className="footerListItem">
                  {col}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    );
  };


export default Footer;