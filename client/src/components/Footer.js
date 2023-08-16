import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Stay Connected</h2>
        <p className="text-lg mb-8">
          Join us on social media to keep up with the latest trends and updates.
        </p>
        <div className="flex justify-center space-x-4">
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
        <p className="text-sm mt-12">
          &copy; {new Date().getFullYear()} Good New Vibes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
