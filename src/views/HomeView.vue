<template>
<!-- Container for demo purpose -->
<div>

<!-- Section: Design Block -->
<section class="mb-10">

  <div class="relative overflow-hidden bg-no-repeat bg-cover" style="background-position: 50%; background-image: url('/home/h.jpg'); height: 500px;"></div>

  <div class="container px-6 mx-auto md:px-12 xl:px-32">
    <div class="text-center text-gray-800 ">
      <div class="block px-6 py-12 border rounded-lg shadow-lg md:py-16 md:px-12" style="margin-top: -170px; background: hsla(0, 0%, 100%, 0.7); backdrop-filter: blur(30px);">
        <h1 class="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">Kuliah Kerja Nyata (KKN) <br /><span class="text-green-600">Desa Lampar RW 4</span></h1>
      </div>
    </div>
  </div>
</section>
<!-- Section: Design Block -->

</div>
<!-- Container for demo purpose -->


  <section class="text-gray-600 body-font">
    <div class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
      <div class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 class="mb-4 text-3xl font-medium text-center text-gray-900 title-font sm:text-4xl">TEAM SOLID KKN KELOMPOK 2 
          <br class="hidden lg:inline-block">UNIVERSITAS BOYOLALI
        </h1>
        <p class="mb-8 leading-relaxed">Kelompok 2 terdiri dari 9 mahasiswa antara lain 1 dari jurusan teknik informatika, 
          1 dari peternakan, 3 dari hukum, 2 akuntansi dan 2 management</p>
      </div>
      <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <img class="object-cover object-center rounded shadow-lg" alt="hero" src="/home/h-0.jpg">
      </div>
    </div>
  </section>
  
  
  <!-- Container for demo purpose -->
  <div class="container px-6 mx-auto my-24">
  
  <!-- Section: Design Block -->
  <section class="mb-32 text-center text-gray-800 md:text-left">
  
    <h2 class="mb-12 text-3xl font-bold text-center">Kegiatan Unggulan KKN K-2 UBY</h2>
  
    <div class="grid items-center mb-12 md:grid-cols-2 gap-x-6 xl:gap-x-12">
      <div class="mb-6 md:mb-0">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg ripple"
          data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src="/kegiatan/k3.jpg"
            class="w-full" alt="Louvre" />
          <RouterLink to="/kegiatan3">
            <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"
              style="background-color: rgba(251, 251, 251, 0.2)"></div>
          </RouterLink>
        </div>
      </div>
  
      <div class="mb-6 md:mb-0">
        <h3 class="mb-3 text-2xl font-bold text-green-600">Sosialisasi Stop Bullying</h3>
        <p class="mb-6 text-gray-500">
          <small>Published <u>28.01.2023</u> by
            <span class="text-gray-900">Joni Evendi</span></small>
        </p>
        <p class="text-gray-500">
          Mahasiswa KKN kelompok 2 Universitas Boyolali melakukan sosialisasi tentang stop bullying di SD N Dragan Lampar...
        </p>
        <p>
          <RouterLink to="/kegiatan3" data-mdb-ripple="true" data-mdb-ripple-color="light"
        class="inline-block mt-2 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
         role="button">Read more</RouterLink>
        </p>
      </div>
    </div>
  
    <!-- <div class="grid items-center mb-12 md:grid-cols-2 gap-x-6 xl:gap-x-12">
      <div class="mb-6 md:mb-0 md:order-2">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg ripple"
          data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src="https://mdbootstrap.com/img/new/standard/city/032.jpg"
            class="w-full" alt="Louvre" />
          <a href="#!">
            <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"
              style="background-color: rgba(251, 251, 251, 0.2)"></div>
          </a>
        </div>
      </div>
  
      <div class="mb-6 md:mb-0 md:order-1">
        <h3 class="mb-3 text-2xl font-bold">Exhibition in Paris</h3>
        <p class="mb-6 text-gray-500">
          <small>Published <u>12.01.2022</u> by
            <a href="" class="text-gray-900">Halley Frank</a></small>
        </p>
        <p class="text-gray-500">
          Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
          orci, nec ornare metus semper sed. Integer volutpat ornare erat
          sit amet rutrum.
        </p>
      </div>
    </div>
  
    <div class="grid items-center mb-12 md:grid-cols-2 gap-x-6 xl:gap-x-12">
      <div class="mb-6 md:mb-0">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg ripple"
          data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src="https://mdbootstrap.com/img/new/standard/city/059.jpg"
            class="w-full" alt="Louvre" />
          <a href="#!">
            <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-0 hover:opacity-100"
              style="background-color: rgba(251, 251, 251, 0.2)"></div>
          </a>
        </div>
      </div>
  
      <div class="mb-6 md:mb-0">
        <h3 class="mb-3 text-2xl font-bold">Stock market boom</h3>
        <p class="mb-6 text-gray-500">
          <small>Published <u>10.01.2022</u> by
            <a href="" class="text-gray-900">Joe Svan</a></small>
        </p>
        <p class="text-gray-500">
          Curabitur tristique, mi a mollis sagittis, metus felis mattis
          arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
          massa volutpat feugiat. Donec.
        </p>
      </div>
    </div>
   -->
  </section>
  <!-- Section: Design Block -->
  
  </div>
  <!-- Container for demo purpose -->
  

  <div class="container px-6 mx-auto my-24">
  
  <!-- Section: Design Block -->
  <section class="mb-32 text-gray-800">
  
    <h2 class="mb-12 text-3xl font-bold text-center">Video KKN K-2 UBY</h2>
  
    <div class="grid gap-10 lg:grid-cols-2">
      <div class="relative w-full h-full" style="padding-top: 60%">
        <iframe
          class="absolute top-0 bottom-0 left-0 right-0 w-full h-full embed-responsive-item"
          src="https://www.youtube.com/embed/f8PfZqAhs_g"
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"
        ></iframe>
      </div>
      <div class="relative w-full h-full" style="padding-top: 60%">
        <iframe
          class="absolute top-0 bottom-0 left-0 right-0 w-full h-full embed-responsive-item"
          src="https://www.youtube.com/embed/aKJjouNib8o"
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"
        ></iframe>
      </div>
      <div class="relative w-full h-full" style="padding-top: 60%">
        <iframe
          class="absolute top-0 bottom-0 left-0 right-0 w-full h-full embed-responsive-item"
          src="https://www.youtube.com/embed/Zb81iAuFldg"
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"
        ></iframe>
      </div>
      <!-- <div class="relative w-full h-full" style="padding-top: 60%">
        <iframe
          class="absolute top-0 bottom-0 left-0 right-0 w-full h-full embed-responsive-item"
          src=""
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"
        ></iframe>
      </div> -->

    </div>
  </section>
  </div>



  
  
  <!-- Container for demo purpose -->
  <div class="container px-6 mx-auto my-24">
  
  <!-- Section: Design Block -->
  <section class="mb-32 text-gray-800">
  
    <h2 class="mb-12 text-3xl font-bold text-center">Documentasi K-2 UBY</h2>
  
    <div class="grid gap-6 lg:grid-cols-3">
      <div class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg"
        style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img src="/home/h1.jpg" class="w-full" />
          <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed"
            style="background-color: rgba(0, 0, 0, 0.4)">
            <div class="flex items-end justify-start h-full">
              <div class="m-6 text-white">
                <h5 class="mb-3 text-lg font-bold">Kunjungan ke RT/RW</h5>
                <p>
                  <small>Minta Ijin KKN di daerah RT RW setempat</small>
                </p>
              </div>
            </div>
          </div>
      </div>
  
      <div class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true"
        data-mdb-ripple-color="light">
        <img src="/home/h2.jpg" class="w-full" />
          <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed"
            style="background-color: rgba(0, 0, 0, 0.4)">
            <div class="flex items-end justify-start h-full">
              <div class="m-6 text-white">
                <h5 class="mb-3 text-lg font-bold">Kegiatan Bersih" Mushola</h5>
                <p>
                  <small>Gerakan membersihkan mushola</small>
                </p>
              </div>
            </div>
          </div>
      </div>
  
      <div class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true"
        data-mdb-ripple-color="light">
        <img src="/home/h3.jpg" class="w-full" />
          <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed"
            style="background-color: rgba(0, 0, 0, 0.4)">
            <div class="flex items-end justify-start h-full">
              <div class="m-6 text-white">
                <h5 class="mb-3 text-lg font-bold">Kegiatan Senam Sore</h5>
                <p>
                  <small>Gerakan senam Minggu sore sehat </small>
                </p>
              </div>
            </div>
          </div>
      </div>
  
      <div class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true"
        data-mdb-ripple-color="light">
        <img src="/kegiatan/k3.jpg" class="w-full" />
          <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed"
            style="background-color: rgba(0, 0, 0, 0.4)">
            <div class="flex items-end justify-start h-full">
              <div class="m-6 text-white">
                <h5 class="mb-3 text-lg font-bold">Sosialisasi Stop Bullying</h5>
                <p>
                  <small>Sosialisasi di SD N Dragan Lampar</small>
                </p>
              </div>
            </div>
          </div>
      </div>
  
      <!-- <div class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true"
        data-mdb-ripple-color="light">
        <img src="https://mdbootstrap.com/img/new/standard/nature/028.jpg" class="w-full" />
          <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed"
            style="background-color: rgba(0, 0, 0, 0.4)">
            <div class="flex items-end justify-start h-full">
              <div class="m-6 text-white">
                <h5 class="mb-3 text-lg font-bold">A hut in the mountains</h5>
                <p>
                  <small>Published <u>07.01.2022</u> by David Beak</small>
                </p>
              </div>
            </div>
          </div>
      </div>
  
      <div class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true"
        data-mdb-ripple-color="light">
        <img src="https://mdbootstrap.com/img/new/standard/nature/049.jpg" class="w-full" />
          <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed"
            style="background-color: rgba(0, 0, 0, 0.4)">
            <div class="flex items-end justify-start h-full">
              <div class="m-6 text-white">
                <h5 class="mb-3 text-lg font-bold">Beautiful waterfall</h5>
                <p>
                  <small>Published <u>04.01.2022</u> by Joe Svan</small>
                </p>
              </div>
            </div>
          </div>
      </div> -->

    </div>
  </section>
  <!-- Section: Design Block -->
  
  </div>
  <!-- Container for demo purpose -->
    </template>
    
