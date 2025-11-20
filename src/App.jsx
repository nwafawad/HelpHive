import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Marketplace from './components/Marketplace';
import PostProblemModal from './components/PostProblemModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <Hero />
      <Dashboard onPostProblem={handleOpenModal} />
      <Marketplace />
      <PostProblemModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Footer (Simple) */}
      <footer className="bg-secondary text-gray-400 py-10 px-6 text-center text-sm">
        <p>&copy; 2025 HelpHive. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
