'use client';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-[#FFFDF6] to-[#FFF4D6] py-24 px-6 md:px-12 lg:px-20 font-[Inter]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">

        {/* === Left: Image === */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#DDB64E]/40 to-transparent rounded-3xl blur opacity-60 group-hover:opacity-80 transition duration-700"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DDB64E]/30 bg-white max-w-[600px] mx-auto">
            <img
              src="/newabout.png" // replace with your generated image
              alt="SRK Hospitality Experience"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* === Right: Text Content === */}
        <div className="flex flex-col justify-center text-center lg:text-left space-y-8">
          {/* Heading */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] font-[Playfair_Display] leading-tight">
              About Us
            </h2>
            <div className="w-24 h-[3px] bg-[#DDB64E] mt-3 mb-8 mx-auto lg:mx-0"></div>
          </div>

          {/* Main Description */}
          <div className="text-gray-800 text-[17px] md:text-[18px] leading-relaxed space-y-6">
            <p>
              <strong>SRK</strong> stands as a symbol of independent hospitality and heartfelt service. 
              With over two decades of experience, we’ve cultivated a network of distinctive venues — 
              from restaurants and bars to nightclubs and takeaways — each rooted in authenticity, quality, and community.
            </p>
            <p>
              Our vision has always been simple — to blend tradition with modern flair, 
              offering experiences that feel both familiar and new. Whether it’s a quiet evening meal, 
              a lively night out, or a shared moment among friends, SRK venues are designed 
              to feel personal, elegant, and unforgettable.
            </p>
          </div>

          {/* Quote / Statement */}
          <div className="mt-10 border-l-4 border-[#DDB64E] pl-6 italic text-[#4A4A4A] text-lg leading-relaxed">
            “At SRK, hospitality isn’t a service — it’s a feeling.  
            Every smile, every flavour, and every detail tells our story.”
          </div>
        </div>
      </div>

      {/* === Secondary Narrative Block === */}
      <div className="max-w-6xl mx-auto mt-24 text-center space-y-10">
        <h3 className="text-3xl md:text-4xl font-[Playfair_Display] font-semibold text-[#1A1A1A]">
          A Legacy of Taste and Togetherness
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          From our first venue in the East Midlands to our growing family across the region, 
          SRK has remained committed to creating spaces where flavour meets friendship, 
          and where the art of hospitality continues to evolve — refined, yet always sincere.
        </p>
        <div className="w-28 h-[2px] bg-[#DDB64E] mx-auto"></div>
      </div>
    </section>
  );
}
