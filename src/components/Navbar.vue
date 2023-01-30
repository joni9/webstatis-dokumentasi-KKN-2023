<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

export default {
  name: 'Navbar',
  setup() {
    const activeNav = ref('home')

    function setActiveNav(name) {
      activeNav.value = name
    }

    return { activeNav, setActiveNav }
  }
}
</script>
<template>

    <nav class="flex justify-center py-4 text-gray-500 bg-white border-b-4 border-green-600 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light">
<div class="flex justify-center px-6 container-fluid">
<button class="px-5 py-2 text-gray-500 bg-transparent border-0 navbar-toggler hover:shadow-none hover:no-underline focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
  class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path fill="currentColor"
    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
  </path>
</svg>
</button>
<div class="items-center flex-grow collapse navbar-collapse" id="navbarSupportedContent">
<!-- Left links -->
<ul class="flex flex-col pl-0 mr-auto navbar-nav list-style-none">
  <li class="pr-2 mx-2 my-2 nav-item">
    <RouterLink to="/" :class="{ 'active': activeNav === 'home' }" @click="setActiveNav('home')">Home</RouterLink>
  </li>
  <li class="pr-2 mx-2 my-2 nav-item">
    <RouterLink to="/about" :class="{ 'active': activeNav === 'about' }" @click="setActiveNav('about')">About</RouterLink>
  </li>
  <li class="pr-2 mx-2 my-2 nav-item">
    <RouterLink to="/kegiatan" :class="{ 'active': activeNav === 'kegiatan' }" @click="setActiveNav('kegiatan')">Kegiatan</RouterLink>
  </li>
  <li class="pr-2 mx-2 my-2 nav-item">
    <RouterLink to="/documentasi" :class="{ 'active': activeNav === 'documentasi' }" @click="setActiveNav('documentasi')">Documentasi</RouterLink>
  </li>
</ul>
<!-- Left links -->
</div>
<!-- Collapsible wrapper -->
</div>
  </nav>
</template>
