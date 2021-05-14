<template>
  <div id="projects" class="test container-inner mx-auto">
    <h2
      class="text-center font-bold mb-6 uppercase tracking-wide leading-tight text-2xl"
    >
      Some Projects I've Built
    </h2>
    <vs-card-group>
      <!-- @click="handleClick" -->
      <vs-card
        v-for="project in projects"
        :key="project.node.id"
        color="primary"
      >
        <template #title>
          <h3>{{ project.node.title }}</h3>
        </template>
        <template #img>
          <g-image src="~/images/reservation.png" class="picture" />
        </template>
        <template #text>
          <p v-html="project.node.content" class="content" />
        </template>
        <template #interactions>
          <vs-button
            success
            border
            blank
            href="https://github.com/alexwhitmore/restaurant-reservation/"
          >
            GitHub
          </vs-button>
        </template>
      </vs-card>
    </vs-card-group>
  </div>
</template>

<script>
export default {
  name: 'TheProjectSection',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>
