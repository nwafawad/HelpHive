import React from 'react';
import { X } from 'lucide-react';

const PostProblemModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="bg-secondary text-white p-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold">Post a Business Problem</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Form */}
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Problem Title</label>
                        <input
                            type="text"
                            placeholder="e.g., Need help with tax registration"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Hive (Category)</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                            <option>General Business</option>
                            <option>Fashion Hive</option>
                            <option>Food Hive</option>
                            <option>Tech Hive</option>
                            <option>Beauty Hive</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            rows="4"
                            placeholder="Describe your challenge in detail..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 px-6 py-3 rounded-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                            Cancel
                        </button>
                        <button className="flex-1 bg-primary text-secondary px-6 py-3 rounded-lg font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                            Post Problem
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostProblemModal;
