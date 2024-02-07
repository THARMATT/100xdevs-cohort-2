// src/App.js
import React from 'react';
 // Import Tailwind CSS styles
import {Link} from 'react-router-dom'
function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to Paytm</h1>
        <p className="text-gray-600 mb-8">
          India's leading financial services platform. Paytm offers mobile
          recharge, bill payments, and online shopping.
        </p>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" to="/signup">
          Get Started
        </Link>

      </div>
    </div>
  );
}

export default LandingPage;
