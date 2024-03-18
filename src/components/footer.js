import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import InboxIcon from '@mui/icons-material/Inbox';

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
            <a href="https://web.facebook.com/storepoa123/" target="_blank" rel="noopener noreferrer">
          <span><FacebookIcon /></span>
        </a>
        <span><TwitterIcon /></span>
        <span><WhatsAppIcon /></span>
        <a href="https://www.instagram.com/storepoa123/" target="_blank" rel="noopener noreferrer">
          <span><InstagramIcon /></span>
        </a>
        <span><LinkedInIcon /></span>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">About Us</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Blog</a>
                  </li>
                  
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
              <a href="https://www.storepoaenterprise.com" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Store Poa Enteprise
               
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;