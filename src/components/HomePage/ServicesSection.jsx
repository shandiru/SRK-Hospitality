import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Tyres",
      description:
        "Top-quality tyre sales, fitting, and repairs for all vehicle types",
      href: "/tyres",
    },
    {
      title: "Car Welding",
      description:
        "Expert car welding services for structural and cosmetic repairs",
      href: "/car-welding",
    },
    {
      title: "Home Welding",
      description:
        "On-site welding services at your convenience — we come to you!",
      href: "/home-welding",
    },
  ];

  return (
    <section className="py-20 bg-[#0d1525] px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive automotive services to keep your vehicle running at its best
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111b2d] rounded-lg p-6 hover:bg-[#162236] transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <a
                href={service.href}
                className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent px-4 py-2 rounded-md transition"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
