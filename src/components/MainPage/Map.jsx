import React,{useState, useEffect, useRef} from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const home = { lng: 84.43667350422638, lat: 27.698074806790366 };
  const [zoom] = useState(13);
  maptilersdk.config.apiKey = process.env.REACT_APP_MAPTILER_API_KEY;
  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
    console.log(process.env.REACT_APP_MAPTILER_API_KEYS +"hELLO");
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [home.lng, home.lat],
      zoom: zoom,
    });
    new maptilersdk.Marker({color: "#FF0000"})
      .setLngLat([84.43667350422638,27.698074806790366])
      .addTo(map.current);
  }, [home.lng, home.lat, zoom]);

  return (
    <div className="relative rounded-xl w-auto h-[320px] m-auto z-0">
      <div ref={mapContainer} className="absolute w-[100%] h-[100%]" />
    </div>
  );
}

export default Map;
