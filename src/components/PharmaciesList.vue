<template>
  <div>
    <div class="bg-gray-50 text-black fixed top-0 right-0 z-20 sm:w-[350px] w-[120px] shadow-black rounded-md">
      <div class="sm:flex justify-center block w-24 my-5 mx-5 sm:my-20 sm:mx-32">
        <img src="../assets/img/farmacias.png" alt="logo" />
        <h1 class="text-center sm:mt-10 sm:text-2xl text-sm sm:ml-5 underline decoration-sky-500">FARMACIAS</h1>
      </div>
      <div class="overflow-y-auto max-h-[740px] sm:max-h-[calc(100vh-200px)]">
        <div v-for="pharmacy in pharmacies" :key="pharmacy.id" class="relative animation animation-hover p-2 sm:p-5 hover:shadow-black" @click="selectPharmacy(pharmacy)">
          <h1 class="text-xs sm:text-base">{{ pharmacy.name }}</h1>
          <p class="text-xs sm:text-sm">{{ pharmacy.address }}</p>
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
  @apply content-[''] absolute inset-0 bg-green-600 -z-10 transition-transform duration-300 ease-out ;
}
</style>