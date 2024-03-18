    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import Footer from '../components/footer';
    import SearchAppBar from '../components/Header';
    import Slider from '../components/Slides/Slider';
    import Categories from '../components/Categories';
    import Deals from '../components/Deals';
    import RecommendedProducts from '../components/RecommendedProducts';
import SwagZone from '../components/SwagZone';



    const Home = () => {

      const [slides, setSlides] = useState([]);
    
      const [isLoading, setIsLoading] = useState(false);
      const [deals, setDeals] = useState([]);

    
    // fetch sliders
      const loaddata = () => {
        const jarray = [];
        // If you have any data to send, construct your JSON object here
        const mydata = JSON.stringify(jarray);
        const url = 'https://www.storepoaenterprise.com/ecomerce/lib3/banner.php';
        axios.post(url, mydata, { headers: { "Content-Type": "application/json" } })
          .then(function (response) {
            if (response.data[0]["status"] === 1) {
              // Assuming response.data is an array of image URLs
              setSlides(response.data.map((imageUrl, index) => ({ title: `Slide ${index + 1}`, url: imageUrl })));
            }
          })
          .catch(function (error) {
            console.error('Error fetching slides:', error);
          });
      };

      useEffect(() => {
        loaddata();
      }, []);

    //fletch the categories icons
      

      //fetch deals of the day
    


      return (
        <div>
          <SearchAppBar />
        

          <div>
            <Slider slides={slides} />
          </div>

          {/* categories */}
          <div>
          <Categories />
          </div>

        {/* Deals of the day */}
        <div><Deals /> </div>

        {/* product list */}
        <div>
          <RecommendedProducts />
        </div>
       <div>
        <SwagZone />

        </div>
        
                
            
            <div>
          <Footer />
          </div>
        </div>
      );
    };

    export default Home;
