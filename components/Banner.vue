<template>
  <div class="relative">
    <div class="banner ">
      <div class="main-logo flex items-center justify-center">
        <div>
          <img src="~/assets/image/logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.banner {
  height: calc(100vh - 150px);
  //   background-image: url("assets/image/landing-img.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  // background-image: linear-gradient(
  //     to bottom,
  //     rgba(5, 119, 119, 0.85),
  //     rgba(165, 53, 137, 0)
  //   ),
  //   url("assets/image/welcome-img2.jpeg");
  background-image: linear-gradient(
      to bottom,
      rgba(5, 87, 119, 0.85),
      rgba(165, 53, 137, 0)
    ),
    url("assets/image/welcome-img2.jpeg");
}
.main-logo {
  width: 100%;
  text-align: center;
  width: auto;
  height: calc(100vh - 100px);
  img {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
