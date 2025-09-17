'use client';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 pt-24 pb-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-[600px] w-full bg-white">
            <img
              src="/aspects.png" // ⬅️ Replace with your actual image path
              alt="Aspects Restaurant Exterior"
              className="w-full h-auto object-cover"
            />
            <div className="bg-[#cc4894] text-white text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl">
              ASPECTS ENDERBY
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#222] underline underline-offset-8 decoration-[#cc4894] mb-8">
            About Us
          </h2>
          <div className="text-gray-700 text-[17px] md:text-[18px] leading-relaxed space-y-5">
            <p>
              <strong>Aspects</strong> is a smartly furnished high quality authentic Indian cuisine restaurant and bar in Enderby, Leicestershire. 
              We pride ourselves on offering a high quality combination of authentic Indian and traditional English cuisine.
            </p>
            <p>
              Our experienced, acclaimed chefs have put together menus which offer a fine dining experience of authentic Indian cuisine using homemade Indian spices and sauces.
              We offer a takeaway service 7 days a week and delivery within a 3 mile radius.
            </p>
            <p>
              Whether it’s the playful banter or romantic meetings over hot samosas and cold beers at the bar,
              or dining in our open, inviting and contemporary restaurant area which is ideal for families, parties and groups to have a memorable time.
            </p>
            <p>
              For Aspects, the true Indian traditional dining is about inviting friends and families together to socialise, make memorable moments and spend quality time over fulfilling meals with a variety of options.
            </p>
            <p>
              Our chefs have created an exclusive, traditional and authentic menu with delectable dishes crafted with spices of love.
              <br />
              <em>“Great chef knows the spices; Excellent chef knows how to use them.”</em>
            </p>
            <p>
              <strong>Welcome to the authentic taste of India.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
