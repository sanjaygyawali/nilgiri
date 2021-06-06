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
  height: 500px;
  //   background-image: url("assets/image/landing-img.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
      to bottom,
      rgba(1, 30, 43, 0.95),
      rgba(165, 53, 137, 0)
    ),
    url("assets/image/landing-img.jpeg");
}
.main-logo {
  width: 100%;
  text-align: center;
  width: auto;
  height: calc(500px - 50px);
  img {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
