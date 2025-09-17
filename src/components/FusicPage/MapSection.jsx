export default function MapSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Find Us Here
        </h2>

        <div className="w-full h-[450px] overflow-hidden rounded-xl shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.4204931188595!2d-1.1099439236144702!3d52.64423387206779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761727665afe3%3A0x69fcfe7bba101034!2sFUSIC%20-%20Restaurant%2C%20Takeaway%20%26%20Deliveries!5e0!3m2!1sen!2suk!4v1726480000000!5m2!1sen!2suk"
            title="FUSIC Restaurant, 117 Frisby Rd, Leicester LE5 0DQ, UK"
            aria-label="FUSIC Restaurant, 117 Frisby Rd, Leicester LE5 0DQ, UK"
            loading="lazy"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
