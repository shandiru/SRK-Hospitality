export default function MapSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Find Us Here
        </h2>

        <div className="w-full h-[450px] overflow-hidden rounded-xl shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.892120596287!2d-1.2713499!3d52.8983326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e8e8699b90dd%3A0x134390e8c257bdbf!2s45%20Market%20Place%2C%20Long%20Eaton%2C%20Nottingham%20NG10%201JL%2C%20UK!5e0!3m2!1sen!2suk!4v1694952000000!5m2!1sen!2suk"
            title="45 Market Place, Long Eaton, Nottingham NG10 1JL, UK"
            aria-label="45 Market Place, Long Eaton, Nottingham NG10 1JL, UK"
            loading="lazy"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
