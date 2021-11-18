<template>
  <div>
    <!-- HERO -->
    <section id="home" class="flex items-center justify-center h-screen">
      <div class="flex flex-col gap-4">
        <div class="object-cover flex items-center justify-center">
          <img
            class="h-40 rounded-full"
            src="@/assets/profile-image.jpg"
            alt="image of Kelechi"
          />
        </div>
        <div class="flex self-center text-3xl font-sans font-bold type-effect">
          <h1 class="type-effect">K, a curious avocado 🥑</h1>
        </div>
      </div>
    </section>

    <section id="about" class="h-screen">
      <div class="flex flex-col items-center justify-center">
        <h3 class="">About Me</h3>

        <div class="flex items-center justify-center w-2/3">
          <p>
            I am a self-taught full-stack web developer, constantly seeking out
            fun ways to learn new things. I enjoy novelty and creative
            expression.
          </p>
        </div>
      </div>
    </section>

    <section id="contact" class="h-screen">
      <div class="flex flex-col items-center justify-center">
        <h3 class="">Hit Me Up!</h3>

        <a href="tel:+2348061116006">+234 806 1116 006</a>

        <p>
          <a href="mailto:theavocadocoder@gmail.com">
            theavocadocoder@gmail.com
            <span></span>
          </a>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.type-effect {
  width: 20ch;
  animation: typing 3s steps(20), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
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
