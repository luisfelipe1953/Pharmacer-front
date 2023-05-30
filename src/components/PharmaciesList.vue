<template>
  <div>
    <div class="bg-gray-50 text-black fixed top-0 right-0 z-20 sm:w-[350px] w-[200px] shadow-xl">
      <div class="flex justify-center w-24 my-20 mx-32">
        <img src="../../farmacias.png" alt="logo" />
        <h1 class="text-center mt-10 text-2xl underline decoration-sky-500">FARMACIAS</h1>
      </div>
      <div class="overflow-y-auto max-h-[720px]">
        <div v-for="pharmacy in pharmacies" :key="pharmacy.id" class="relative animation animation-hover p-5" @click="selectPharmacy(pharmacy)">
          <h1>{{ pharmacy.name }}</h1>
          <p>{{ pharmacy.address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usePharmacy from "../composables/index.js";
import { ref, onMounted } from "vue";

export default {
  emits: ['pharmacy-selected'],
  setup(_, { emit }) {
    const { pharmacies, getPharmacies } = usePharmacy();
    const pharmacyData = ref(null);

    const selectPharmacy = (pharmacy) => {
      pharmacyData.value = pharmacy;
      emit('pharmacy-selected', pharmacy);
    };

    onMounted(() => {
      getPharmacies();
    });

    return {
      pharmacies,
      selectPharmacy
    };
  }
};
</script>

<style scoped>
.animation::before {
  @apply scale-x-0 origin-bottom-right ;
}

.animation-hover:hover::before {
  @apply scale-x-100 origin-bottom-left;
}

.animation::before {
  @apply content-[''] absolute inset-0 bg-green-600 -z-10 transition-transform duration-300 ease-out;
}
</style>