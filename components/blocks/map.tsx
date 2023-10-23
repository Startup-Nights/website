import { useEffect, useRef, useState } from "react";
import { Template } from "tinacms";
import { Protocol } from 'pmtiles';
import Map from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Switch } from "@headlessui/react";

export default function EventMap({ data }) {
  const container = useRef(null)
  const map = useRef(null)

  let mapdata: maplibregl.Map;

  useEffect(() => {
    const protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);

    mapdata = new maplibregl.Map({
      container: container.current,
      style: {
        "version": 8,
        "sources": {
          "test": {
            "type": "geojson",
            "data": {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [8.7, 47.5],
                    [8.8, 47.6],
                    [8.8, 47.7],
                    [8.7, 47.7],
                  ]
                ]
              }
            }
          },
          "protomaps": {
            "type": "vector",
            "attribution": "<a href=\"https://github.com/protomaps/basemaps\">Protomaps</a> © <a href=\"https://openstreetmap.org\">OpenStreetMap</a>",
            "url": "pmtiles://https://startupnights.fra1.cdn.digitaloceanspaces.com/2023/location/winterthur.pmtiles",
          }
        },
        "layers": [
          {
            'id': 'test',
            'type': 'fill',
            'source': 'test',
            'layout': {},
            'paint': {
              'fill-color': '#088',
              'fill-opacity': 0.8
            }
          },
          {
            "id": "background",
            "type": "background",
            "paint": {
              "background-color": "#cccccc"
            }
          },
          {
            "id": "earth",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "earth",
            "paint": {
              "fill-color": "#e0e0e0"
            }
          },
          {
            "id": "landuse_park",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "landuse",
            "filter": [
              "any",
              [
                "in",
                "pmap:kind",
                "national_park",
                "park",
                "cemetery",
                "protected_area",
                "nature_reserve",
                "forest",
                "golf_course"
              ]
            ],
            "paint": {
              "fill-color": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                0,
                "#cfddd5",
                12,
                "#9cd3b4"
              ]
            }
          },
          {
            "id": "landuse_hospital",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "landuse",
            "filter": [
              "any",
              [
                "==",
                "pmap:kind",
                "hospital"
              ]
            ],
            "paint": {
              "fill-color": "#e4dad9"
            }
          },
          {
            "id": "landuse_industrial",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "landuse",
            "filter": [
              "any",
              [
                "==",
                "pmap:kind",
                "industrial"
              ]
            ],
            "paint": {
              "fill-color": "#d1dde1"
            }
          },
          {
            "id": "landuse_school",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "landuse",
            "filter": [
              "any",
              [
                "in",
                "pmap:kind",
                "school",
                "university",
                "college"
              ]
            ],
            "paint": {
              "fill-color": "#e4ded7"
            }
          },
          {
            "id": "landuse_beach",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "landuse",
            "filter": [
              "any",
              [
                "in",
                "pmap:kind",
                "beach"
              ]
            ],
            "paint": {
              "fill-color": "#e8e4d0"
            }
          },
          {
            "id": "landuse_zoo",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "landuse",
            "filter": [
              "any",
              [
                "in",
                "pmap:kind",
                "zoo"
              ]
            ],
            "paint": {
              "fill-color": "#c6dcdc"
            }
          },
          {
            "id": "landuse_military",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "landuse",
            "filter": [
              "any",
              [
                "in",
                "pmap:kind",
                "military",
                "naval_base",
                "airfield"
              ]
            ],
            "paint": {
              "fill-color": "#c6dcdc"
            }
          },
          {
            "id": "natural_wood",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "natural",
            "filter": [
              "any",
              [
                "in",
                "pmap:kind",
                "wood",
                "nature_reserve",
                "forest"
              ]
            ],
            "paint": {
              "fill-color": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                0,
                "#d0ded0",
                12,
                "#a0d9a0"
              ]
            }
          },
          {
            "id": "landuse_pedestrian",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "landuse",
            "filter": [
              "any",
              [
                "==",
                "pmap:kind",
                "pedestrian"
              ]
            ],
            "paint": {
              "fill-color": "#e3e0d4"
            }
          },
          {
            "id": "natural_scrub",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "natural",
            "filter": [
              "in",
              "pmap:kind",
              "scrub",
              "grassland",
              "grass"
            ],
            "paint": {
              "fill-color": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                0,
                "#cedcd7",
                12,
                "#99d2bb"
              ]
            }
          },
          {
            "id": "natural_glacier",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "natural",
            "filter": [
              "==",
              "pmap:kind",
              "glacier"
            ],
            "paint": {
              "fill-color": "#e7e7e7"
            }
          },
          {
            "id": "natural_sand",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "natural",
            "filter": [
              "==",
              "pmap:kind",
              "sand"
            ],
            "paint": {
              "fill-color": "#e2e0d7"
            }
          },
          {
            "id": "landuse_aerodrome",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "landuse",
            "filter": [
              "any",
              [
                "in",
                "pmap:kind",
                "aerodrome"
              ]
            ],
            "paint": {
              "fill-color": "#dadbdf"
            }
          },
          {
            "id": "transit_runway",
            "type": "line",
            "source": "protomaps",
            "source-layer": "transit",
            "filter": [
              "any",
              [
                "in",
                "pmap:kind_detail",
                "runway"
              ]
            ],
            "paint": {
              "line-color": "#e9e9ed",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                10,
                0,
                12,
                4,
                18,
                30
              ]
            }
          },
          {
            "id": "transit_taxiway",
            "type": "line",
            "source": "protomaps",
            "source-layer": "transit",
            "minzoom": 13,
            "filter": [
              "any",
              [
                "in",
                "pmap:kind_detail",
                "taxiway"
              ]
            ],
            "paint": {
              "line-color": "#e9e9ed",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                13.5,
                1,
                15,
                6
              ]
            }
          },
          {
            "id": "water",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "water",
            "paint": {
              "fill-color": "#80deea"
            }
          },
          {
            "id": "landuse_pier",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "landuse",
            "filter": [
              "any",
              [
                "==",
                "pmap:kind",
                "pier"
              ]
            ],
            "paint": {
              "fill-color": "#e0e0e0"
            }
          },
          {
            "id": "roads_tunnels_other_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "in",
                "pmap:kind",
                "other",
                "path"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                14,
                0,
                20,
                7
              ]
            }
          },
          {
            "id": "roads_tunnels_minor_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "minor_road"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-dasharray": [
                3,
                2
              ],
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                11,
                0,
                12.5,
                0.5,
                15,
                2,
                18,
                11
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                12,
                0,
                12.5,
                1
              ]
            }
          },
          {
            "id": "roads_tunnels_link_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-dasharray": [
                3,
                2
              ],
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                13.5,
                1,
                18,
                11
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                12,
                0,
                12.5,
                1
              ]
            }
          },
          {
            "id": "roads_tunnels_medium_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "medium_road"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-dasharray": [
                3,
                2
              ],
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                7.5,
                0.5,
                18,
                13
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                10,
                0,
                10.5,
                1
              ]
            }
          },
          {
            "id": "roads_tunnels_major_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "major_road"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-dasharray": [
                3,
                2
              ],
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                7.5,
                0.5,
                18,
                13
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                9,
                0,
                9.5,
                1
              ]
            }
          },
          {
            "id": "roads_tunnels_highway_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "highway"
              ],
              [
                "!=",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-dasharray": [
                6,
                0.5
              ],
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                3,
                0,
                3.5,
                0.5,
                18,
                15
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                7.5,
                1,
                20,
                15
              ]
            }
          },
          {
            "id": "roads_tunnels_other",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "in",
                "pmap:kind",
                "other",
                "path"
              ]
            ],
            "paint": {
              "line-color": "#d5d5d5",
              "line-dasharray": [
                4.5,
                0.5
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                14,
                0,
                20,
                7
              ]
            }
          },
          {
            "id": "roads_tunnels_minor",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "minor_road"
              ]
            ],
            "paint": {
              "line-color": "#d5d5d5",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                11,
                0,
                12.5,
                0.5,
                15,
                2,
                18,
                11
              ]
            }
          },
          {
            "id": "roads_tunnels_link",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#d5d5d5",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                13.5,
                1,
                18,
                11
              ]
            }
          },
          {
            "id": "roads_tunnels_medium",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "medium_road"
              ]
            ],
            "paint": {
              "line-color": "#d5d5d5",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                12,
                1.2,
                15,
                3,
                18,
                13
              ]
            }
          },
          {
            "id": "roads_tunnels_major",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "major_road"
              ]
            ],
            "paint": {
              "line-color": "#d5d5d5",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                6,
                0,
                12,
                1.6,
                15,
                3,
                18,
                13
              ]
            }
          },
          {
            "id": "roads_tunnels_highway",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "<",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "highway"
              ],
              [
                "!=",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#d5d5d5",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                3,
                0,
                6,
                1.1,
                12,
                1.6,
                15,
                5,
                18,
                15
              ]
            }
          },
          {
            "id": "physical_line_stream",
            "type": "line",
            "source": "protomaps",
            "source-layer": "physical_line",
            "minzoom": 14,
            "filter": [
              "all",
              [
                "in",
                "pmap:kind",
                "stream"
              ]
            ],
            "paint": {
              "line-color": "#80deea",
              "line-width": 0.5
            }
          },
          {
            "id": "physical_line_river",
            "type": "line",
            "source": "protomaps",
            "source-layer": "physical_line",
            "minzoom": 9,
            "filter": [
              "all",
              [
                "in",
                "pmap:kind",
                "river"
              ]
            ],
            "paint": {
              "line-color": "#80deea",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                9,
                0,
                9.5,
                1,
                18,
                12
              ]
            }
          },
          {
            "id": "buildings",
            "type": "fill",
            "source": "protomaps",
            "source-layer": "buildings",
            "paint": {
              "fill-color": "#cccccc",
              "fill-opacity": 0.5
            }
          },
          {
            "id": "transit_pier",
            "type": "line",
            "source": "protomaps",
            "source-layer": "transit",
            "filter": [
              "any",
              [
                "==",
                "pmap:kind",
                "pier"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                12,
                0,
                12.5,
                0.5,
                20,
                16
              ]
            }
          },
          {
            "id": "roads_minor_service_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 13,
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "minor_road"
              ],
              [
                "==",
                "pmap:kind_detail",
                "service"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                18,
                8
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                13.5,
                0.8
              ]
            }
          },
          {
            "id": "roads_minor_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "minor_road"
              ],
              [
                "!=",
                "pmap:kind_detail",
                "service"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                11,
                0,
                12.5,
                0.5,
                15,
                2,
                18,
                11
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                12,
                0,
                12.5,
                1
              ]
            }
          },
          {
            "id": "roads_link_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 13,
            "filter": [
              "all",
              [
                "==",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                13.5,
                1,
                18,
                11
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                13.5,
                1.5
              ]
            }
          },
          {
            "id": "roads_medium_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "medium_road"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                12,
                1.2,
                15,
                3,
                18,
                13
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                10,
                0,
                10.5,
                1.5
              ]
            }
          },
          {
            "id": "roads_major_casing_late",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "major_road"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                6,
                0,
                12,
                1.6,
                15,
                3,
                18,
                13
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                9,
                0,
                9.5,
                1
              ]
            }
          },
          {
            "id": "roads_highway_casing_late",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "highway"
              ],
              [
                "!=",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                3,
                0,
                3.5,
                0.5,
                18,
                15
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                7.5,
                1,
                20,
                15
              ]
            }
          },
          {
            "id": "roads_other",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "in",
                "pmap:kind",
                "other",
                "path"
              ]
            ],
            "paint": {
              "line-color": "#ebebeb",
              "line-dasharray": [
                3,
                1
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                14,
                0,
                20,
                7
              ]
            }
          },
          {
            "id": "roads_link",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "==",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#ffffff",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                13.5,
                1,
                18,
                11
              ]
            }
          },
          {
            "id": "roads_minor_service",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "minor_road"
              ],
              [
                "==",
                "pmap:kind_detail",
                "service"
              ]
            ],
            "paint": {
              "line-color": "#ebebeb",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                18,
                8
              ]
            }
          },
          {
            "id": "roads_minor",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "minor_road"
              ],
              [
                "!=",
                "pmap:kind_detail",
                "service"
              ]
            ],
            "paint": {
              "line-color": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                11,
                "#ebebeb",
                16,
                "#ffffff"
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                11,
                0,
                12.5,
                0.5,
                15,
                2,
                18,
                11
              ]
            }
          },
          {
            "id": "roads_medium",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "medium_road"
              ]
            ],
            "paint": {
              "line-color": "#f5f5f5",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                12,
                1.2,
                15,
                3,
                18,
                13
              ]
            }
          },
          {
            "id": "roads_major_casing_early",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "maxzoom": 12,
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "major_road"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                7.5,
                0.5,
                18,
                13
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                9,
                0,
                9.5,
                1
              ]
            }
          },
          {
            "id": "roads_major",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "major_road"
              ]
            ],
            "paint": {
              "line-color": "#ffffff",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                6,
                0,
                12,
                1.6,
                15,
                3,
                18,
                13
              ]
            }
          },
          {
            "id": "roads_highway_casing_early",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "maxzoom": 12,
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "highway"
              ],
              [
                "!=",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                3,
                0,
                3.5,
                0.5,
                18,
                15
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                7.5,
                1
              ]
            }
          },
          {
            "id": "roads_highway",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                "==",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "highway"
              ],
              [
                "!=",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#ffffff",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                3,
                0,
                6,
                1.1,
                12,
                1.6,
                15,
                5,
                18,
                15
              ]
            }
          },
          {
            "id": "transit_railway",
            "type": "line",
            "source": "protomaps",
            "source-layer": "transit",
            "filter": [
              "all",
              [
                "==",
                "pmap:kind",
                "rail"
              ]
            ],
            "paint": {
              "line-dasharray": [
                0.3,
                0.75
              ],
              "line-opacity": 0.5,
              "line-color": "#a7b1b3",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                3,
                0,
                6,
                0.15,
                18,
                9
              ]
            }
          },
          {
            "id": "boundaries_country",
            "type": "line",
            "source": "protomaps",
            "source-layer": "boundaries",
            "filter": [
              "<=",
              "pmap:min_admin_level",
              2
            ],
            "paint": {
              "line-color": "#adadad",
              "line-width": 1,
              "line-dasharray": [
                3,
                2
              ]
            }
          },
          {
            "id": "boundaries",
            "type": "line",
            "source": "protomaps",
            "source-layer": "boundaries",
            "filter": [
              ">",
              "pmap:min_admin_level",
              2
            ],
            "paint": {
              "line-color": "#adadad",
              "line-width": 0.5,
              "line-dasharray": [
                3,
                2
              ]
            }
          },
          {
            "id": "roads_bridges_other_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "in",
                "pmap:kind",
                "other",
                "path"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                14,
                0,
                20,
                7
              ]
            }
          },
          {
            "id": "roads_bridges_link_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                13.5,
                1,
                18,
                11
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                12,
                0,
                12.5,
                1.5
              ]
            }
          },
          {
            "id": "roads_bridges_minor_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "minor_road"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                11,
                0,
                12.5,
                0.5,
                15,
                2,
                18,
                11
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                13.5,
                0.8
              ]
            }
          },
          {
            "id": "roads_bridges_medium_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "medium_road"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                12,
                1.2,
                15,
                3,
                18,
                13
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                10,
                0,
                10.5,
                1.5
              ]
            }
          },
          {
            "id": "roads_bridges_major_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "major_road"
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                7.5,
                0.5,
                18,
                10
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                9,
                0,
                9.5,
                1.5
              ]
            }
          },
          {
            "id": "roads_bridges_other",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "in",
                "pmap:kind",
                "other",
                "path"
              ]
            ],
            "paint": {
              "line-color": "#ebebeb",
              "line-dasharray": [
                2,
                1
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                14,
                0,
                20,
                7
              ]
            }
          },
          {
            "id": "roads_bridges_minor",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "minor_road"
              ]
            ],
            "paint": {
              "line-color": "#ffffff",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                11,
                0,
                12.5,
                0.5,
                15,
                2,
                18,
                11
              ]
            }
          },
          {
            "id": "roads_bridges_link",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#ffffff",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                13,
                0,
                13.5,
                1,
                18,
                11
              ]
            }
          },
          {
            "id": "roads_bridges_medium",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "medium_road"
              ]
            ],
            "paint": {
              "line-color": "#f0eded",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                12,
                1.2,
                15,
                3,
                18,
                13
              ]
            }
          },
          {
            "id": "roads_bridges_major",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "major_road"
              ]
            ],
            "paint": {
              "line-color": "#f5f5f5",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                6,
                0,
                12,
                1.6,
                15,
                3,
                18,
                13
              ]
            }
          },
          {
            "id": "roads_bridges_highway_casing",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 12,
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "highway"
              ],
              [
                "!=",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#e0e0e0",
              "line-gap-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                3,
                0,
                3.5,
                0.5,
                18,
                15
              ],
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                7,
                0,
                7.5,
                1,
                20,
                15
              ]
            }
          },
          {
            "id": "roads_bridges_highway",
            "type": "line",
            "source": "protomaps",
            "source-layer": "roads",
            "filter": [
              "all",
              [
                ">",
                "pmap:level",
                0
              ],
              [
                "==",
                "pmap:kind",
                "highway"
              ],
              [
                "!=",
                "pmap:link",
                1
              ]
            ],
            "paint": {
              "line-color": "#ffffff",
              "line-width": [
                "interpolate",
                [
                  "exponential",
                  1.6
                ],
                [
                  "zoom"
                ],
                3,
                0,
                6,
                1.1,
                12,
                1.6,
                15,
                5,
                18,
                15
              ]
            }
          },
          {
            "id": "physical_line_waterway_label",
            "type": "symbol",
            "source": "protomaps",
            "source-layer": "physical_line",
            "minzoom": 13,
            "filter": [
              "all",
              [
                "in",
                "pmap:kind",
                "river",
                "stream"
              ]
            ],
            "layout": {
              "symbol-placement": "line",
              "text-font": [
                "Roboto Regular"
              ],
              "text-field": [
                "get",
                "name"
              ],
              "text-size": 12,
              "text-letter-spacing": 0.3
            },
            "paint": {
              "text-color": "#ffffff"
            }
          },
          {
            "id": "physical_point_peak",
            "type": "symbol",
            "source": "protomaps",
            "source-layer": "physical_point",
            "filter": [
              "any",
              [
                "==",
                "pmap:kind",
                "peak"
              ]
            ],
            "layout": {
              "text-font": [
                "Roboto Italic"
              ],
              "text-field": [
                "get",
                "name"
              ],
              "text-size": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                10,
                8,
                16,
                12
              ],
              "text-letter-spacing": 0.1,
              "text-max-width": 9
            },
            "paint": {
              "text-color": "#7e9aa0",
              "text-halo-width": 1.5
            }
          },
          {
            "id": "roads_labels_minor",
            "type": "symbol",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 15,
            "filter": [
              "any",
              [
                "in",
                "pmap:kind",
                "minor_road",
                "other",
                "path"
              ]
            ],
            "layout": {
              "symbol-sort-key": [
                "get",
                "pmap:min_zoom"
              ],
              "symbol-placement": "line",
              "text-font": [
                "Roboto Regular"
              ],
              "text-field": [
                "get",
                "name"
              ],
              "text-size": 12
            },
            "paint": {
              "text-color": "#91888b",
              "text-halo-color": "#ffffff",
              "text-halo-width": 2
            }
          },
          {
            "id": "physical_point_ocean",
            "type": "symbol",
            "source": "protomaps",
            "source-layer": "physical_point",
            "filter": [
              "any",
              [
                "in",
                "pmap:kind",
                "sea",
                "ocean",
                "lake",
                "water",
                "bay",
                "strait",
                "fjord"
              ]
            ],
            "layout": {
              "text-font": [
                "Roboto Medium"
              ],
              "text-field": [
                "get",
                "name"
              ],
              "text-size": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                3,
                10,
                10,
                12
              ],
              "text-letter-spacing": 0.1,
              "text-max-width": 9,
              "text-transform": "uppercase"
            },
            "paint": {
              "text-color": "#ffffff"
            }
          },
          {
            "id": "physical_point_lakes",
            "type": "symbol",
            "source": "protomaps",
            "source-layer": "physical_point",
            "filter": [
              "any",
              [
                "in",
                "pmap:kind",
                "lake",
                "water"
              ]
            ],
            "layout": {
              "text-font": [
                "Roboto Medium"
              ],
              "text-field": [
                "get",
                "name"
              ],
              "text-size": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                3,
                0,
                6,
                12,
                10,
                12
              ],
              "text-letter-spacing": 0.1,
              "text-max-width": 9
            },
            "paint": {
              "text-color": "#ffffff"
            }
          },
          {
            "id": "roads_labels_major",
            "type": "symbol",
            "source": "protomaps",
            "source-layer": "roads",
            "minzoom": 11,
            "filter": [
              "any",
              [
                "in",
                "pmap:kind",
                "highway",
                "major_road",
                "medium_road"
              ]
            ],
            "layout": {
              "symbol-sort-key": [
                "get",
                "pmap:min_zoom"
              ],
              "symbol-placement": "line",
              "text-font": [
                "Roboto Regular"
              ],
              "text-field": [
                "get",
                "name"
              ],
              "text-size": 12
            },
            "paint": {
              "text-color": "#938a8d",
              "text-halo-color": "#ffffff",
              "text-halo-width": 2
            }
          },
          {
            "id": "places_subplace",
            "type": "symbol",
            "source": "protomaps",
            "source-layer": "places",
            "filter": [
              "==",
              "pmap:kind",
              "neighbourhood"
            ],
            "layout": {
              "symbol-sort-key": [
                "get",
                "pmap:min_zoom"
              ],
              "text-field": "{name}",
              "text-font": [
                "Roboto Regular"
              ],
              "text-max-width": 7,
              "text-letter-spacing": 0.1,
              "text-padding": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                5,
                2,
                8,
                4,
                12,
                18,
                15,
                20
              ],
              "text-size": [
                "interpolate",
                [
                  "exponential",
                  1.2
                ],
                [
                  "zoom"
                ],
                11,
                8,
                14,
                14,
                18,
                24
              ],
              "text-transform": "uppercase"
            },
            "paint": {
              "text-color": "#8f8f8f",
              "text-halo-color": "#e0e0e0",
              "text-halo-width": 2
            }
          },
          {
            "id": "pois_important",
            "type": "symbol",
            "source": "protomaps",
            "source-layer": "pois",
            "filter": [
              "any",
              [
                "<",
                [
                  "get",
                  "pmap:min_zoom"
                ],
                13
              ]
            ],
            "layout": {
              "symbol-sort-key": [
                "get",
                "pmap:min_zoom"
              ],
              "text-font": [
                "Roboto Regular"
              ],
              "text-field": [
                "get",
                "name"
              ],
              "text-size": 11,
              "text-max-width": 9,
              "icon-padding": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                0,
                2,
                14,
                2,
                16,
                20,
                17,
                2,
                22,
                2
              ]
            },
            "paint": {
              "text-color": "#8f8f8f",
              "text-halo-color": "#e0e0e0",
              "text-halo-width": 1.5
            }
          },
          {
            "id": "places_locality_circle",
            "type": "circle",
            "source": "protomaps",
            "source-layer": "places",
            "filter": [
              "==",
              "pmap:kind",
              "locality"
            ],
            "paint": {
              "circle-radius": 2,
              "circle-stroke-width": 1.5,
              "circle-stroke-color": "#a3a3a3",
              "circle-color": "#ffffff",
              "circle-translate": [
                -6,
                0
              ]
            },
            "maxzoom": 8
          },
          {
            "id": "places_locality",
            "type": "symbol",
            "source": "protomaps",
            "source-layer": "places",
            "filter": [
              "==",
              "pmap:kind",
              "locality"
            ],
            "layout": {
              "text-field": "{name}",
              "text-font": [
                "case",
                [
                  "<=",
                  [
                    "get",
                    "pmap:min_zoom"
                  ],
                  5
                ],
                [
                  "literal",
                  [
                    "Roboto Medium"
                  ]
                ],
                [
                  "literal",
                  [
                    "Roboto Regular"
                  ]
                ]
              ],
              "text-padding": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                5,
                3,
                8,
                7,
                12,
                11
              ],
              "text-size": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                2,
                [
                  "case",
                  [
                    "<",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    13
                  ],
                  8,
                  [
                    ">=",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    13
                  ],
                  13,
                  0
                ],
                4,
                [
                  "case",
                  [
                    "<",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    13
                  ],
                  10,
                  [
                    ">=",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    13
                  ],
                  15,
                  0
                ],
                6,
                [
                  "case",
                  [
                    "<",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    12
                  ],
                  11,
                  [
                    ">=",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    12
                  ],
                  17,
                  0
                ],
                8,
                [
                  "case",
                  [
                    "<",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    11
                  ],
                  11,
                  [
                    ">=",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    11
                  ],
                  18,
                  0
                ],
                10,
                [
                  "case",
                  [
                    "<",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    9
                  ],
                  12,
                  [
                    ">=",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    9
                  ],
                  20,
                  0
                ],
                15,
                [
                  "case",
                  [
                    "<",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    8
                  ],
                  12,
                  [
                    ">=",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    8
                  ],
                  22,
                  0
                ]
              ],
              "icon-padding": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                0,
                2,
                8,
                4,
                10,
                8,
                12,
                6,
                22,
                2
              ],
              "text-anchor": [
                "step",
                [
                  "zoom"
                ],
                "left",
                8,
                "center"
              ],
              "text-radial-offset": 0.2
            },
            "paint": {
              "text-color": "#5c5c5c",
              "text-halo-color": "#e0e0e0",
              "text-halo-width": 1
            }
          },
          {
            "id": "places_region",
            "type": "symbol",
            "source": "protomaps",
            "source-layer": "places",
            "filter": [
              "==",
              "pmap:kind",
              "region"
            ],
            "layout": {
              "symbol-sort-key": [
                "get",
                "pmap:min_zoom"
              ],
              "text-field": [
                "step",
                [
                  "zoom"
                ],
                [
                  "get",
                  "name:short"
                ],
                5,
                [
                  "get",
                  "name"
                ]
              ],
              "text-font": [
                "Roboto Regular"
              ],
              "text-size": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                3,
                11,
                7,
                24
              ],
              "text-radial-offset": 0.2,
              "text-anchor": "center",
              "text-transform": "uppercase"
            },
            "paint": {
              "text-color": "#b3b3b3",
              "text-halo-color": "#e0e0e0",
              "text-halo-width": 2
            }
          },
          {
            "id": "places_country",
            "type": "symbol",
            "source": "protomaps",
            "source-layer": "places",
            "filter": [
              "==",
              "pmap:kind",
              "country"
            ],
            "layout": {
              "symbol-sort-key": [
                "get",
                "pmap:min_zoom"
              ],
              "text-field": "{name}",
              "text-font": [
                "Roboto Medium"
              ],
              "text-size": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                2,
                [
                  "case",
                  [
                    "<",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    10
                  ],
                  8,
                  [
                    ">=",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    10
                  ],
                  12,
                  0
                ],
                6,
                [
                  "case",
                  [
                    "<",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    8
                  ],
                  10,
                  [
                    ">=",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    8
                  ],
                  18,
                  0
                ],
                8,
                [
                  "case",
                  [
                    "<",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    7
                  ],
                  11,
                  [
                    ">=",
                    [
                      "get",
                      "pmap:population_rank"
                    ],
                    7
                  ],
                  20,
                  0
                ]
              ],
              "icon-padding": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                0,
                2,
                14,
                2,
                16,
                20,
                17,
                2,
                22,
                2
              ],
              "text-transform": "uppercase"
            },
            "paint": {
              "text-color": "#a3a3a3"
            }
          }
        ],
        "glyphs": "https://cdn.protomaps.com/fonts/pbf/{fontstack}/{range}.pbf"
      },
      center: [8.7118, 47.50343],
      zoom: 17
    })

    map.current = mapdata
    mapdata.on('load', () => {
      mapdata.addSource('booths', {
        'type': 'geojson',
        'data': {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "properties": {
                "name": "Eulachhalle"
              },
              "geometry": {
                "type": "Polygon",
                "coordinates": [[
                  [8.71229, 47.50303],
                  [8.71094, 47.50345],
                  [8.71128, 47.50391],
                  [8.71261, 47.50345],
                ]]
              }
            }
          ],
        }
      })
    })

    return () => {
      maplibregl.removeProtocol("pmtiles");
    }
  }, []);

  const [enabled, setEnabled] = useState(false)

  const addLayer = () => {
    map.current.addLayer({
      'id': 'booths',
      'type': 'fill',
      'source': 'booths',
      'paint': {
        'fill-color': 'rgba(200, 100, 240, 0.4)',
        'fill-outline-color': 'rgba(200, 100, 240, 1)'
      }
    })
    map.current.on('click', 'booths', (e) => {
      new maplibregl.Popup().setLngLat(e.lngLat).setHTML(e.features[0].properties.name).addTo(map.current).addClassName("text-black")
    })
  }
  const removeLayer = () => {
    map.current.removeLayer('booths')
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
      <div ref={container} className="w-full h-[600px] rounded-xl overflow-hidden" />

      <div className="mt-8 flex">
        <Switch
          checked={enabled}
          onChange={() => {
            if (enabled) {
              setEnabled(false)
              removeLayer()
            } else {
              setEnabled(true)
              addLayer()
            }
          }}
          className={classNames(
            enabled ? 'bg-sn-yellow' : 'bg-sn-black-lightest',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sn-yellow focus:ring-offset-2'
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-gray-400 shadow ring-0 transition duration-200 ease-in-out'
            )}
          />
        </Switch>
        <p className='ml-4'>toggle</p>
      </div>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const mapBlockSchema: Template = {
  name: "map",
  label: "Map",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
  ],
};

