import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-secondary text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="bg-primary text-secondary font-bold p-2 rounded-lg flex items-center gap-2">
                    <span className="text-xl tracking-tighter">HELPHIVE</span>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-medium">
                <a href="#" className="hover:text-primary transition-colors">Home</a>
                <a href="#" className="hover:text-primary transition-colors">Solutions</a>
                <a href="#" className="hover:text-primary transition-colors">Problems</a>
                <a href="#" className="hover:text-primary transition-colors">Hive Community</a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <button className="hidden md:block bg-primary text-secondary px-5 py-2 rounded-full font-bold hover:bg-primary-hover transition-colors">
                    Become a Bee
                </button>
                <div className="flex items-center gap-3 text-gray-300">
                    <Search className="w-5 h-5 cursor-pointer hover:text-white" />
                    <Bell className="w-5 h-5 cursor-pointer hover:text-white" />
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-secondary font-bold cursor-pointer">
                        <User className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
