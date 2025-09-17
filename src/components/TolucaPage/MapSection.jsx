export default function MapSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Find Us Here
        </h2>

        <div className="w-full h-[450px] overflow-hidden rounded-xl shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d77399.8992789567!2d-1.8287530000000003!3d52.682609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a78f3af5b0db%3A0x70a316ca68f66189!2s1-3%20City%20Arcade%2C%20Lichfield%20WS13%206LZ%2C%20UK!5e0!3m2!1sen!2sus!4v1758108297644!5m2!1sen!2sus"
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
