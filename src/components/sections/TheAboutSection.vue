<template>
  <div id="about" class="container-inner mx-auto py-10 mb-40">
    <div class="text-2xl uppercase font-bold tracking-widest text-center mb-10">
      About Me
    </div>
    <div class="md:grid gap-x-12 grid-cols-2 col-start-3 col-end-2">
      <div>
        <p>
          Hi there! My name is Alex and I love buildings things. I first grew an
          interest in web development in 2017 when I built a website for an
          e-commerce company I started that donated profits to local animal
          shelters.
        </p>
        <br />

        <p>
          I graduated from a coding bootcamp where I learned how to be a full
          stack software engineer and I am now pursuing a bachlors degree in
          computer science.
        </p>
        <br />

        <p>
          Some technologies I've been working with recently:
        </p>
        <ul class="skills-wrapper grid grid-cols-2 mt-3">
          <li
            v-for="(skill, index) in skills"
            :key="index"
            class="mb-2 pl-4 relative"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
      <g-image src="~/images/me.jpg" class="picture shadow-lg rounded" />
    </div>
  </div>
</template>

<script>
import { skills } from '@/config';

export default {
  name: 'TheAboutSection',
  data() {
    return {
      skills,
    };
  },
};
</script>

<style scoped>
@media (max-width: 765px) {
  .picture {
    margin-top: 10px;
  }
}

li::before {
  content: '»';
  position: absolute;
  left: 0;
  color: green;
  font-size: 15px;
  line-height: 24px;
}
</style>
