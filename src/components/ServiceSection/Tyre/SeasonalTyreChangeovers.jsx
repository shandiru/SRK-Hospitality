import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

const SeasonalTyreChangeovers = () => {
    return (
        <section className="bg-dark-blue py-8 px-6 md:px-16 text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Seasonal Tyre Changeovers</h2>
                <div className='border rounded-lg p-4 shadow-xl bg-gray-900 opacity-80 z-40'>
                    <p className="text-lg mb-4 text-center md:text-left">
                        If you drive in areas with changing climates, seasonal tyre changeovers can enhance grip, safety, and performance. We offer quick swaps and storage options for your summer and winter sets.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FiCheckCircle className="h-5 w-5 mr-3 text-light-blue" />
                            <span>Summer-to-winter and winter-to-summer changeovers</span>
                        </li>
                        <li className="flex items-center">
                            <FiCheckCircle className="h-5 w-5 mr-3 text-light-blue" />
                            <span>Inspection of tyre condition before re-installation</span>
                        </li>
                        <li className="flex items-center">
                            <FiCheckCircle className="h-5 w-5 mr-3 text-light-blue" />
                            <span>Optional storage for off-season tyres</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SeasonalTyreChangeovers;
