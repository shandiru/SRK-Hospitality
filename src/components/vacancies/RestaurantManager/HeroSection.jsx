"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// ✅ Custom marker icon (Leaflet default)
import "leaflet/dist/leaflet.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function UKMapInteractive() {
  const COLORS = {
    heading: "#40565C",
    accent: "#1C3B45",
    hover: "#294D56",
  };

  // ✅ City data
  const cities = {
    london: {
      name: "London",
      coords: [51.5072, -0.1276],
      address: [
        "Fast-Fit London Auto Centre",
        "45 High Street",
        "London",
        "SW1A 1AA",
      ],
      phone: "020 7946 1234",
      hours: "Monday–Saturday 8:30am–5:30pm",
      services: [
        "Tyres",
        "MOT Testing",
        "Brake Replacement",
        "Wheel Alignment",
        "Air Conditioning",
      ],
    },
    cambridge: {
      name: "Arbury, Cambridge",
      coords: [52.2053, 0.1218],
      address: [
        "Fast-Fit Tyres and Exhausts",
        "33-35 Histon Road",
        "Arbury",
        "Cambridge",
        "CB4 3JB",
      ],
      phone: "01223 316 888",
      hours: "Monday–Saturday 8:30am–5:30pm",
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    manchester: {
      name: "Manchester",
      coords: [53.4808, -2.2426],
      address: [
        "Fast-Fit Manchester Centre",
        "12 King Street",
        "Manchester",
        "M1 4HD",
      ],
      phone: "0161 555 7890",
      hours: "Monday–Saturday 8:00am–6:00pm",
      services: [
        "Tyres",
        "Suspension Repairs",
        "Batteries",
        "Exhausts",
        "Wheel Balancing",
      ],
    },
  };

  const [selectedCity, setSelectedCity] = useState("cambridge");
  const city = cities[selectedCity];

  return (
    <section className="w-full py-10 bg-white dark:bg-[#0C1416] transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT PANEL */}
        <div className="rounded-2xl p-6 md:p-8 shadow-sm bg-[#F5F7F8] dark:bg-[#111A1D]">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: COLORS.heading }}
          >
            {city.name}
          </h2>

          <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-200">
            <div>
              <p className="font-semibold text-base" style={{ color: COLORS.accent }}>
                Address
              </p>
              {city.address.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>

            <div>
              <p className="font-semibold" style={{ color: COLORS.accent }}>
                Phone
              </p>
              <a
                href={`tel:${city.phone}`}
                className="underline decoration-transparent hover:decoration-inherit"
                style={{ color: COLORS.hover }}
              >
                {city.phone}
              </a>
            </div>

            <div>
              <p className="font-semibold" style={{ color: COLORS.accent }}>
                Opening Hours
              </p>
              <p>{city.hours}</p>
              <p>Closed on Sundays and Bank Holidays</p>
            </div>

            <div>
              <p className="font-semibold" style={{ color: COLORS.accent }}>
                Services
              </p>
              <ul className="list-disc ml-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                {city.services.map((srv, i) => (
                  <li key={i}>{srv}</li>
                ))}
              </ul>
            </div>

            <div className="pt-3">
              <a
                href="#book-online"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold shadow-sm bg-[#1C3B45] text-white hover:opacity-90"
              >
                BOOK ONLINE ►
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: ACTUAL INTERACTIVE MAP */}
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <MapContainer
            center={[52.3555, -1.1743]} // roughly UK center
            zoom={6}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* City Markers */}
            {Object.entries(cities).map(([key, data]) => (
              <Marker
                key={key}
                position={data.coords}
                eventHandlers={{
                  click: () => setSelectedCity(key),
                }}
              >
                <Popup>
                  <div className="text-sm font-medium">{data.name}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
