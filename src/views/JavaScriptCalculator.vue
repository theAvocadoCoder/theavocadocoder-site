<template>
  <div>
    <!--
    Project Page header
  -->
    <section>
      <router-link to="/projects">
        <Icon icon="fa:arrow-left" class="h-12 w-12" />
      </router-link>
    </section>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>
