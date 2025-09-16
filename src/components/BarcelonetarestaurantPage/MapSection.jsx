export default function MapSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Find Us Here
        </h2>

        <div className="w-full h-[450px] overflow-hidden rounded-xl shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9602.926093507715!2d-1.112944!3d52.6201967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877613149c74739%3A0x7276091ba8ad492!2sBarceloneta%20Spanish%20and%20Mediterranean%20tapas%20Restaurant%20and%20Bar!5e0!3m2!1sen!2slk!4v1694948037911!5m2!1sen!2slk"
            title="Barceloneta Spanish and Mediterranean Tapas Restaurant and Bar"
            aria-label="Barceloneta Spanish and Mediterranean Tapas Restaurant and Bar"
            loading="lazy"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
