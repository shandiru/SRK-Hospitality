export default function MapSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Find Us Here
        </h2>

        <div className="w-full h-[450px] overflow-hidden rounded-xl shadow-md border border-gray-200">
          <iframe
            src="https://maps.google.com/maps?q=1573%20Freeschool%20Ln%2C%20Leicester%20LE1%204NN%2C%20United%20Kingdom&t=m&z=15&output=embed&iwloc=near"
            title="1573 Freeschool Ln, Leicester LE1 4NN, United Kingdom"
            aria-label="1573 Freeschool Ln, Leicester LE1 4NN, United Kingdom"
            loading="lazy"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
