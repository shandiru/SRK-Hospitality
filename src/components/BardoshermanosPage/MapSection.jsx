export default function MapSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Find Us Here
        </h2>

        <div className="w-full h-[450px] overflow-hidden rounded-xl shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198.06815689439973!2d-1.1172814142778573!3d52.61863587153105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761314d8842f7%3A0x2d7b112eec4d6b22!2s52%20Queens%20Rd%2C%20Clarendon%20Park%2C%20Leicester%20LE2%201TU%2C%20UK!5e0!3m2!1sen!2suk!4v1694950000000!5m2!1sen!2suk"
            title="52 Queens Rd, Clarendon Park, Leicester LE2 1TU, UK"
            aria-label="52 Queens Rd, Clarendon Park, Leicester LE2 1TU, UK"
            loading="lazy"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
