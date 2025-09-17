import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const venues = [
  { name: "157 Bar and Grill", desc: "Bar and Grill", img: "/157.png", slug: "1573bar" },
  { name: "The Walnut Tree Inn", desc: "Fine dining experience", img: "/walnut.png", slug: "walnut-tree" },
  { name: "Barceloneta", desc: "Spanish bar", img: "/barceloneta.png", slug: "barceloneta" },
  { name: "Bar Dos Hermanos", desc: "Cuban bar", img: "/doshermanos.png", slug: "dos-hermanos" },
  { name: "Al Naseeb", desc: "Indian restaurant", img: "/alnaseeb.png", slug: "al-naseeb" },
  { name: "Freddie’s", desc: "Dessert shop", img: "/freddies.png", slug: "freddies" },
  { name: "Aspects", desc: "Indian restaurant", img: "/aspects.png", slug: "aspects" },
  { name: "Basement", desc: "Nightclub", img: "/basement.png", slug: "basement" },
  { name: "Subway Wigston", desc: "Fast Food", img: "/subway.png", slug: "subway-wigston" },
  { name: "Subway Braunstone Gate", desc: "Fast Food", img: "/Subway Braunstone Gate.png", slug: "subway-branustone" },
  { name: "Toluca", desc: "Mexican Bar & Grill", img: "/Toluca.png", slug: "toluca" },
  { name: "FUSIC", desc: " BBQ Specia", img: "/Toluca.png", slug: "fusic" },

];

export default function VenuesGrid() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section className="bg-[#f7f3ec] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {venues.map((v, i) => (
            <Link to={`/${v.slug}`} key={v.name}>
              <div
                ref={el => (cardsRef.current[i] = el)}
                className="relative w-[280px] h-[280px] overflow-hidden shadow-xl group cursor-pointer rounded-xl"
              >
                <img
                  src={v.img}
                  alt={v.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Text */}
                <div className="absolute bottom-0 w-full px-6 pb-6 text-white text-center z-10">
                  <h3 className="text-lg font-semibold mb-1">{v.name}</h3>
                  <p className="text-sm text-gray-200">{v.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
