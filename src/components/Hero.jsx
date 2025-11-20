import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';

const Hero = () => {
    return (
        <div className="bg-secondary text-white py-20 px-6 text-center relative overflow-hidden">
            {/* Background Pattern (Subtle Hexagons) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#FFD700 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Post a business problem. <br />
                    <span className="text-primary">Get a solution.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    The centralized marketplace where Nigerian SMEs find verified experts to solve daily business challenges.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <button className="bg-primary text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-hover transition-transform hover:scale-105 flex items-center gap-2 w-full md:w-auto justify-center">
                        I have a Business Problem
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-transform hover:scale-105 flex items-center gap-2 w-full md:w-auto justify-center">
                        I am a Solver
                        <Briefcase className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
