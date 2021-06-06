<template>
  <div class="about-us py-16">
    <div class="grid grid-cols-2 justify-between items-center">
      <div class="abt-content">
        <div class="section-title"><span> About Nilgiri</span></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div class="abt-img flex items-center pl-20">
        <img
          class="float-right w-full overflow-hidden"
          src="~/assets/image/about-3.jpeg"
          alt=""
        />
        <div class="abt-img-holder"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.about-us {
  min-height: 600px;
}
.abt-img {
  img {
    z-index: 99;
  }
}
.abt-img-holder {
  background-color: #3598dc;
  height: 400px;
  width: 20%;
  position: absolute;
  right: 0;
}
</style>
