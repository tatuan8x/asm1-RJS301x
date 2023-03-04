import React from 'react';
import './Search.css'
import Navbar from "../../components/NavBar/NavBar";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import footer from '../../data/footer.json'
import search from '../../data/search.json';
import SearchPopup from '../../components/SearchPopup/SearchPopup';
import SearchList from '../../components/SearchList/SearchList';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const { state } = useLocation();
  return (
    <div>
      <Navbar />
        <div className="searchContainer">
            <div className="searchListContainer">
              <div className="searchWrapper">
                <SearchPopup popup={state} />
                <div className="searchResult">
                  <SearchList items={search} />
                </div>
              </div>
            </div>
          <Contact />
          <Footer items={footer} />
        </div>
    </div>
  );
};

export default Search;
