import {
  FiMapPin,
  FiPhone,
  FiSend,
  FiClock
} from 'react-icons/fi';

export default function ContactSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Us</h2>

          <div className="space-y-6">
            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                <FiClock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Opening Hours</h4>
                <p className="text-gray-600">
                  <span className="font-semibold text-orange-600">Pickup</span><br />
                  Mon, Tue, Thu: 5:30 PM - 10:50 PM<br />
                  Fri, Sat: 5:30 PM - 1:00 AM<br />
                  Sun: 5:30 PM - 10:50 PM<br />
                  Wed: <span className="text-red-500">Closed</span><br />
                  <br />
                  <span className="font-semibold text-orange-600">Delivery</span><br />
                  Mon, Tue, Thu: 5:30 PM - 10:50 PM<br />
                  Fri, Sat: 5:30 PM - 1:00 AM<br />
                  Sun: 5:30 PM - 10:50 PM<br />
                  Wed: <span className="text-red-500">Closed</span>
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Visit Us</h4>
                <p className="text-gray-600">
                  <a
                    href="https://www.google.co.uk/maps/place/45+Market+Pl,+Long+Eaton,+Nottingham+NG10+1JL,+UK/@52.8983326,-1.2713499,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    45A Market Place, Long Eaton,<br />
                    Nottingham, NG10 1JL
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Call Us</h4>
                <p className="text-gray-600">
                  <a href="tel:01158714164" className="text-blue-600 hover:underline">
                    0115 871 4164
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                <FiSend size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Mail Us</h4>
                <p className="text-orange-600 font-medium">
                  info@alnaseeb.co.uk
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          {/* <div className="mt-8">
            <img
              src="/f1.jpg"
              alt="Al Naseeb Restaurant"
              className="rounded-xl shadow-md"
            />
          </div> */}
        </div>

        {/* Right Column - Form */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Send your message Here
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-full border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                placeholder="+44 123 456 7890"
                className="w-full rounded-full border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Your email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full rounded-full border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Your message (optional)
              </label>
              <textarea
                rows={4}
                placeholder="Write something..."
                className="w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
