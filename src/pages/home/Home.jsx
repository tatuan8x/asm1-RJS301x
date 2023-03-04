import React from "react";
import './Home.css';
import '@fortawesome/free-solid-svg-icons'
import Navbar from "../../components/NavBar/NavBar";
import Header from '../../components/Header/Header';
import City from '../../data/city.json'
import Hotel from '../../data/hotel_list.json'
import Count from '../../data/type.json'
import footer from "../../data/footer.json";
import Featured from "../../components/Featured/Featured";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import PropertyList from "../../components/PropertyList/PropertyList";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";



const Home = () => {
	return (
		<div>
			<Navbar /> 
			<Header />
			<div className="homeContainer">
			<Featured items={City}/>
			<h1 className="homeTitle">Browse by property type</h1>
			<PropertyList items={Count}/>
			<h1 className="homeTitle">Homes guests love</h1>
			<FeaturedProperties items={Hotel}/>
			<Contact />
			<Footer items={footer}/>
	
			</div>
	  </div>
	);
};

export default Home;
