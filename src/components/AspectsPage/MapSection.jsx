export default function MapSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Find Us Here
        </h2>

        <div className="w-full h-[450px] overflow-hidden rounded-xl shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.428246942207!2d-1.2144060236171327!3d52.59273597208446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48775dc1002096e5%3A0xb1372fa4ff209cff!2s7%20Mill%20Hill%2C%20Enderby%2C%20Leicester%20LE19%204AL%2C%20United%20Kingdom!5e0!3m2!1sen!2suk!4v1726313610000!5m2!1sen!2suk"
            title="Aspects Restaurant, 7 Mill Hill, Enderby, Leicester LE19 4AL, UK"
            aria-label="Aspects Restaurant, 7 Mill Hill, Enderby, Leicester LE19 4AL, UK"
            loading="lazy"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
