'use client';

import { FaUserFriends, FaUtensils, FaStar } from 'react-icons/fa';

export default function CoreValues() {
  const values = [
    {
      icon: <FaUserFriends className="text-[#DDB64E] text-3xl" />,
      title: 'Exceptional Service',
      description:
        'From the moment you walk through our doors to the moment you leave, we aim to make every visit unforgettable. Friendly, attentive, and always with a smile — our team is here to make you feel welcome.',
    },
    {
      icon: <FaUtensils className="text-[#DDB64E] text-3xl" />,
      title: 'Outstanding Food & Drinks',
      description:
        "We're passionate about flavour. With carefully curated menus and an extensive selection of drinks, we're here to delight your taste buds and elevate your experience.",
    },
    {
      icon: <FaStar className="text-[#DDB64E] text-3xl" />,
      title: 'Great Value',
      description:
        "We believe everyone deserves a great night out. That's why we offer fair prices, fantastic deals, and regular discounts — so you can enjoy more, without spending more.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block bg-[#DDB64E]/20 text-[#DDB64E] text-sm font-medium px-4 py-1 rounded-full mb-4">
          Our Values
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          Built on Three Core Values
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything we do is guided by our commitment to excellence, quality, and value
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#DDB64E]/20 p-4 rounded-full">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
