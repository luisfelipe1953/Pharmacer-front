<script setup>
import { onMounted, defineProps } from "vue";
import usePharmacy from "../../composables/index.js";

const { getPharmacy, pharmacy, updatePharmacy, errors } = usePharmacy();

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

onMounted(() => getPharmacy(props.id));
</script>

<template>
  <div class="mt-12">
    <form
      class="max-w-md mx-auto p-4 bg-white shadow-black rounded-md container-md mt-40"
      @submit.prevent="updatePharmacy($route.params.id)"
    >
      <div class="space-y-6">
        <h1>Actualizar Farmacia</h1>
        <RouterLink
          :to="{ name: 'PharmacyIndex' }"
          class="sm:ml-80 ml-40 px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white shadow-black"
        >
          volver
        </RouterLink>
          <div v-if="errors.data">
          <span class="alerta-error">{{ errors.data }}</span>
        </div>
        <div class="mb-6">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="pharmacy.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name"
          />
          <div v-if="errors.name">
            <span class="text-base text-red-400">{{ errors.name[0] }}</span>
          </div>
        </div>

        <div class="mb-6">
          <label
            for="adress"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >address</label
          >
          <input
            type="text"
            id="address"
            v-model="pharmacy.address"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="address"
          />
          <div v-if="errors.address">
            <span class="text-base text-red-400">{{ errors.address[0] }}</span>
          </div>
        </div>
        <div class="mb-6">
          <label
            for="latitude"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >latitud</label
          >
          <input
            type="num"
            id="latitude"
            v-model="pharmacy.latitude"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="latitud"
          />
          <div v-if="errors.latitude">
            <span class="text-base text-red-400">{{ errors.latitude[0] }}</span>
          </div>
        </div>
        <div class="mb-6">
          <label
            for="longitude"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >longitude</label
          >
          <input
            type="num"
            id="longitude"
            v-model="pharmacy.longitude"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="longitude"
          />
          <div v-if="errors.longitude">
            <span class="text-base text-red-400">{{
              errors.longitude[0]
            }}</span>
          </div>
        </div>

        <button
          type="submit"
          class="px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white shadow-black"
        >
          actualizar
        </button>
      </div>
    </form>
  </div>
</template>
