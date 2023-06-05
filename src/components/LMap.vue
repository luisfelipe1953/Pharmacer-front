<template>
  <div>
    <div
      id="mapContainer"
      class="fixed w-screen h-screen sm:h-[calc(100vw-50px)]"
    ></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onBeforeMount, onBeforeUpdate } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default defineComponent({
  name: "LMap",
  props: {
    markers: {
      type: Array,
      required: false,
      default: () => [],
    },
    pharmacies: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  setup(props) {
    let map = null;
    let marker = null;

    onMounted(() => {
      createMapLayer();
    });

    onBeforeMount(() => {
      if (map) {
        map.remove();
      }
    });

    onBeforeUpdate(() => {
      if (props.pharmacies) {
        animateToLocation();
      }
    });

    const createMapLayer = () => {
      const lat = 6.230833;
      const long = -75.590553;
      const zoom = 8;

      map = L.map("mapContainer").setView([lat, long], zoom);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      if (props.markers.length) {
        setMarkers();
      }
    };

    const setMarkers = () => {
      props.markers.forEach((marker) => {
        const customIcon = L.icon({
          iconUrl: "/pin.png", // Ruta de la imagen del ícono personalizado
          iconSize: [32, 32], // Tamaño del ícono [ancho, alto]
          iconAnchor: [16, 32], // Punto de anclaje del ícono [posiciónX, posiciónY]
        });

        L.marker([marker.latitude, marker.longitude], {
          icon: customIcon,
        })
          .addTo(map)
          .bindPopup(marker.name);
      });
    };

    const animateToLocation = () => {
      props.pharmacies.forEach((pharmacy) => {
        setTimeout(() => {
          const target = L.latLng(pharmacy.latitude, pharmacy.longitude);

          const customIcon = L.icon({
            iconUrl: "/pin-farmacia.png", // Ruta de la imagen del ícono personalizado
            iconSize: [32, 32], // Tamaño del ícono [ancho, alto]
            iconAnchor: [16, 32], // Punto de anclaje del ícono [posiciónX, posiciónY]
          });

          // Eliminar el marcador anterior si existe
          if (marker) {
            map.removeLayer(marker);
          }

          marker = L.marker(target, { icon: customIcon })
            .addTo(map)
            .bindPopup(pharmacy.name);

          map.flyTo(target, 8, {
            duration: 1,
          });
        }, 1000 * pharmacy.index); // Retrasar cada animación para que se produzcan de forma secuencial
      });
    };
  },
});
</script>
<style scoped>
</style>