import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-semibold text-blue-600">About</h2>
      <p className="mt-4 text-lg text-gray-800">This is a sample full-stack app!</p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
}

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error('Fetch error:', err);
        setMessage('Error connecting to backend');
      });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4 text-white">
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center justify-center p-4 mt-8">
                <h1 className="text-3xl font-bold text-blue-600">Full-Stack Template</h1>
                <p className="mt-4 text-lg text-gray-800">Backend says: {message}</p>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;