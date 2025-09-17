export default function MapSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Find Us Here
        </h2>

        <div className="w-full h-[450px] overflow-hidden rounded-xl shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.267567419277!2d-0.9489956233391866!3d52.18400897197503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877055e27ab800d%3A0xd6b9e41a1a4ef766!2sWalnut%20Tree%20Inn%2C%2021%20Station%20Rd%2C%20Blisworth%2C%20Northampton%20NN7%203DS%2C%20UK!5e0!3m2!1sen!2slk!4v1758088049180!5m2!1sen!2slk"
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
