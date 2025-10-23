import { Chart } from "react-google-charts";

const pinData = [
  { lat: 13.4105, lng: 122.5621, country: "Philippines",size:16 },
  { lat: 23.8859, lng: 45.0792, country: "Saudi Arabia",size:16 },
  { lat: 14.6928, lng: -17.4467, country: "Senegal",size:16 },
  { lat: 8.460555, lng: -11.7799, country: "Sierra Leone",size:16 },
  { lat: 12.8628, lng: 30.802498, country: "Sudan",size:16 },
  { lat: 7.8731, lng: 80.7718, country: "Sri Lanka",size:16 },
  { lat: -6.369028, lng: 34.888822, country: "Tanzania",size:16 },
  { lat: 23.4241, lng: 53.8478, country: "UAE",size:16 },
  { lat: 9.0, lng: 44.0, country: "Somaliland",size:16 },
  { lat: 33.93911, lng: 67.709953, country: "Afghanistan",size:16 },
  { lat: 26.820553, lng: 30.802498, country: "Egypt",size:16 },
  { lat: 15.1794, lng: 39.7823, country: "Eritrea",size:16 },
  { lat: 9.145, lng: 40.4897, country: "Ethiopia",size:16 },
  { lat: 7.9465, lng: -1.0232, country: "Ghana",size:16 },
  { lat: 20.5937, lng: 78.9629, country: "India",size:16 },
  { lat: -0.7893, lng: 113.9213, country: "Indonesia",size:16 },
  { lat: 33.2232, lng: 43.6793, country: "Iraq",size:16 },
  { lat: -1.2921, lng: 36.8219, country: "Kenya",size:16 },
  { lat: 6.4281, lng: -9.4295, country: "Liberia",size:16 },
  { lat: -18.7669, lng: 46.8691, country: "Madagascar",size:16 },
  { lat: -11.2027, lng: 17.8739, country: "Angola",size:16 },
  { lat: 3.848, lng: 11.5021, country: "Cameroon",size:16 },
  { lat: 3.2028, lng: 73.2207, country: "Maldives",size:16 },
  { lat: -18.6657, lng: 35.5296, country: "Mozambique",size:16 },
  { lat: 21.9162, lng: 95.956, country: "Myanmar",size:16 },
  { lat: -22.9576, lng: 18.4904, country: "Namibia",size:16 },
  { lat: 9.082, lng: 8.6753, country: "Nigeria",size:16 },
  { lat: 21.4735, lng: 55.9754, country: "Oman",size:16 },
];

const Mapdemo = () => {
const data = [
  ["Lat", "Long", "Country", "Size", { role: "tooltip", type: "string", p: { html: true } }],
  ...pinData.map((pin) => [pin.lat, pin.lng, pin.country, 1, pin.size])
];


  const options = {
    displayMode: "markers",
    colorAxis: { colors: ["#95ABD0"] },
    backgroundColor: "#fff",
    datalessRegionColor: "#e0e0e0",
    defaultColor: "#95ABD0",
    legend: "none",  tooltip: {
    isHtml: true, 
    trigger: "focus", 
    textStyle: { color: "#333" },
  },
  sizeAxis: { minSize: 4, maxSize: 8 },
  };

  return (
    <div className="map-wrapper py-5" style={{ width: "100%" }}>
      <h2 className="testimonal-heading text-uppercase  text-bolder text-center  mb-4 albert-sans w-[max-content]">
        Our Global Presence
      </h2>
      <div
        style={{
          width: "100%",
          height: "0",
          paddingBottom: "60%",
          position: "relative",
          overflow:"hidden"
        }}
      >
        <Chart
          chartType="GeoChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const country = data[selection[0].row + 1][2];
                console.log("Selected:", country);
              },
            },
          ]}
          // chartWrapperParams={{ containerId: "geo-chart-container" }}
          // style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
        />
      </div>
    </div>
  );
};

export default Mapdemo;
