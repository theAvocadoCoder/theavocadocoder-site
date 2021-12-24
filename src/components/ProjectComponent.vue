<template>
  <div>
    <section class="h-full flex flex-col items-center justify-center">
      <h1 class="text-2xl font-sans font-bold">Welcome, internet stranger!</h1>
      <div>
        Here are some of the projects I've worked on. I never feel like a
        project is ever fully done as there is always room for improvement
        (hence, the progress values beside the titles). However, these are my
        works that I think are "complete enough" to grace a public space. I hope
        you like them :)
      </div>
    </section>
    <section class="flex flex-col justify-center items-center p-5">
      <div
        v-for="project of projects"
        :key="project.id"
        class="
          h-3/4
          w-42
          rounded-md
          flex flex-col
          gap-5
          bg-gray-100
          my-5
          px-10
          py-5
        "
      >
        <span class="font-bold"
          >{{ project.title }} [{{ project.progress }}%]</span
        >
        <div>{{ project.description }}</div>
        <div>
          <span>Stack:</span>
          <div v-for="stack in project.stacks" :key="stack.id">
            <Icon :icon="stack" class="h-8 w-8" />
          </div>
        </div>
        <div>
          <a target="_blank" :href="project.route">{{
            project.callToAction
          }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  data() {
    return {
      projects: [
        {
          title: "JavaScript Calculator",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit consequuntur, accusamus nobis provident tempora laudantium inventore esse illo non?",
          stacks: [],
          route: "/projects/javascript-calculator",
          callToAction: "Crunch some numbers",
          progress: 80,
        },
        {
          title: "Markdown Previewer",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit consequuntur, accusamus nobis provident tempora laudantium inventore esse illo non?",
          stacks: [],
          route: "https://avocadocoder-javascript-calculator.netlify.app/",
          callToAction: "Write some text",
          progress: 85,
        },
        {
          title: "Postit Lister",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit consequuntur, accusamus nobis provident tempora laudantium inventore esse illo non?",
          stacks: [],
          route: "/projects/postit-lister",
          callToAction: "Make some notes",
          progress: 70,
        },
        {
          title: "Random Quotes Generator",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit consequuntur, accusamus nobis provident tempora laudantium inventore esse illo non?",
          stacks: [],
          route: "/projects/random-quotes-generator",
          callToAction: "Get a random quote",
          progress: 90,
        },
        {
          title: "e-Commerce Site",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit consequuntur, accusamus nobis provident tempora laudantium inventore esse illo non?",
          stacks: [],
          route: "/projects/e-commerce-site",
          callToAction: "View the site",
          progress: 65,
        },
        {
          title: "2-Player TicTacToe Game",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit consequuntur, accusamus nobis provident tempora laudantium inventore esse illo non?",
          stacks: [],
          route: "/projects/tictactoe-game",
          callToAction: "Play with a mortal enemy",
          progress: 90,
        },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>

