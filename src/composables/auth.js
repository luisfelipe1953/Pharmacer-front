import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

axios.defaults.baseURL = "https://pharmacy-map.fly.dev/api/";

export default function useAuth() {
  const errors = ref({});
  const router = useRouter();
  const store = useStore();

  const login = async (data) => {
    try {
      const response = await axios.post("login", data, {
        headers: { "Content-Type": "application/json" },
      });

      // Obtén el token de acceso de la respuesta
      const accessToken = response.data.accessToken;

      // Establece el encabezado "Authorization" en las solicitudes futuras
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      localStorage.setItem("token", accessToken);

      await store.dispatch("setAuth", true);

      await router.push("/pharmacy");
    } catch (error) {
      await store.dispatch("setAuth", false);
      if (error.response.status === 422 || error.response.status === 401) {
        errors.value = error.response.data;
      }
    }
  };

  const register = async (data) => {
    try {
      const response = await axios.post("register", data, {
        headers: { "Content-Type": "application/json" },
      });

      await router.push("/login");
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data;
      }
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post("logout", {
        headers: { "Content-Type": "application/json" },
      });

      localStorage.removeItem("token");

      await store.dispatch("setAuth", false);

      await router.push("/");
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data;
      }
    }
  };

  return {
    login,
    register,
    logout,
    errors,
  };
}
