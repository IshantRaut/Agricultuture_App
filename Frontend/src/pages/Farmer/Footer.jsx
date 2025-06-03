import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
   <footer id="footer" className="bg-[#0a0a0a] text-gray-300 p-18 text-sm">
    <div className="border-b border-gray-800 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-6">
          {/* About */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
            <a href="/" className="flex items-center mb-2">
              <span className="text-xl font-bold text-lime-400">AgriCulture</span>
            </a>
            <div className="text-gray-400 text-xs">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-2"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
          </div>
          {/* Useful Links */}
          <div className="w-1/2 sm:w-1/3 lg:w-1/6 mb-6">
            <h4 className="font-semibold mb-2 text-lime-400 text-base">Useful Links</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-lime-400">Home</a></li>
              <li><a href="#" className="hover:text-lime-400">About us</a></li>
              <li><a href="#" className="hover:text-lime-400">Services</a></li>
              <li><a href="#" className="hover:text-lime-400">Terms of service</a></li>
              <li><a href="#" className="hover:text-lime-400">Privacy policy</a></li>
            </ul>
          </div>
          {/* Our Services */}
          <div className="w-1/2 sm:w-1/3 lg:w-1/6 mb-6">
            <h4 className="font-semibold mb-2 text-lime-400 text-base">Our Services</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-lime-400">Web Design</a></li>
              <li><a href="#" className="hover:text-lime-400">Web Development</a></li>
              <li><a href="#" className="hover:text-lime-400">Product Management</a></li>
              <li><a href="#" className="hover:text-lime-400">Marketing</a></li>
              <li><a href="#" className="hover:text-lime-400">Graphic Design</a></li>
            </ul>
          </div>
          {/* Hic solutasetp */}
          <div className="w-1/2 sm:w-1/3 lg:w-1/6 mb-6">
            <h4 className="font-semibold mb-2 text-lime-400 text-base">Hic solutasetp</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-lime-400">Molestiae accusamus iure</a></li>
              <li><a href="#" className="hover:text-lime-400">Excepturi dignissimos</a></li>
              <li><a href="#" className="hover:text-lime-400">Suscipit distinctio</a></li>
              <li><a href="#" className="hover:text-lime-400">Dilecta</a></li>
              <li><a href="#" className="hover:text-lime-400">Sit quas consectetur</a></li>
            </ul>
          </div>
          {/* Nobis illum */}
          <div className="w-1/2 sm:w-1/3 lg:w-1/6 mb-6">
            <h4 className="font-semibold mb-2 text-lime-400 text-base">Nobis illum</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-lime-400">Ipsam</a></li>
              <li><a href="#" className="hover:text-lime-400">Laudantium dolorum</a></li>
              <li><a href="#" className="hover:text-lime-400">Dinera</a></li>
              <li><a href="#" className="hover:text-lime-400">Trodelas</a></li>
              <li><a href="#" className="hover:text-lime-400">Flexo</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Copyright & Social */}
    <div className="bg-[#18181b] py-4">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center lg:items-start mb-2 lg:mb-0">
          <div>
            © Copyright <strong><span>MyWebsite</span></strong>. All Rights Reserved
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Designed by <a href="https://bootstrapmade.com/" className="hover:text-lime-400">BootstrapMade</a> Distributed by <a href="https://themewagon.com" className="hover:text-lime-400">ThemeWagon</a>
          </div>
        </div>
        <div className="flex space-x-3 mt-2 lg:mt-0 text-lg">
          <a href="#" className="hover:text-lime-400"><FaTwitter /></a>
          <a href="#" className="hover:text-lime-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-lime-400"><FaInstagram /></a>
          <a href="#" className="hover:text-lime-400"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;