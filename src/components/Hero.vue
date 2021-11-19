<template>
  <div>
    <!-- HERO -->
    <section
      id="home"
      class="flex items-center justify-center h-screen bg-gray-50"
    >
      <div class="flex flex-col gap-4">
        <div class="object-cover flex items-center justify-center">
          <img
            class="h-40 rounded-full"
            src="@/assets/profile-image.jpg"
            alt="image of Kelechi"
          />
        </div>
        <div class="flex self-center text-2xl font-sans font-bold type-effect">
          <h1 class="type-effect">K, a curious avocado 🥑</h1>
        </div>
      </div>
    </section>

    <section id="about" class="h-screen bg-gray-100">
      <div class="flex items-center justify-center h-full">
        <div class="flex items-center justify-center h-5/12">
          <div class="flex text-center bg-gray-300 p-5 w-2/3 h-full rounded-md">
            <p>
              I am a self-taught full-stack web developer, constantly seeking
              out fun ways to learn new things. I enjoy novelty and creative
              expression.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="h-screen bg-gray-200">
      <div class="flex flex-col md:flex-row items-center justify-center">
        <h3 class="text-2xl font-sans font-bold">Hit Me Up!</h3>

        <a href="tel:+2348061116006">
          <Icon icon="fa-solid:phone" class="h-5" />
        </a>
        <a href="mailto:theavocadocoder@gmail.com?subject=Inquiry">
          <Icon icon="fa-solid:mail" class="h-5" />
        </a>
        <a target="_blank" href="twitter.com/theavocadocoder">
          <Icon icon="fa-solid:twitter" class="h-5" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: { Icon },
};
</script>

<style scoped>
.type-effect {
  width: 20ch;
  animation: typing 3s steps(20), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: solid;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
