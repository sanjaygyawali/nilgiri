<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="w-full min-h-[600px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
      >
        <iframe
          width="100%"
          height="100%"
          class="absolute inset-0"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.6261538973336!2d83.24661534986959!3d28.0664373161427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996413a292a1d0b%3A0x611afe6ee8a9d57d!2zSE9URUwgTklMR0lSSSBbIOCkueCli-Ckn-CksiDgpKjgpL_gpLLgpJfgpL_gpLDgpYAgXQ!5e0!3m2!1sen!2snp!4v1622987159009!5m2!1sen!2snp"
          style=""
        ></iframe>
        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2
              class="title-font font-semibold text-gray-900 tracking-widest text-xs"
            >
              ADDRESS
            </h2>
            <p class="mt-1">
              {{ contactUs.address }}
            </p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2
              class="title-font font-semibold text-gray-900 tracking-widest text-xs"
            >
              EMAIL
            </h2>
            <a
              :href="`mailto:${contactUs.email}`"
              class="text-blue-500 leading-relaxed"
              >{{ contactUs.email }}</a
            >
          </div>
          <div class="px-6 mt-4 lg:mt-0">
            <h2
              class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
            >
              PHONE
            </h2>
            <a :href="`tel:${contactUs.landline.cta}`"
              >📞 {{ contactUs.landline.display }}</a
            >
            <br />
            <a :href="`tel:${contactUs.mobilePhone.cta}`"
              >📞 {{ contactUs.mobilePhone.display }}</a
            >
          </div>
        </div>
      </div>
      <div
        v-if="false"
        class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      >
        <h1
          class="mb-2 text-xl font-bold tracking-tighter text-black md:text-4xl title-font"
        >
          Contact Us
        </h1>
        <div class="flex my-4">
          <div class="w-16 h-1 rounded-full bg-accent inline-flex"></div>
        </div>
        <p class="leading-relaxed mb-5 text-gray-600">
          Place your query here, we are always keen to assist you with your all
          queries.
        </p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
        >
          SEND
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { contactUs } from "~/store/contents";
</script>
