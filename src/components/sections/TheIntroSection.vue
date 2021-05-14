<template>
  <div id="about" class="container-inner mx-auto">
    <p class="text-lg sm:text-xl">
      I'm a software engineer based out of Providence, RI. I strive to raise the
      bar, think outside of the box, and provide a great-looking and performant
      experience; which you can see on my
      <a
        class="text-green-700 hover:opacity-80 font-bold"
        href="https://github.com/alexwhitmore"
        target="_blank"
        >GitHub</a
      >!
    </p>
    <div class="button-wrapper mt-5">
      <g-link :to="`mailto:${email}`" target="_blank" class="button">
        <ReusableButton text="Get In Touch" />
      </g-link>
    </div>
    <div
      class="projects container-inner mx-auto text-xl border-t border-gray-500 mt-16 py-16 mb-16 relative"
    ></div>
  </div>
</template>

<script>
import ReusableButton from '../ReusableButton';
import { email } from '@/config';

export default {
  name: 'AboutSection',
  data() {
    return {
      email,
    };
  },
  components: {
    ReusableButton,
  },
};
</script>
