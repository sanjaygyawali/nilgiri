<template>
  <div class="about-us py-10">
    <section class="text-blueGray-700">
      <div
        class="container flex flex-col items-center py-16 mx-auto md:flex-row lg:px-8"
      >
        <div
          class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 md:mb-0"
        >
          <h2
            class="mb-2 text-xs font-semibold tracking-widest text-black uppercase title-font"
          >
            Get To Know More About Us.
          </h2>
          <div class="flex my-2 justify-center">
            <div class="w-16 h-1 rounded-full bg-accent inline-flex"></div>
          </div>
          <h1
            class="mb-8 text-2xl font-bold tracking-tighter text-black md:text-5xl title-font font-title"
          >
            About Hotel Nilgiri
          </h1>
          <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600">
            Welcome to Nilgiri Hotel and Party Palace – the first modern stay
            facility in Tamghas. Whether you’re here for business, celebrating
            life’s milestones, or exploring the beauty of Resunga and Arjun
            Hills, we provide unparalleled comfort and service. With amenities
            like free Wi-Fi, hot water, and an on-site restaurant, your stay is
            our priority. Host your next big event with us – catering for up to
            700 guests with exceptional cuisine and service.
          </p>

          <!-- <div class="flex flex-col justify-center lg:flex-row">
            <button
              class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 uppercase ease-in-out transform bg-primary rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
            >
              Action
            </button>
            <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
              It will take you to candy shop. <br class="hidden lg:block" />
              <a
                href="#"
                class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black "
                title="read more"
              >
                Read more about it »
              </a>
            </p>
          </div> -->
        </div>
        <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
          <nuxt-img
            class="object-cover object-center rounded-lg"
            alt="hero"
            src="/images/gallery/building-2.jpg"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped></style>
