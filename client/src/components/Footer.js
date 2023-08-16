import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-xl font-semibold mb-2">Find us on your favorite socials!</h1>
        <div className="flex justify-center space-x-4">
          {/* Social media links */}
          <a
            href="#facebook"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="#twitter"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="#instagram"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="#linkedin"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} Good New Vibes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
