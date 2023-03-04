import Navbar from '../../components/NavBar/NavBar';
import Contact from '../../components/Contact/Contact';
import './Detail.css';
import Footer from '../../components/Footer/Footer'
import DetailItem from '../../components/DetailItem/DetailItem';
import detail from '../../data/detail.json'
import footer from '../../data/footer.json'


const Detail = () => {
  return (
    <div>
      <Navbar />
      <div className="detailContainer">
        <DetailItem items={detail} />
        <Contact />
        <Footer items={footer}/>
      </div>
    </div>
  );
};

export default Detail;
