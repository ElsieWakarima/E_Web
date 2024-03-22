import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/hidescroll.css";

const Categories = () => {
  const [cat, setCat] = useState([]);
  const [catloading, setCatloading] = useState(true);
  useEffect(() => {
    loadCat();
  }, []); // Call loadCat() when the component mounts

  const loadCat = () => {
    setCatloading(true);
    var jarray = [];
    const mydata = JSON.stringify(jarray);
    const url = 'https://www.storepoaenterprise.com/ecomerce/lib3/categorylist.php';

    axios
      .post(url, mydata, { headers: { "Content-Type": "application/json" } })
      .then(function (response) {
        if (response.data[0]["status"] === 1) {
          setCatloading(false);
          setCat(response.data);
        }
      })
      .catch(function (error) {
        console.error('Error loading categories:', error);
        setCatloading(false);
      });
  };
  return (<div className='mt-10'>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
    <div className="relative flex items-center justify-center mb-10">
    <div className="absolute left-0 h-full w-1/3 border-l-2 border-orange-400"></div>
    <span className="text-4xl font-semibold  pl-2 pr-2">Categories
    </span>
    
    <div className="absolute right-0 h-full top-0 border-l-2 border-orange-400"></div>
  </div>
    {/* <button style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '25%' }}
      onClick={() => {
        navigation.navigate('Categories', {
          cat: 'bags',
        });
      }}>
      <span style={{ color: 'black' }}>
        View All
      </span>
      <Icon
        source="arrow-right"
        size={20}
      />
    </button> */}
  </div>

  {catloading ? (
    <div
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <p>Loading categories...</p>
    </div>
  ) : (
    <div 
      className='flex flex-row justify-center w-full overflow-x-auto scrollbar-hide'
    >
      {cat.map((item) => (
        <div key={item.sno} style={{ display: 'flex', flexDirection: 'column', margin: '0 10px', alignItems: 'center' }}>
          <button style={{ backgroundColor: 'lightgray', height: '56px', width: '56px', justifyContent: 'center', alignItems: 'center', borderRadius: '28px' }}
            onClick={() => {}}
          >
            {/* {item.mobileicon ? (
              <Icon
                source={item.mobileicon}
                size={35}
                color={'black'} // Adjust the color as needed
              />
            ) : (
              <p style={{ color: 'red' }}>No Image Available</p>
            )} */}
          </button>
          <p style={{ color: 'black', textAlign: 'center', fontSize: '12px' }}>{item.category}</p>
        </div>
      ))}
    </div>
  )}
  {/* end of categories */ }
  </div>
  )
}

export default Categories