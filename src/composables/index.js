import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

export default function usePharmacy() {
  const pharmacy = ref([]);
  const pharmacies = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getPharmacies = async () => {
    const response = await axios.get("pharmacies");
    pharmacies.value = response.data.pharmacies;
  };

  const getPharmacy = async (id) => {
    const response = await axios.get("pharmacies/" + id);
    pharmacy.value = response.data.pharmacy;
  };

  const storePharmacy = async (data) => {
    try {
      const response = await axios.post("pharmacies", data);
      await router.push({ name: "PharmacyIndex" });
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 422) {
        errors.value = error.response;
      }
    }
  };

  const updatePharmacy = async (id) => {
    try {
      await axios.put("pharmacies/" + id, pharmacy.value);
      await router.push({ name: "PharmacyIndex" });
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 422) {
        errors.value = error.response.data;
      }
    }
  };

  const destroyPharmacy = async (id) => {
    if (!window.confirm("Are you sure you want to destroy")) {
      return;
    }
    await axios.delete("pharmacies/" + id);
    await getPharmacies();
  };

  const getNeartPharmacies = async (form) => {
    try {
      const response = await axios.post("pharmacies/nearby", form);
      pharmacies.value = response.data;
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response;
      }
    }
  };

  return {
    pharmacy,
    pharmacies,
    getPharmacy,
    getPharmacies,
    storePharmacy,
    updatePharmacy,
    destroyPharmacy,
    getNeartPharmacies,
    errors,
  };
}
