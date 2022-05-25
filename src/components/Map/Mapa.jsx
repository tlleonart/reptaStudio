import { Map, Marker } from "pigeon-maps";
import React, { useState } from "react";

const Mapa = () => {
  const [center, setCenter] = useState([
    -34.60441997863992, -58.42741303069197,
  ]);
  const [zoom, setZoom] = useState(17);
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <div>
      <Map
        height={400}
        center={center}
        zoom={zoom}
        onBoundsChanged={({ center, zoom }) => {
          setCenter(center);
          setZoom(zoom);
        }}
      >
        <Marker
          width={50}
          anchor={[-34.60441997863992, -58.42741303069197]}
          color={color}
          onClick={() => setHue(hue + 20)}
        />
      </Map>
    </div>
  );
};

export default Mapa;
