<script setup>
import { reactive } from "vue";
import useAuth from "../../composables/auth.js";

const { login, errors } = useAuth();

const data = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <form
    @submit.prevent="login(data)"
    class="max-w-md mx-auto p-4 bg-white shadow-black rounded-md container-md mt-40"
  >
    <div class="space-y-6">
      <h1 class="">Porfavor Inicia Session</h1>

      <div v-if="errors.error">
        <span class="alerta-error">{{ errors.error }}</span>
      </div>
      <div v-if="errors.email">
        <span class="alerta-error">{{ errors.email[0] }}</span>
      </div>
      <div v-if="errors.password">
        <span class="alerta-error">{{ errors.password[0] }}</span>
      </div>
      <label
        for="name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Email</label
      >
      <input
        v-model="data.email"
        type="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Email"
      />
      <label
        for="name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Contraseña</label
      >
      <input
        v-model="data.password"
        type="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Password"
      />

      <button
        type="submit"
        class="px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white"
      >
        Iniciar Session
      </button>
    </div>
  </form>
</template>

