import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const RecommendedProducts = () => {
  const [recomendedloading, setRecomendedloading] = useState(false);
  const [recomended, setRecomended] = useState([]);
  const [numItemsToShow, setNumItemsToShow] = useState(6);

  const loadRecomended = () => {
    setRecomendedloading(true);
    const jarray = [{ mindex: 11, mkey: 1090 }];
    const mydata = JSON.stringify(jarray);
    const url = 'https://www.storepoaenterprise.com/ecomerce/lib3/productlistcategoryindex.php';

    axios.post(url, mydata, { headers: { "Content-Type": "application/json" } })
      .then(function (response) {
        if (response.data[1][0]["status"] === 1) {
            setRecomended(response.data[1]);
            setRecomendedloading(false);
          }
      })
      .catch(function (error) {
        console.error('Error fetching recommended products:', error);
        setRecomendedloading(false);
      });
  };

  // Call loadRecomended when the component mounts
  useEffect(() => {
    loadRecomended();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of items to show based on screen width
      if (window.innerWidth <= 768) {
        setNumItemsToShow(3);
      } else if (window.innerWidth <= 1024) {
        setNumItemsToShow(4);
      } else {
        setNumItemsToShow(6);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="relative flex items-center justify-center mb-10">
        <div className="absolute left-0 h-full w-1/3 border-l-2 border-orange-400"></div>
        <span className="text-4xl font-semibold pl-2 pr-2">Recommended for you</span>
        <div className="absolute right-0 h-full top-0 border-l-2 border-orange-400"></div>
      </div>
      {recomendedloading ? (
        <p className="mt-6">Loading recommended products...</p>
      ) : (
        <div className="w-full overflow-x-auto">
          <div className="flex">
            {recomended.slice(0, numItemsToShow).map((item, index) => (
              <ProductCard
                key={index}
                imageUrl={item.image}
                discount={item.discount}
                productName={item.pname}
                productDescription={item.pdesc}
                price={item.price}
       
                rating={5}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendedProducts;
