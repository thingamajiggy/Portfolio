import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  {
    markerOffset: -30,
    name: "Seoul",
    coordinates: [126.9918, 37.5519],
  },
  {
    markerOffset: -30,
    name: "Taipei",
    coordinates: [121.597366, 25.105497],
  },
  {
    markerOffset: -30,
    name: "Beijing",
    coordinates: [116.383331, 39.916668],
  },
  {
    markerOffset: -30,
    name: "Istanbul",
    coordinates: [28.97953, 41.015137],
  },
  {
    markerOffset: -30,
    name: "Athens",
    coordinates: [23.727539, 37.98381],
  },
  {
    markerOffset: -30,
    name: "Dubai",
    coordinates: [55.296249, 25.276987],
  },
  {
    markerOffset: -30,
    name: "Osaka",
    coordinates: [135.484802, 34.672314],
  },
  { markerOffset: 15, name: "Vladivostok", coordinates: [131.9113, 43.1332] },
  { markerOffset: 15, name: "Moscow", coordinates: [37.618423, 55.751244] },
  {
    markerOffset: 15,
    name: "Saint Petersburg",
    coordinates: [30.308611, 59.9375],
  },
  { markerOffset: 15, name: "Helsinki", coordinates: [24.945831, 60.192059] },
  { markerOffset: 15, name: "Tallinn", coordinates: [24.753574, 59.436962] },
  { markerOffset: -30, name: "Tbilisi", coordinates: [44.783333, 41.716667] },
  { markerOffset: -30, name: "Yerevan", coordinates: [44.50349, 40.1772] },
  { markerOffset: 15, name: "Baku", coordinates: [49.867092, 40.409264] },
  { markerOffset: 15, name: "Kyiv", coordinates: [30.523333, 50.450001] },
  { markerOffset: 15, name: "Warsaw", coordinates: [21.017532, 52.237049] },
  { markerOffset: 15, name: "Prague", coordinates: [14.41854, 50.073658] },
  { markerOffset: 15, name: "Bratislava", coordinates: [17.107748, 48.148598] },
  { markerOffset: 15, name: "Budapest", coordinates: [19.040236, 50.450001] },
  { markerOffset: 15, name: "Zagreb", coordinates: [15.966568, 45.815399] },
  { markerOffset: 15, name: "Sarajevo", coordinates: [18.413029, 43.85643] },
  { markerOffset: 15, name: "Belgrade", coordinates: [20.457273, 44.787197] },
  { markerOffset: 15, name: "Chiang Mai", coordinates: [98.979263, 18.796143] },
  { markerOffset: 15, name: "Frankfurt", coordinates: [8.682127, 50.110924] },
  { markerOffset: 15, name: "Azores", coordinates: [37.7412, 25.6756] },
  { markerOffset: 15, name: "Newcastle", coordinates: [-1.6, 54.966667] },
];

const Map = () => {
  return (
    <ComposableMap
      width={600}
      height={400}
      style={{ width: "100%", height: "100%" }}
      data-tip=""
      projectionConfig={{
        scale: 120,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#ddd"
              stroke="#ff0"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Map;
