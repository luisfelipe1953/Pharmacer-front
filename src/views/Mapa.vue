<template>
  <div>
    <div
      class="window hover:cursor-pointer"
      @mousedown="startDrag"
      @mousemove="drag"
      @mouseup="stopDrag"
      @touchstart="startDrag"
      @touchend="stopDrag"
      @touchmove="drag"
    >
      <form
        class="space-y-6 max-w-md mx-auto p-4 bg-white shadow-black rounded-md container-md absolute z-30 right-0"
        @submit.prevent="getNeartPharmacies(form)"
      >
        <h1 class="text-center">Farmacias Cercanas</h1>
        <div v-if="errors.data">
          <span class="alerta-error">{{ errors.data }}</span>
        </div>
        <div class="mb-6">
          <label
            for="latitude"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >latitude</label
          >
          <input
            type="text"
            id="latitude"
            v-model="form.latitude"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="latitude"
          />
        </div>
        <div class="mb-6">
          <label
            for="longitude"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >longitude</label
          >
          <input
            type="text"
            id="longitude"
            v-model="form.longitude"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="longitude"
          />
        </div>
        <button
          type="submit"
          class="px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white shadow-black"
        >
          buscar
        </button>
      </form>
    </div>

    <l-map
      v-if="!loading"
      :markers="markerpharmacy"
      :pharmacies="pharmacies"
    ></l-map>

    <PharmaciesList @pharmacy-selected="handlePharmacySelected" />
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import axios from "axios";
import usePharmacy from "../composables/index.js";

// recibo las farmacias mas sercanas
const { getNeartPharmacies, pharmacies, errors } = usePharmacy();

const markerpharmacy = ref([]);
const loading = ref(true);

const form = reactive({
  latitude: "",
  longitude: "",
});

// muestro las farmacias con marcadores
onMounted(() => {
  markerPharmacy();
});

const markerPharmacy = async () => {
  try {
    loading.value = true;
    const { data } = await axios.get("https://sea-turtle-app-8css4.ondigitalocean.app/api/pharmacies");
    markerpharmacy.value = data.pharmacies.map((pharmacy) => {
      return {
        id: pharmacy.id,
        ...pharmacy,
      };
    });

    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
};

// logica de la ventana flotante
let isDragging = false;

function startDrag(event) {
  if (event.button === 0) {
    // Verificar que el botón presionado sea el botón izquierdo del mouse
    isDragging = true;
    const windowEl = event.currentTarget;
    const offsetX = event.clientX - windowEl.offsetLeft;
    const offsetY = event.clientY - windowEl.offsetTop;

    // Calcular la posición relativa al área de arrastre dentro de la ventana
    windowEl.setAttribute("data-offset-x", offsetX);
    windowEl.setAttribute("data-offset-y", offsetY);
  }
}

function stopDrag() {
  isDragging = false;
}

function drag(event) {
  if (isDragging) {
    const windowEl = event.currentTarget;
    const offsetX = parseInt(windowEl.getAttribute("data-offset-x"), 10);
    const offsetY = parseInt(windowEl.getAttribute("data-offset-y"), 10);
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    windowEl.style.left = x + "px";
    windowEl.style.top = y + "px";
  }
}
// agrego la info de las farmacias alas cuales quiero ver donde estan ubicadas
const handlePharmacySelected = (pharmacy) => {
  pharmacies.value = [pharmacy];
};
</script>

<script>
import { defineComponent } from "vue";
import LMap from "../components/LMap.vue";
import PharmaciesList from "../components/Pharmacieslist.vue";

export default defineComponent({
  components: {
    LMap,
    PharmaciesList,
  },
});
</script>

<style scoped>
.window {
  @apply absolute sm:w-80 w-60 sm:h-52 h-10 sm:right-[50rem] right-40 p-5 border-4 border-gray-200;
}
</style>