'use client';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 pt-24 pb-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-[600px] w-full bg-white">
            <img
              src="/toluca-about.webp"
              alt="1573 Bar & Grill Exterior"
              className="w-full h-auto object-cover"
            />
            <div className="bg-red-600 text-white text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl">
              Toluca Mexican bar & grill
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
              A Local Favourite with a Global Welcome
            </p>
            <p>
              Tucked away in the charming city of Lichfield, Toluca Mexican Bar & Grill is your go-to spot for a dash of local spirit and a generous helping of authentic Mexican cuisine. We pride ourselves on being a vibrant part of the community, where locals drop by to unwind and savour our dishes, making every visit feel like a celebration.
            </p>
            <p>
              While we’re deeply rooted in the local scene, we’re always excited to greet travellers with our flavourful menus and a lively atmosphere. Lichfield’s rich history draws visitors from all over, and we love that our restaurant can be a part of your travel experience. Whether you’re here for the history or our famous tacos, Toluca offers a taste of Mexico right here in the heart of England.
            </p>
            <p>
              But wait, there’s more! Spice up your weekends at Toluca with our live music nights every Friday and Saturday. It’s the perfect way to kick back after a long week or start your holiday weekend off right.
            </p>
            <p>
              Join us for an evening of great tunes, fantastic food, and even better company.
            </p>
            <p>Dive into the heart of Mexican cuisine with our standout dishes at Toluca Mexican Bar & Grill. From the classic zest of our tacos and burritos to the unique twist on our dirty and loaded fries, there’s a flavour for every craving. Don’t miss our authentic churros, a sweet finale to your meal, best enjoyed with our freshly mixed premium cocktails or a selection of Mexican beers.</p>
            <p>
              Whether it’s a quick takeaway or a leisurely dine-in experience, these favourites are sure to bring a taste of Mexico to your table!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
