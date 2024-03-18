    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
import ProductCard from './ProductCard';

    const Deals = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [deals, setDeals] = useState([]);
    const [countdown, setCountdown] = useState(3600); // Initial countdown value in seconds
   
    useEffect(() => {
        const timer = setInterval(() => {
        if (countdown > 0) {
            setCountdown(countdown - 1);
        } else {
            clearInterval(timer);
            // Handle countdown completion here
        }
        }, 1000); // Update countdown every second

        return () => {
        clearInterval(timer); // Clear the interval when the component unmounts
        };
    }, [countdown]); // Run effect whenever the countdown state changes

    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    useEffect(() => {
        loadDeals();
    }, []);

    const loadDeals = () => {
        setIsLoading(true);
        var jarray = [];

        const mydata = JSON.stringify(jarray);
        const url = 'https://www.storepoaenterprise.com/ecomerce/lib3/productlistdiscount.php';

        axios.post(url, mydata, { headers: { "Content-Type": "application/json" } })
        .then(function (response) {
            if (response.data[0]["status"] === 1) {
            setDeals(response.data);
            setIsLoading(false);
            }
        })
        .catch(function (error) {
            console.error('Error loading deals:', error);
            setIsLoading(false);
        });
    };

    return (

      
        <div className="flex flex-col items-center justify-center mt-10">
      <div className="relative flex items-center justify-center mb-10">
        <div className="absolute left-0 h-full w-1/3 border-l-2 border-orange-400"></div>
        <span className="text-4xl font-semibold pl-2 pr-2">Deals of the day</span>
        <div className="absolute right-0 h-full top-0 border-l-2 border-orange-400"></div>
      </div>
      
      <p className="text-white text-sm uppercase bg-red-500 px-2 w-1/2 ml-2 rounded text-center mb-4">
        {hours} hrs {minutes} mins {seconds} sec
      </p>
      
      {isLoading ? (
        <div className="h-270 justify-center items-center flex">
          <p>Discounts loading</p>
        </div>
      ) : (
        <div className="w-full">
          <div className=" overflow-x w-full flex  ">
            {deals.map((item) => (
                <ProductCard
                imageUrl={item.image}
                discount= {item.discount}
                productName={item.pname}
                price={item.dprice}
                originalPrice={item.price}
                rating={5}
              />
              

            ))}
          </div>
        </div>
      )}
    </div>
    );
    };
    export default Deals;
