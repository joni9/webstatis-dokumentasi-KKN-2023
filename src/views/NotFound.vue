<template>
<!-- component -->
<main class="flex flex-col items-center justify-center w-full h-screen bg-white">
	<h1 class="font-extrabold tracking-widest text-blue-500 text-9xl">404</h1>
	<div class="bg-[#3d8b75] px-2 text-sm rounded rotate-12 absolute text-white">
		Page Not Found
	</div>
	<button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium text-[#3d8b75] group active:text-green-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#3d8b75] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span class="relative block px-8 py-3 bg-white border border-current">
          <router-link to="/">Go Home</router-link>
        </span>
      </a>
    </button>
</main>
</template>