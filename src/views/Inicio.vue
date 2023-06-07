<script>
// export default {
//   methods: {
//     getLocation() {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(this.showPosition);
//       } else {
//         console.log("Geolocation is not supported by this browser.");
//       }
//     },
//     showPosition(position) {
//       console.log("Latitude: " + position.coords.latitude);
//       console.log("Longitude: " + position.coords.longitude);
//       // Aquí puedes enviar la ubicación a tu servidor usando Axios o fetch
//     },
//   },
// };
</script>

<template>
  <div>
    <div class="min-h-[600px]">
      <img
        src="../assets/img/header.jpg"
        alt="header"
        class="object-cover w-full absolute h-[600px] z-0"
      />
      <router-link
        to="mapa"
        class="absolute sm:right-[95rem] sm:top-1/3 right-[20rem] top-[30rem]"
      >
        <h1
          class="sm:text-8xl text-5xl absolute text-white hover:text-green-600"
        >
          Pharmacer -//>
          <font-awesome-icon :icon="['fa-solid', 'fa-map']" size="1x" />
        </h1>
      </router-link>
    </div>
    <div class="max-w-6xl mx-auto mt-10">
      <h1 class="text-xl my-20 sm:ml-0 ml-20">
        Hola bienvenido a la farmacia pharmacer
      </h1>
      <p class="sm:ml-0 ml-20 my-10">
        -busca tu farmacia mas sercana en el mapa, o mira donde estan ubicadas
        todas las farmacias de pharmacer
      </p>

      <h1 class="sm:ml-0 ml-20 my-10">
        -desea reclamar sus medicamentos? si es asi dele al boton buscar
        farmacia mas sercana
      </h1>

      <!-- <button class="mt-20 px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white" @click="getLocation">buscar farmacias</button> -->
    </div>
  </div>
</template>