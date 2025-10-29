"use client";
import React, { useRef, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Users,
  MapPin,
  MessageSquare,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const VenueBookingForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    // Basic validation
    if (
      !form.firstName.value ||
      !form.lastName.value ||
      !form.email.value ||
      !form.phone.value ||
      !form.eventType.value ||
      !form.eventDate.value ||
      !form.guestCount.value ||
      !form.location.value
    ) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_404lxe7", // replace with your EmailJS service ID
        "template_ab4b57p", // replace with your EmailJS template ID
        form,
        "tmUgtXKf_TwGrV1iE" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Booking inquiry sent successfully!");
          form.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send inquiry. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-20 px-6 bg-[#FFF8E6] font-['Poppins']">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">
            Let&apos;s Find Your Perfect Venue
          </h2>
          <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you within 24
            hours with personalised venue recommendations tailored to your
            needs.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-xl shadow-md border border-[#E0E0E0] p-8">
          <h3 className="text-2xl font-semibold mb-2 text-[#D8B04C]">
            Book Your Venue
          </h3>
          <p className="text-gray-600 mb-8">
            Tell us about your event and we&apos;ll find the perfect venue for
            you.
          </p>

          <form className="space-y-8" ref={formRef} onSubmit={handleSubmit}>
            {/* Your Information */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold flex items-center gap-2 text-[#1A1A1A]">
                <User className="w-5 h-5 text-[#D8B04C]" />
                Your Information
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#D8B04C] outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#D8B04C] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#D8B04C]" />
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#D8B04C] outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className=" text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#D8B04C]" />
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+44 7700 900000"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#D8B04C] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold flex items-center gap-2 text-[#1A1A1A]">
                <Calendar className="w-5 h-5 text-[#D8B04C]" />
                Event Details
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#D8B04C] outline-none bg-white"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="conference">Conference</option>
                    <option value="party">Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Date *
                  </label>
                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#D8B04C] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="guestCount"
                    className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"
                  >
                    <Users className="w-4 h-4 text-[#D8B04C]" />
                    Number of Guests *
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#D8B04C] outline-none bg-white"
                  >
                    <option value="">Select guest count</option>
                    <option value="1-50">1–50 guests</option>
                    <option value="51-100">51–100 guests</option>
                    <option value="101-200">101–200 guests</option>
                    <option value="201-500">201–500 guests</option>
                    <option value="500+">500+ guests</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className=" text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-[#D8B04C]" />
                    Preferred Location *
                  </label>
                  <select
                    id="location"
                    name="location"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#D8B04C] outline-none bg-white"
                  >
                    <option value="">Select location</option>
                    <option value="uk-london">UK – London</option>
                    <option value="dubai">Dubai</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#1A1A1A]">Budget</h4>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Estimated Budget (Optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#D8B04C] outline-none bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under £5,000</option>
                  <option value="5k-10k">£5,000 – £10,000</option>
                  <option value="10k-25k">£10,000 – £25,000</option>
                  <option value="25k-50k">£25,000 – £50,000</option>
                  <option value="50k+">£50,000+</option>
                </select>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center gap-2 text-[#1A1A1A]">
                <MessageSquare className="w-5 h-5 text-[#D8B04C]" />
                Additional Information
              </h4>
              <div>
                <label
                  htmlFor="requirements"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Special Requirements or Preferences
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  placeholder="Tell us about any specific requirements, preferences, or questions you have..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm min-h-[120px] resize-none focus:ring-2 focus:ring-[#D8B04C] outline-none"
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D8B04C] hover:bg-[#C29C3F] text-white text-lg font-semibold py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit Booking Inquiry"}
            </button>

            {success && (
              <p className="text-green-600 text-center mt-2">{success}</p>
            )}

            <p className="text-sm text-gray-500 text-center mt-2">
              By submitting this form, you agree to be contacted by our team
              regarding your venue inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VenueBookingForm;
