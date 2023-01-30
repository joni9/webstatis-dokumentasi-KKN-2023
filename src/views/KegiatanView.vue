<template>

<!-- Container for demo purpose -->
<div class="container px-6 mx-auto my-10">

<!-- Section: Design Block -->
<section class="mb-6 text-center text-gray-800 md:text-left">

  <h2 class="mb-12 text-3xl font-bold text-center">Semua Kegiatan KKN</h2>

  <div class="flex flex-wrap mb-6">
    <div class="w-full px-3 mb-6 ml-auto grow-0 shrink-0 basis-auto md:w-3/12 md:mb-0">
      <div
        class="relative mb-6 overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg ripple"
        data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img src="/kegiatan/k1.jpg"
          class="w-full" alt="Louvre" />
        <RouterLink to="/kegiatan1">
          <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"
            style="background-color: rgba(251, 251, 251, 0.2)"></div>
        </RouterLink>
      </div>
    </div>

    <div class="w-full px-3 mb-6 mr-auto grow-0 shrink-0 basis-auto md:w-9/12 xl:w-7/12 md:mb-0">
      <h5 class="mb-2 text-lg font-bold text-green-600">Kegiatan bersih-bersih mushola</h5>
      <p class="mb-2 text-gray-500">
        <small>Published <u>22.01.2023</u> by
          <span class="text-gray-900">Joni Evendi</span></small>
      </p>
      <p class="text-gray-500">
        Kegiatan KKN yang dilakukan oleh mahasiswa Universitas Boyolali di Desa Lampar RW 4 Kecamatan Tamansari Kabupaten Boyolali adalah kegiatan membersihkan mushola...
      </p>
      <RouterLink to="/kegiatan1" data-mdb-ripple="true" data-mdb-ripple-color="light"
        class="inline-block mt-2 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
         role="button">Read more</RouterLink>
    </div>
  </div>

  <div class="flex flex-wrap mb-6">
    <div class="w-full px-3 mb-6 ml-auto grow-0 shrink-0 basis-auto md:w-3/12 md:mb-0">
      <div
        class="relative mb-6 overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg ripple"
        data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img src="/kegiatan/k2.png"
          class="w-full" alt="Louvre" />
        <RouterLink to="/kegiatan2">
          <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"
            style="background-color: rgba(251, 251, 251, 0.2)"></div>
        </RouterLink>
      </div>
    </div>

    <div class="w-full px-3 mb-6 mr-auto grow-0 shrink-0 basis-auto md:w-9/12 xl:w-7/12 md:mb-0">
      <h5 class="mb-3 text-lg font-bold text-green-600">Kegiatan senam minggu sore</h5>
        <p class="mb-2 text-gray-500">
          <small>Published <u>22.01.2023</u> by
            <span class="text-gray-900">Joni Evendi</span></small>
        </p>
        <p class="text-gray-500">
          Kegiatan senam minggu sore ini merupakan kegiatan rutin yang dilakukan oleh warga desa setiap hari minggu, dimulai pukul 16.00 WIB...
        </p>
        <RouterLink to="/kegiatan2" data-mdb-ripple="true" data-mdb-ripple-color="light"
        class="inline-block mt-2 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
         role="button">Read more</RouterLink>
    </div>
  </div>

  <div class="flex flex-wrap mb-6">
    <div class="w-full px-3 mb-6 ml-auto grow-0 shrink-0 basis-auto md:w-3/12 md:mb-0">
      <div
        class="relative mb-6 overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg ripple"
        data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img src="/kegiatan/k3.jpg"
          class="w-full" alt="Louvre" />
        <RouterLink to="/kegiatan3">
          <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"
            style="background-color: rgba(251, 251, 251, 0.2)"></div>
        </RouterLink>
      </div>
    </div>

    <div class="w-full px-3 mb-6 mr-auto grow-0 shrink-0 basis-auto md:w-9/12 xl:w-7/12 md:mb-0">
      <h5 class="mb-3 text-lg font-bold text-green-600">Sosialisasi Stop Bullying di SD N Dragan Lampar</h5>
      <p class="mb-2 text-gray-500">
        <small>Published <u>28.01.2023</u> by
          <span class="text-gray-900">Joni Evendi</span></small>
      </p>
      <p class="text-gray-500">
        Mahasiswa KKN kelompok 2 Universitas Boyolali melakukan sosialisasi tentang stop 
        bullying di SD N Dragan Lampar pada hari sabtu tanggal 28 Januari 2023... 
      </p>
      <RouterLink to="/kegiatan3" data-mdb-ripple="true" data-mdb-ripple-color="light"
        class="inline-block mt-2 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
         role="button">Read more</RouterLink>
    </div>
  </div>

</section>
<!-- Section: Design Block -->

</div>
<!-- Container for demo purpose -->

</template>