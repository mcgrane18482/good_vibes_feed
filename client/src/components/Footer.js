import React from 'react';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const startYear = 2023;

    return (
        <footer className="bg-gray-700 text-white py-8">
            <div className="container mx-auto text-center">
                <h1 className="text-xl font-semibold mb-2">Find us on your favorite socials!</h1>
                <div className="flex justify-center space-x-4">
                    {/* Social media links */}
                    <a
                        href="https://www.facebook.com/profile.php?id=100092609509439"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        <i className="fab fa-facebook-f text-2xl"></i>
                    </a>
                    <a
                        href="https://twitter.com/PositiveNewsUK"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        <i className="fab fa-twitter text-2xl"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/globalpositivenews/?hl=en"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        <i className="fab fa-instagram text-2xl"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/smart-nut/"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        <i className="fab fa-linkedin-in text-2xl"></i>
                    </a>
                </div>
                <p className="text-sm mt-2">
                    &copy; {startYear} {currentYear > startYear ? `- ${currentYear}` : ""} Good New Vibes. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
