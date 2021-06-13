<template>
  <section class="text-gray-600 body-font amenities ">
    <div class="container px-5 py-10 mx-auto">
      <div class="text-center mb-20">
        <h2
          class="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font"
        >
          Let Us Serve You
        </h2>

        <h1
          class="mb-4 text-2xl font-bold tracking-tighter text-black md:text-5xl title-font"
        >
          Nilgiri Amenities
        </h1>
        <div class="flex my-4 justify-center">
          <div class="w-16 h-1 rounded-full bg-accent inline-flex"></div>
        </div>
        <p
          class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"
        >
          We try to make your stay as comfortable as possible.
        </p>
      </div>
      <div
        class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
      >
        <div
          class="p-4 md:w-1/3 flex flex-col text-center items-center"
          v-for="amenity in ameneties"
          :key="amenity.id"
        >
          <div
            class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path :d="amenity.icon"></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              {{ amenity.name }}
            </h2>
            <p class="leading-relaxed text-base">
              {{ amenity.description }}
            </p>
          </div>
        </div>
      </div>
      <!-- <button
        class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
      >
        Button
      </button> -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ameneties: [
        {
          id: 1,
          name: "Hot Water",
          description: "24 Hrs Service",
          icon: "M22 12h-4l-3 9L9 3l-3 9H2"
        },
        {
          id: 2,
          name: "Free Wifi",
          description: "24 Hrs Service",
          icon: "M22 12h-4l-3 9L9 3l-3 9H2"
        },
        {
          id: 3,
          name: "Single/Double Bed",
          description: "24 Hrs Service",
          icon: "M22 12h-4l-3 9L9 3l-3 9H2"
        },
        {
          id: 4,
          name: "TV with Cable",
          description: "24 Hrs Service",
          icon: "M22 12h-4l-3 9L9 3l-3 9H2"
        },
        {
          id: 5,
          name: "Conference Hall",
          description: "24 Hrs Service",
          icon: "M22 12h-4l-3 9L9 3l-3 9H2"
        },
        {
          id: 6,
          name: "Parking Hall",
          description: "24 Hrs Service",
          icon: "M22 12h-4l-3 9L9 3l-3 9H2"
        }
      ]
    };
  }
};
</script>
<style scoped>
.amenities {
  background-color: #fbfbfb;
  background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%231d96cc' fill-opacity='0.10' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>
