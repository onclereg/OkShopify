import { Facebook } from "lucide-react";
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-inherit text-primary py-10 border-t-2">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-black dark:text-white">
            Transforming spaces with elegance and style. We bring creativity and sophistication to your home decor.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-black dark:text-white">
            <li><a href="#" className=" hover:text-primary">Home</a></li>
            <li><a href="#" className=" hover:text-primary">About</a></li>
            <li><a href="#" className=" hover:text-primary">Services</a></li>
            <li><a href="#" className=" hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl text-primary font-semibold mb-4">Contact Us</h2>
          <p className="text-black dark:text-white">📍 123 Interior St, Design City</p>
          <p className="text-black dark:text-white">📧 info@interiordecor.com</p>
          <p className="text-black dark:text-white">📞 +123 456 7890</p>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <div className="flex space-x-4 mb-4 text-black dark:text-white">
            <a href="#" className=" hover:text-primary"><FaFacebookF /></a>
            <a href="#" className=" hover:text-primary"><FaInstagram /></a>
            <a href="#" className=" hover:text-primary"><FaPinterest /></a>
            <a href="#" className=" hover:text-primary"><FaTwitter /></a>
          </div>
          <h2 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h2>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="p-2 rounded-l-md w-full bg-black dark:bg-white text-white"
            />
            <button className="bg-yellow-500 text-black  dark:text-white px-4 rounded-r-md">Subscribe</button>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Interior Decor. All rights reserved.
      </div>
    </footer>
  );
}
