<template>
  <section class="h-screen flex items-center justify-center">
    <h1>
      The developer is currently working on this page. How about you look at
      <router-link to="/" @click="closeTab">some other pages</router-link>
      for now?
    </h1>
  </section>
</template>

<script>
export default {
  name: "InProgress",
  methods: {
    closeTab() {
      window.top.close();
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
a.router-link-exact-active {
  color: white;
  text-decoration: underline;
}
</style>
