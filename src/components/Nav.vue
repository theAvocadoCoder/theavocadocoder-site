<template>
  <div class="sticky max-w-screen top-0 h-24 p-4 bg-gray-800 text-white">
    <div class="flex items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <div class="flex gap-2">
          <img
            class="h-10"
            src="@/assets/avocado_coder.png"
            alt="the avocado coder logo"
          />
          <div class="flex items-baseline">
            <a class="text-3xl" href="#"> theAvocadoCoder </a>
          </div>
        </div>
        <div>
          <router-link to="/">Home</router-link> |
          <router-link to="/projects">Projects</router-link>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
a.router-link-exact-active {
  color: white;
}
</style>
