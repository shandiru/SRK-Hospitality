import React from "react";

export default function WeldingProcess() {
  const steps = [
    {
      title: "1. Inspection",
      desc: "We begin by inspecting the damage or requirement and identifying the best welding method for the job.",
    },
    {
      title: "2. Preparation",
      desc: "We clean and prep the metal surfaces to ensure strong, lasting welds and optimal safety.",
    },
    {
      title: "3. Welding",
      desc: "Our expert team performs precision welding using industry-standard equipment and techniques.",
    },
    {
      title: "4. Testing",
      desc: "Every weld is tested and inspected to meet our high quality and safety benchmarks before delivery.",
    },
  ];

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Our Welding Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
