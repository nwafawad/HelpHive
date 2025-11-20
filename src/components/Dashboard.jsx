import React from 'react';
import { MessageSquare, Heart, Share2, Star, CheckCircle } from 'lucide-react';

const Dashboard = ({ onPostProblem }) => {
    const hives = [
        { name: 'Fashion Hive', count: 120 },
        { name: 'Food Hive', count: 85 },
        { name: 'Beauty Hive', count: 64 },
        { name: 'Tech Hive', count: 42 },
        { name: 'Agro Hive', count: 38 },
    ];

    const problems = [
        {
            id: 1,
            user: 'Mariam Adetayo',
            role: 'Clothing Retailer',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mariam',
            title: 'Sluggish Sales and Stagnant Revenue',
            description: 'I have been running my clothing shop for 2 years, but lately, sales have dropped significantly. I need help with marketing strategies to attract new customers and clear old stock.',
            hive: 'Fashion Hive',
            time: '2 hours ago',
            likes: 24,
            comments: 8,
        },
        {
            id: 2,
            user: 'Amina',
            role: 'Fashion Shop Owner',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amina',
            title: 'Struggling to get customers and maintain steady income',
            description: 'My shop is in a good location, but walk-ins are low. I need a social media expert to help me set up ads and get more visibility online.',
            hive: 'Beauty Hive',
            time: '5 hours ago',
            likes: 15,
            comments: 12,
        },
    ];

    const topBees = [
        {
            name: 'Charity Adetayo',
            role: 'Business Founder',
            rating: 4.9,
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charity',
        },
        {
            name: 'Emmanuel Okafor',
            role: 'Digital Marketer',
            rating: 4.8,
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emmanuel',
        },
        {
            name: 'Grace Nwachukwu',
            role: 'Financial Advisor',
            rating: 4.9,
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Grace',
        },
    ];

    return (
        <div className="bg-gray-50 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Sidebar (Hives) */}
                <div className="hidden md:block col-span-1">
                    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            Hives
                        </h3>
                        <ul className="space-y-3">
                            {hives.map((hive) => (
                                <li key={hive.name} className="flex items-center justify-between text-gray-600 hover:text-secondary cursor-pointer group">
                                    <span className="group-hover:font-medium transition-all">{hive.name}</span>
                                    <span className="bg-gray-100 text-xs px-2 py-1 rounded-full group-hover:bg-primary group-hover:text-secondary transition-colors">{hive.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Problem Feed (Center) */}
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-secondary">Recent Problems</h2>
                        <button
                            onClick={onPostProblem}
                            className="md:hidden bg-primary text-secondary px-4 py-2 rounded-full font-bold text-sm"
                        >
                            Post Problem
                        </button>
                    </div>

                    {problems.map((problem) => (
                        <div key={problem.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-transparent hover:border-primary/20">
                            <div className="flex items-start gap-4 mb-4">
                                <img src={problem.avatar} alt={problem.user} className="w-12 h-12 rounded-full bg-gray-100" />
                                <div>
                                    <h3 className="font-bold text-secondary">{problem.user}</h3>
                                    <p className="text-xs text-gray-500">{problem.role} • {problem.time}</p>
                                </div>
                                <span className="ml-auto bg-yellow-50 text-yellow-700 text-xs px-3 py-1 rounded-full font-medium border border-yellow-100">
                                    {problem.hive}
                                </span>
                            </div>

                            <h4 className="font-bold text-lg mb-2">{problem.title}</h4>
                            <p className="text-gray-600 mb-4 leading-relaxed">{problem.description}</p>

                            <div className="flex items-center gap-6 text-gray-500 pt-4 border-t border-gray-100">
                                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                                    <Heart className="w-5 h-5" />
                                    <span className="text-sm">{problem.likes}</span>
                                </button>
                                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                                    <MessageSquare className="w-5 h-5" />
                                    <span className="text-sm">{problem.comments} Solutions</span>
                                </button>
                                <button className="flex items-center gap-2 ml-auto hover:text-primary transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Top Bees Widget (Right Rail) */}
                <div className="hidden md:block col-span-1">
                    <div className="bg-secondary text-white rounded-xl shadow-sm p-6 sticky top-24">
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-primary">
                            <Star className="fill-current" />
                            Top Bees
                        </h3>
                        <div className="space-y-6">
                            {topBees.map((bee) => (
                                <div key={bee.name} className="flex items-center gap-3 group cursor-pointer">
                                    <div className="relative">
                                        <img src={bee.avatar} alt={bee.name} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-transparent group-hover:border-primary transition-colors" />
                                        <CheckCircle className="w-4 h-4 text-primary absolute -bottom-1 -right-1 bg-secondary rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{bee.name}</h4>
                                        <p className="text-xs text-gray-400">{bee.role}</p>
                                    </div>
                                    <div className="ml-auto flex items-center gap-1 text-primary text-xs font-bold">
                                        <Star className="w-3 h-3 fill-current" />
                                        {bee.rating}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-3 border border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors text-gray-300">
                            View All Solvers
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
