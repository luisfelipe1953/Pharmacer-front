<template>
  <div>
    <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
      <div class="flex justify-end">
        <button class="p-3 mr-0 sm:mr-3" @click="toggleCollapsed">
          <font-awesome-icon
            icon="fa-solid fa-bars"
            size="2x"
            class="text-black hover:text-green-600"
          />
        </button>
      </div>
      <a  href="/" class="flex justify-center">
        <img  :class="[collapsed ? 'w-12' : 'w-40']" src="../../farmacia.png" alt="logo">
      </a>
      <div>
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex justify-center p-3 relative animation animation-hover"
        >
          <div
            class="flex sm:flex-none flex-1 items-center justify-center w-[80px]"
          >
            <font-awesome-icon :icon="['fa-solid', link.icon]" size="2x" />
          </div>
          <a
            class="flex p-3 relative justify-center items-end w-[80px] text-base sm:text-xl"
            v-if="!collapsed"
          >
            {{ link.text }}
          </a>
        </RouterLink>
        <div
          v-if="!auth"
          :class="[
              [collapsed ? 'sm:mt-[530px] mt-[480px]' : 'sm:mt-[530px] mt-[480px]'],
            'justify-center',
            { block: collapsed, flex: !collapsed },
          ]"
        >
          <RouterLink
            class="flex justify-center p-3 relative animation animation-hover"
            to="/login"
          >
            <div
              class="flex sm:flex-none flex-1 justify-center items-center sm:w-[80px] w-[40px]"
            >
              <font-awesome-icon :icon="['fa-solid', 'fa-lock']" size="2x" />
            </div>
            <a
              class="flex px-1 py-3 text-center relative justify-center text-xs sm:text-xl"
              v-if="!collapsed"
            >
              Login
            </a>
          </RouterLink>
          <RouterLink
            class="flex justify-center px-2 py-3 relative items-center animation animation-hover"
            to="/register"
          >
            <div class="flex sm:flex-none flex-1 justify-center sm:w-[80px] w-[40px]">
              <font-awesome-icon :icon="['fa-solid', 'fa-user']" size="2x" />
            </div>
            <a
              class="flex p-2 relative justify-center text-xs sm:text-xl"
              v-if="!collapsed"
            >
              Register
            </a>
          </RouterLink>
        </div>
        <div v-else>
          <RouterLink
            class="flex justify-center p-3 relative animation animation-hover"
            to="/pharmacy"
          >
            <div class="flex sm:flex-none flex-1 justify-center items-center w-[80px]">
              <font-awesome-icon
                :icon="['fa-solid', 'fa-location-dot']"
                size="2x"
              />
            </div>
            <a
              class="flex p-3 relative justify-center items-end w-[80px] text-base sm:text-xl"
              v-if="!collapsed"
            >
              Agregar Farmacia
            </a>
          </RouterLink>

          <div
            :class="[collapsed ? 'sm:mt-[642px] mt-[550px]' : 'sm:mt-[422px] mt-[390px]']"  class=" flex justify-center p-3 relative animation animation-hover"
          >
            <div class="flex sm:flex-none flex-1 justify-center items-center w-[80px]">
              <font-awesome-icon
                :icon="['fa-solid', 'right-from-bracket']"
                size="2x"
              />
            </div>
            <a
              v-if="!collapsed"
              class="flex p-3 relative justify-center items-end w-[80px] text-base sm:text-xl"
              @click="logout"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
import useAuth from "../composables/auth.js";

export default {
  setup() {
    const store = useStore();
    const collapsed = ref(true);
    const { logout } = useAuth();

    const links = [
      { to: "/", text: "Inicio", icon: "fa-house" },
      { to: "/mapa", text: "Mapa", icon: "fa-map" },
    ];

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };

    const auth = computed(() => store.state.authenticated);

    return {
      auth,
      logout,
      collapsed,
      links,
      toggleCollapsed,
    };
  },
};
</script>

<style scoped>
.menu {
  @apply bg-gray-50 text-black h-[120rem] transition-[width] ease-in-out duration-300 fixed top-0 left-0 z-20;
}

.collapsed {
  @apply sm:w-[80px] w-[60px];
}

.expanded {
  @apply sm:w-[350px] w-[200px];
}
.animation::before {
  @apply scale-x-0 origin-bottom-right;
}

.animation-hover:hover::before {
  @apply scale-x-100 origin-bottom-left;
}

.animation::before {
  @apply content-[''] absolute inset-0 bg-green-600 -z-10 transition-transform duration-300 ease-out;
}
</style>