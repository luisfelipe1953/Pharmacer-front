<script setup>
import { reactive } from "vue";
import usePharmacy from "../../composables/index.js";

const { storePharmacy, errors } = usePharmacy();

const form = reactive({
  name: "",
  address: "",
  latitude: "",
  longitude: "",
});
</script>

<template>
  <div class="mt-12">
    <form
      class="max-w-md sm:mx-auto p-4 bg-white shadow-black rounded-md container-md mt-40"
      @submit.prevent="storePharmacy(form)"
    >
      <div class="space-y-6">
        <h1>Nueva Farmacia</h1>
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
            v-model="form.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name"
          />
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
            v-model="form.address"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="address"
          />
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
            v-model="form.latitude"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="latitud"
          />
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
            v-model="form.longitude"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="longitude"
          />
        </div>

        <button
          type="submit"
          class="px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white shadow-black"
        >
          guardar
        </button>
      </div>
    </form>
  </div>
</template>