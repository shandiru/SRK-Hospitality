import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-[#0d1525] text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#111b2d] to-[#0d1525] px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center border border-blue-500 text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-6">
            <FaPhoneAlt className="w-4 h-4 mr-2" />
            Get In Touch
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-400">Contact</span> Us
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to book a service or have questions about your vehicle? We're here to help.
            Contact Shahz tyres today for expert automotive advice and service.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Visit Our Garage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    8 Kent St<br />Leicester<br />LE5 3BD
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaPhoneAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-400">
                    <a href="tel:07462163163" className="hover:text-blue-400">07462 163163</a><br />
                    <a href="tel:07462163163" className="hover:text-blue-400">07462 163163</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-400">
                    <a href="mailto:info@atbmotorengineers.co.uk" className="hover:text-blue-400">
                      info@atbmotorengineers.co.uk
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Opening Hours</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 8:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency */}
            <div className="mt-10 p-6 bg-red-900/20 border border-red-800/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-red-400">Emergency Breakdown?</h3>
              <p className="text-gray-300 mb-2">
                For emergency breakdown assistance, call our 24/7 emergency line:
              </p>
              <p className="text-xl font-bold text-red-400">
                <a href="tel:07999123456" className="hover:text-red-300">07999 123 456</a>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="bg-[#111b2d] rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.target);
                  const first = data.get("firstName");
                  const last = data.get("lastName");
                  const email = data.get("email");
                  const phone = data.get("phone");
                  const service = data.get("service");
                  const msg = data.get("message");
                  const waMsg = `Hi Shahz tyres,%0A%0AName: ${first} ${last}%0AEmail: ${email}%0APhone: ${phone}%0AService Required: ${service}%0A%0AMessage: ${msg}`;
                  window.open(`https://wa.me/447123456789?text=${waMsg}`, "_blank");
                }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">First Name</label>
                    <input name="firstName" required placeholder="Your first name"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Last Name</label>
                    <input name="lastName" required placeholder="Your last name"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Email Address</label>
                  <input type="email" name="email" required placeholder="your.email@example.com"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Phone Number</label>
                  <input type="tel" name="phone" required placeholder="Your phone number"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Service Required</label>
                  <select name="service" required
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white">
                    <option value="">Select a service</option>
                    <option value="tyres">Tyres</option>
                    <option value="car-welding">Car Welding</option>
                    <option value="home-welding">Home Welding</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea name="message" rows={5} required
                    placeholder="Tell us about your requirements..."
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white" />
                </div>

                <button type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md flex items-center justify-center gap-2">
                  <FaWhatsapp className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#111b2d] px-6 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Find Us</h2>
          <div className="bg-[#0d1525] rounded-lg p-8">
            <div className="w-full h-64 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
              <div>
                <FaMapMarkerAlt className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <p className="text-gray-400">Interactive map would be embedded here</p>
                <p className="text-sm text-gray-500">8 Kent St, Leicester LE5 3BD</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-1">Easy Parking</h3>
                <p className="text-gray-400 text-sm">Free customer parking available on-site</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Public Transport</h3>
                <p className="text-gray-400 text-sm">Bus stop 2 minutes walk from our garage</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Central Location</h3>
                <p className="text-gray-400 text-sm">Conveniently located in Derby city center</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
