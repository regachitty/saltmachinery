import React, { useEffect, useState } from "react";
import DottedMap from "dotted-map";
import "../assets/css/map.css"; // Import the custom map CSS for styling

const Map = () => {
  const [svgMap, setSvgMap] = useState("");
  const [pins, setPins] = useState([]);

  useEffect(() => {
    // Create the dotted map with a diagonal grid
    const map = new DottedMap({ height: 60, grid: "diagonal" });

    const pinData = [
      {
        lat: 13.4105,
        lng: 122.5621,
        country: "Philippines",
        flag: "https://flagcdn.com/ph.svg",
      },
      {
        lat: 23.8859,
        lng: 45.0792,
        country: "Saudi Arabia",
        flag: "https://flagcdn.com/sa.svg",
      },
      {
        lat: 14.6928,
        lng: -17.4467,
        country: "Senegal",
        flag: "https://flagcdn.com/sn.svg",
      },
      {
        lat: 8.460555,
        lng: -11.7799,
        country: "Sierra Leone",
        flag: "https://flagcdn.com/sl.svg",
      },
      {
        lat: 12.8628,
        lng: 30.802498,
        country: "Sudan",
        flag: "https://flagcdn.com/sd.svg",
      },
      {
        lat: 7.8731,
        lng: 80.7718,
        country: "Sri Lanka",
        flag: "https://flagcdn.com/lk.svg",
      },
      {
        lat: -6.369028,
        lng: 34.888822,
        country: "Tanzania",
        flag: "https://flagcdn.com/tz.svg",
      },
      {
        lat: 23.4241,
        lng: 53.8478,
        country: "UAE",
        flag: "https://flagcdn.com/ae.svg",
      },
      {
        lat: 9.0,
        lng: 44.0,
        country: "Somaliland",
        flag: "https://flagcdn.com/sm.svg",
      },
      {
        lat: 33.93911,
        lng: 67.709953,
        country: "Afghanistan",
        flag: "https://flagcdn.com/af.svg",
      },
      {
        lat: 26.820553,
        lng: 30.802498,
        country: "Egypt",
        flag: "https://flagcdn.com/eg.svg",
      },
      {
        lat: 15.1794,
        lng: 39.7823,
        country: "Eritrea",
        flag: "https://flagcdn.com/er.svg",
      },
      {
        lat: 9.145,
        lng: 40.4897,
        country: "Ethiopia",
        flag: "https://flagcdn.com/et.svg",
      },
      {
        lat: 7.9465,
        lng: -1.0232,
        country: "Ghana",
        flag: "https://flagcdn.com/gh.svg",
      },
      {
        lat: 20.5937,
        lng: 78.9629,
        country: "India",
        flag: "https://flagcdn.com/in.svg",
      },
      {
        lat: -0.7893,
        lng: 113.9213,
        country: "Indonesia",
        flag: "https://flagcdn.com/id.svg",
      },
      {
        lat: 33.2232,
        lng: 43.6793,
        country: "Iraq",
        flag: "https://flagcdn.com/iq.svg",
      },
      {
        lat: -1.2921,
        lng: 36.8219,
        country: "Kenya",
        flag: "https://flagcdn.com/ke.svg",
      },
      {
        lat: 6.4281,
        lng: -9.4295,
        country: "Liberia",
        flag: "https://flagcdn.com/lr.svg",
      },
      {
        lat: -18.7669,
        lng: 46.8691,
        country: "Madagascar",
        flag: "https://flagcdn.com/mg.svg",
      },
      {
        lat: -11.2027,
        lng: 17.8739,
        country: "Angola",
        flag: "https://flagcdn.com/ao.svg",
      },
      {
        lat: 3.848,
        lng: 11.5021,
        country: "Cameroon",
        flag: "https://flagcdn.com/cm.svg",
      },
      {
        lat: 3.2028,
        lng: 73.2207,
        country: "Maldives",
        flag: "https://flagcdn.com/mv.svg",
      },
      {
        lat: -18.6657,
        lng: 35.5296,
        country: "Mozambique",
        flag: "https://flagcdn.com/mz.svg",
      },
      {
        lat: 21.9162,
        lng: 95.956,
        country: "Myanmar",
        flag: "https://flagcdn.com/mm.svg",
      },
      {
        lat: -22.9576,
        lng: 18.4904,
        country: "Namibia",
        flag: "https://flagcdn.com/na.svg",
      },
      {
        lat: 9.082,
        lng: 8.6753,
        country: "Nigeria",
        flag: "https://flagcdn.com/ng.svg",
      },
      {
        lat: 21.4735,
        lng: 55.9754,
        country: "Oman",
        flag: "https://flagcdn.com/om.svg",
      },
    ];

    // Add pins to the map
    pinData.forEach((pin) =>
      map.addPin({
        lat: pin.lat,
        lng: pin.lng,
        svgOptions: { color: "#0119FF", radius: 0.3 }, // Red pin color
      })
    );

    // Set pins state and generate the SVG map
    setPins(pinData);
    const generatedSvgMap = map.getSVG({
      radius: 0.24,
      color: "hsl(225, 100%, 40%, 30%)",
      shape: "circle",
      backgroundColor: "#FFFFFF",
    });
    setSvgMap(generatedSvgMap);
  }, []);

  return (
    <div className="map-page-container mt-lg-5 mt-5 mb-lg-5 mb-5 pb-lg-5 pb-5">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="text-uppercase map-head-text text-center albert-sans">
            Our Global Presence
          </h2>
        </div>
      </div>
      <div className="map-container mt-lg-5 mt-5">
        {/* Render the SVG map */}
        <div dangerouslySetInnerHTML={{ __html: svgMap }} className="svg-map" />
        {/* Render country pins */}
        <div className="tag-container">
          {pins.map((pin, index) => (
            <div
              className="tag-box"
              key={index}
              style={{
                left: `${((pin.lng + 180) / 360) * 100}%`, // Adjust longitude to 0-100%
                top: `${((90 - pin.lat) / 180) * 100}%`, // Adjust latitude to 0-100%
              }}
            >
              <div className="pin-label">
                {/* Location icon */}
                <i
                  className="bi bi-geo-alt-fill"
                  style={{ color: "#0119FF", fontSize: "1.5rem" }}
                ></i>
                {/* Country name */}
                <div className="country-name-label">{pin.country}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
