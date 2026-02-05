"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface Person {
  name: string;
  location: string;
  coords: [number, number]; // [lng, lat]
  tag?: "primary";
}

export default function SvgMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<maplibregl.Map | null>(null);

  const peopleData: Person[] = [
    {
      name: "Brand Gardner",
      location: "St. London Street, London<br/>Assistant General Manager – HR<br/>University of London",
      coords: [-0.1276, 51.5074],
      tag: "primary",
    },
    {
      name: "Radoan Hossain",
      location: "Dhaka, Bangladesh<br/>Software Engineer<br/>",
      coords: [90.4130, 23.8103],
    },
    {
      name: "John Doe",
      location: "Evora, Portugal<br/>Professor<br/>University of Evora",
      coords: [-7.9071, 38.5716],
    },
    {
      name: "Shawn Willium",
      location: "USA<br/>Professor<br/>University of California",
      coords: [-98.5795, 39.8283],
    },
  ];

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      //style: "https://demotiles.maplibre.org/style.json",
      //style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      //style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [0, 20],
      zoom: 2,
      renderWorldCopies: false,
    });

    mapInstance.current = map;
    map.addControl(new maplibregl.NavigationControl());

    map.on("load", async () => {
      // Marker SVG
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#305CDE">
          <path d="M12,2A7,7 0 0,0 5,9C5,13.25 12,22 12,22C12,22 19,13.25 19,9A7,7 0 0,0 12,2M12,11.5A2.5,2.5 0 1,1 14.5,9A2.5,2.5 0 0,1 12,11.5Z"/>
        </svg>
      `;

      const img = new Image(28, 28);
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
      await img.decode();
      map.addImage("person-marker", img);

      // GeoJSON for people
      map.addSource("people", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: peopleData.map((p) => ({
            type: "Feature",
            properties: {
              name: p.name,
              location: p.location,
              tag: p.tag ?? "normal",
            },
            geometry: { type: "Point", coordinates: p.coords },
          })),
        },
      });

      // Primary marker
      map.addLayer({
        id: "primary-layer",
        type: "symbol",
        source: "people",
        filter: ["==", ["get", "tag"], "primary"],
        layout: {
          "icon-image": "person-marker",
          "icon-size": 1.3,
          "icon-allow-overlap": true,
        },
      });

      // Non-primary markers
      map.addLayer({
        id: "people-layer",
        type: "symbol",
        source: "people",
        filter: ["!=", ["get", "tag"], "primary"],
        layout: {
          "icon-image": "person-marker",
          "icon-size": 1,
          "icon-allow-overlap": true,
        },
      });

      // -----------------------------
      // Connect all non-primary markers to primary
      // -----------------------------
      const primary = peopleData.find((p) => p.tag === "primary")!;
      const nonPrimary = peopleData.filter((p) => p.tag !== "primary");

      // nonPrimary.forEach((p, index) => {
      //   map.addSource(`line-${index}`, {
      //     type: "geojson",
      //     data: {
      //       type: "Feature",
      //       geometry: {
      //         type: "LineString",
      //         coordinates: [primary.coords, p.coords],
      //       },
      //     },
      //   });

      //   map.addLayer({
      //     id: `line-layer-${index}`,
      //     type: "line",
      //     source: `line-${index}`,
      //     paint: {
      //       "line-color": "#000",
      //       "line-width": 1,
      //       "line-opacity": 0.6,
      //     },
      //   });
      // });

      nonPrimary.forEach((p, index) => {
        map.addSource(`line-${index}`, {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {}, // ✅ এখানে properties add করলেই হবে
            geometry: {
              type: "LineString",
              coordinates: [primary.coords, p.coords],
            },
          },
        });

        map.addLayer({
          id: `line-layer-${index}`,
          type: "line",
          source: `line-${index}`,
          paint: {
            "line-color": "#000",
            "line-width": 1,
            "line-opacity": 0.6,
          },
        });
      });
      // -----------------------------
      // Primary popup (always visible)
      // -----------------------------
      const primaryPopup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 20,
      })
        .setLngLat(primary.coords)
        .setHTML(`<strong>${primary.name}</strong><br/>${primary.location}`)
        .addTo(map);

      // Hover popup for non-primary markers
      const hoverPopup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 20,
      });

      let activeKey: string | null = null;
      const onMove = (e: any) => {
        const feature = e.features?.[0];
        if (!feature) return;
        if (feature.properties.tag === "primary") return; // skip primary

        const coords = feature.geometry.coordinates.slice();
        const key = coords.toString();
        if (key === activeKey) return;
        activeKey = key;

        map.getCanvas().style.cursor = "pointer";
        hoverPopup
          .setLngLat(coords)
          .setHTML(`<strong>${feature.properties.name}</strong><br/>${feature.properties.location}`)
          .addTo(map);
      };

      map.on("mousemove", "people-layer", onMove);

      map.on("mouseleave", "people-layer", () => {
        activeKey = null;
        map.getCanvas().style.cursor = "";
        hoverPopup.remove();
      });
    });

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100%", height: "60vh" }}
      className="border border-gray-300 rounded-lg"
    />
  );
}