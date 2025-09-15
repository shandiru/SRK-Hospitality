import React from "react";

export default function ReviewsSection() {
  const reviews = [
    {
      text: `Brilliant service by the team at Shahz tyres. Quick efficient and cheap! 
      Definitely recommend for all types of tyres. He mentioned that if I wanted a specific tyre 
      he'll order it for me. 10/10 customer service. 100% would recommend!`,
      author: "Mahir Jetha Productions",
    },
    {
      text: `I've done both my cars here in the last few months, great service great prices 
      no complaints. Will use again 100%`,
      author: "Ronnie A",
    },
    {
      text: `Fast and professional service. New tyres and good quality for a good price`,
      author: "Andrei Hanceariuc",
    },
  ];

  return (
    <section className="py-20 bg-[#0d1525] px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it — see what our satisfied customers
            have to say
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#111b2d] rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 mb-4">"{review.text}"</p>
              <p className="text-blue-400 font-semibold">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
