import { FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

export default function ContactSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Us</h2>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Visit us</h4>
                <p className="text-gray-600">
                  The Old Grammar School, 41 Free school Lane, Highcross, Leicester, LE1 4FY
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Call us</h4>
                <p className="text-gray-600">0116 251 6879</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                <FiSend size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Mail us</h4>
                <p className="text-orange-600 font-medium">info@fifteenseventythree.com</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-8">
            <img
              src="/contact-drinks.png"
              alt="Cocktails"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Right Column - Form */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Send your message Here</h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Your name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-full border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                placeholder="+44 123 456 7890"
                className="w-full rounded-full border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Your email</label>
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
                rows="4"
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
