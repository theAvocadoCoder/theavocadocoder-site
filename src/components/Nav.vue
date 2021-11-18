<template>
  <div class="sticky top-0 h-1/5 bg-gray-800 text-white">
    <div class="flex p-4 items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <div class="flex gap-2">
          <img
            class="h-10"
            src="@/assets/avocado_coder.svg"
            alt="the avocado coder logo"
          />
          <div class="flex items-baseline">
            <a class="text-lg md:text-3xl" href="#"> theAvocadoCoder </a>
          </div>
        </div>
        <div>
          <router-link to="/">Home</router-link> |
          <router-link to="/projects">Projects</router-link> |
          <a></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
a.router-link-exact-active {
  color: white;
  text-decoration: underline;
}
</style>
