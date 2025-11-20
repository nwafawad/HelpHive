import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Marketplace = () => {
    const services = [
        { title: 'Business Registration', price: '₦25,000', icon: '📝', color: 'bg-blue-100 text-blue-600' },
        { title: 'Logo & Branding', price: '₦15,000', icon: '🎨', color: 'bg-purple-100 text-purple-600' },
        { title: 'Social Media Setup', price: '₦10,000', icon: '📱', color: 'bg-pink-100 text-pink-600' },
        { title: 'Accounting Basics', price: '₦30,000', icon: '📊', color: 'bg-green-100 text-green-600' },
    ];

    return (
        <div className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-2">Marketplace</h2>
                        <p className="text-gray-500">Instant micro-services to boost your business</p>
                    </div>
                    <a href="#" className="text-primary-hover font-bold flex items-center gap-2 hover:underline">
                        View All Services <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div key={service.title} className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                            <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary-hover transition-colors">{service.title}</h3>
                            <div className="flex items-center justify-between mt-4">
                                <span className="font-bold text-secondary">{service.price}</span>
                                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-primary hover:text-secondary transition-colors">
                                    <ShoppingBag className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
