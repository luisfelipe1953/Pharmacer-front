<template>
  <div class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
    {{ info }}
    <h1>{{ info.name }}</h1>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

export default {
  name: 'Home',
  setup() {
    const info = ref('');
    const store = useStore();

    onMounted(async () => {
      try {
        const response = await axios.get('me', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        info.value = await response.data;

      } catch (e) {
        info.value = 'You are not logged in!';
      }
    });

    return {
      info,
    };
  },
};
</script>