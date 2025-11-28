
import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Aura+', 'Phone', 'Watch', 'Notebook', 'Accessories'],
    },
    {
      title: 'Services',
      links: ['Aura Music', 'Aura TV+', 'Aura Fitness+', 'Aura Pay', 'AuraCloud'],
    },
    {
      title: 'Account',
      links: ['Manage Your Aura ID', 'Aura Store Account', 'iCloud.com'],
    },
    {
      title: 'For Business',
      links: ['Aura and Business', 'Shop for Business'],
    },
    {
      title: 'Aura Values',
      links: ['Accessibility', 'Education', 'Environment', 'Privacy', 'Supplier Responsibility'],
    },
    {
      title: 'About Aura',
      links: ['Newsroom', 'Aura Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance'],
    },
  ];

  return (
    <footer className="bg-gray-100 text-gray-600 text-xs">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-300 pb-8 mb-8">
          <p>
            * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {footerLinks.slice(0, 1).map((column) => (
             <div key={column.title} className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-gray-800">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}><a href="#" className="hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.slice(1).map((column) => (
              <div key={column.title}>
                <h3 className="font-semibold text-gray-800">{column.title}</h3>
                <ul className="mt-4 space-y-2">
                  {column.links.map((link) => (
                    <li key={link}><a href="#" className="hover:underline">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 mt-8">
            <p className="mb-2">More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Aura Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you.</p>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Aura Inc. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Use</a>
                    <a href="#" className="hover:underline">Sales and Refunds</a>
                    <a href="#" className="hover:underline">Legal</a>
                    <a href="#" className="hover:underline">Site Map</a>
                </div>
                <p className="mt-4 md:mt-0">United States</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
