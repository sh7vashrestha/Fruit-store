import React,{useState, useEffect, useRef} from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const home = { lng: 84.43333, lat: 27.68333 };
  const [zoom] = useState(15);
  maptilersdk.config.apiKey = "LtDBY0ieuCe8E2nxgNAR";
  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [home.lng, home.lat],
      zoom: zoom,
    });
    new maptilersdk.Marker({color: "#FF0000"})
      .setLngLat([139.7525,35.6846])
      .addTo(map.current);
  }, [home.lng, home.lat, zoom]);

  return (
    <div className="relative w-full h-[100vh]">
      <div ref={mapContainer} className="absolute w-[100%] h-[100%]" />
    </div>
  );
}

export default Map;
