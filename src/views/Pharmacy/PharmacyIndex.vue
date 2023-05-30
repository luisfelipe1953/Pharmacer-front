<script setup>
import usePharmacy from "../../composables/index.js";
import { onMounted } from "vue";

const { getPharmacies, pharmacies, destroyPharmacy } = usePharmacy();

onMounted(() => getPharmacies());
</script>

<template>
  <div class="mt-10 max-w-[900px] mx-auto min-h-screen">
    <div class="flex justify-end m-2 p-2">
      <RouterLink
        :to="{ name: 'PharmacyCreate' }"
        class="px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white"
      >
        New pharmacy
      </RouterLink>
    </div>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">pharmacies</th>
            <th scope="col" class="px-6 py-3">lat</th>
            <th scope="col" class="px-6 py-3">lon</th>
            <th scope="col" class="px-6 py-3">address</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="pharmacies in pharmacies"
            :key="pharmacies.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td class="px-6 py-4">{{ pharmacies.name }}</td>
            <td class="px-6 py-4">{{ pharmacies.latitude }}</td>
            <td class="px-6 py-4">{{ pharmacies.longitude }}</td>
           <td class="px-6 py-4">{{ pharmacies.address }}</td>
            <td class="px-6 py-4">
              <RouterLink
                :to="{ name: 'PharmacyEdit', params: { id: pharmacies.id } }"
                class="px-4 py-2 m-4 bg-green-600 hover:bg-green-800 rounded text-white"
              >
              Edit
              </RouterLink>
              <button
                type="submit"
                class="px-4 py-2 m-4 bg-red-600 hover:bg-red-800 rounded text-white"
                @click="destroyPharmacy(pharmacies.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
