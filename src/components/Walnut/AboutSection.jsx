'use client';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 pt-24 pb-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">

        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-[600px] w-full bg-white">
            <img
              src="/walnut-about.jpg"
              alt="1573 Bar & Grill Exterior"
              className="w-full h-auto object-cover"
            />
            <div className="bg-red-600 text-white text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl">
              Welcome The Walnut Tree Inn
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 underline underline-offset-8 decoration-red-600 mb-8">
            About Us
          </h2>
          <div className="text-gray-700 text-[17px] md:text-[18px] leading-relaxed space-y-5">
            <p>
              The Walnut Tree Inn used to be known as The Blisworth Hotel until it underwent a period of refurbishment and reopened for business in May 2005.
            </p>
            <p>
              The vision was to provide a relaxed environment with a quality food and drink offering, as well as hosting superb entertainment in the form of live music and comedy.
            </p>
            <p>
              The inn offers comfortable hotel accommodation with 11 guest bedrooms, a well-stocked bar, and a restaurant providing a good selection of modern British cuisine as well as lighter meals and snacks.
            </p>
            <p>
              In our unique surroundings we promise to deliver to you a fantastic meal, in a warm friendly,
              relaxed atmosphere.
            </p>
            <h2 className="text-center">CERTIFICATE OF EXCELLENCE</h2>
            <p>
              With an emphasis on providing a warm and friendly welcome to our guests, our inn at Blisworth has been awarded a Certificate of Excellence based on customer reviews from Trip Advisor for the seventh year running. We have a selection of high-quality ensuite guest rooms available on a bed and breakfast basis, or with dinner included if you prefer.
            </p>
            <p>With a choice of function rooms available at The Walnut Tree Inn, we offer the finest hotel facilities and can provide a high-quality of catering for:</p>
            <ul className="list-disc ml-10 space-y-2 text-sm">
              <li>Weddings</li>
              <li>Christenings</li>
              <li>Anniversaries</li>
              <li>Birthday parties</li>
              <li>Funeral receptions</li>
              <li>Conferences</li>
              <li>General meetings</li>
            </ul>
            <p>
             It is our aim to make your visit to our inn as pleasant and inviting as possible, whether you stay in one of our guest bedrooms, book a table in our restaurant, or simply nip in for a quick drink and a chat with our bubbly staff, you’ll always be welcome at the Walnut Inn.
            </p>
            <p>To book a guest room, make a table reservation, or to speak to us in person, please don’t hesitate to contact us today.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
