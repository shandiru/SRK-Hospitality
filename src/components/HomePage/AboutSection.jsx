'use client';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 pt-24 pb-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">

        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-[600px] w-full bg-white">
            <img
              src="/srk.png" // ⬅️ Replace with your actual image path
              alt="SRK Venues Exterior"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#222] underline underline-offset-8 decoration-[#cc4894] mb-8">
            About Us
          </h2>
          <div className="text-gray-700 text-[17px] md:text-[18px] leading-relaxed space-y-6">
            <p>
              <strong>SRK</strong> has at its heart the entrepreneurship and flexibility of independent venues. 
              With over 20 years of experience in hospitality, our aim is to join together different areas 
              of hospitality — restaurants, bars, night clubs, takeaways — creating a big family offering 
              the best service and the best food.
            </p>
            <p>
              Based in the East Midlands, our venues combine history, flavours and styles, 
              each individual joined together within our company.
            </p>

            <h3 className="text-2xl font-bold text-[#cc4894] mt-8">Our Values</h3>

            <p>
              <strong>Great Service:</strong> We guarantee an enjoyable time, with the best possible service. 
              From when you walk through the door to when you leave us, your time in one of our venues will 
              be memorable. Always polite, always smiling, always available.
            </p>
            <p>
              <strong>Great Food and Drinks:</strong> We want to make sure you are enjoying your time, 
              and to do so we offer great menus, a huge selection of drinks and amazing flavours.
            </p>
            <p>
              <strong>Great Prices:</strong> We understand the economic situation, and we also believe 
              that having a nice time out shouldn't become impossible. That's why we have great prices, 
              amazing offers and discounts, allowing everyone, on every budget, to have a great time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
