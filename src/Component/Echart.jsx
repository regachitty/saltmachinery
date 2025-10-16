import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";

const EChart = () => {
  const chartRef = useRef(null);
  const [chartHeight, setChartHeight] = useState(
    Math.max(window.innerHeight * 0.7, 400)
  );

  const pinData = [
    { country: "Philippines" },
    { country: "Saudi Arabia" },
    { country: "Senegal" },
    { country: "Sierra Leone" },
    { country: "Sudan" },
    { country: "Sri Lanka" },
    { country: "Tanzania" },
    { country: "UAE" },
    { country: "Somaliland" },
    { country: "Afghanistan" },
    { country: "Egypt" },
    { country: "Eritrea" },
    { country: "Ethiopia" },
    { country: "Ghana" },
    { country: "India" },
    { country: "Indonesia" },
    { country: "Iraq" },
    { country: "Kenya" },
    { country: "Liberia" },
    { country: "Madagascar" },
    { country: "Angola" },
    { country: "Cameroon" },
    { country: "Maldives" },
    { country: "Mozambique" },
    { country: "Myanmar" },
    { country: "Namibia" },
    { country: "Nigeria" },
    { country: "Oman" },
  ];

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const handleResize = () => {
      setChartHeight(Math.max(window.innerHeight * 0.7, 400)); // responsive height
      chart.resize();
    };
    window.addEventListener("resize", handleResize);

    fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.json")
      .then((res) => res.json())
      .then((worldJson) => {
        echarts.registerMap("world", worldJson);

        chart.setOption({
          tooltip: {
            trigger: "item",
            formatter: (params) => params.name || "",
          },
          series: [
            {
              type: "map",
              map: "world",
              roam: false, // disable zoom & pan
              zoom: 1.7, // fixed zoom
              layoutCenter: ["50%", "50%"], // center the map
              layoutSize: "100%", // fit width
              label: { show: false },
              emphasis: {
                label: { show: false },
                itemStyle: { areaColor: "#94ACD2" },
              },
              itemStyle: {
                areaColor: "#E0E0E0",
                borderColor: "#0c0c0cff",
              },
              data: pinData.map((p) => ({
                name: p.country,
                itemStyle: { areaColor: "#94ACD2" },
              })),
            },
          ],
        });
      });

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, []);

  return (
    <>
      <p
        className="text-center text-black mb-4 text-uppercase"
        style={{ fontSize: "3rem", fontWeight: "500" }}
      >
        Our Global Presence
      </p>
      <div
        ref={chartRef}
        style={{
          width: "100%",
          height: chartHeight,
          maxWidth: "100%",
          overflow: "hidden",
        }}
      />
    </>
  );
};

export default EChart;
