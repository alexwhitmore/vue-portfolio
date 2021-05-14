<template>
  <div
    id="contact"
    class="contact-wrapper text-center container-inner mx-auto py-40"
  >
    <div class="content text-2xl font-bold uppercase tracking-widest">
      Get In Touch
    </div>
    <p>
      If you would like to connect, my inbox is always open. Whether you have a
      question or just want to say hello, I will try my best to get back to you!
    </p>
    <g-link
      :to="`mailto:${email}`"
      class="button-wrapper grid justify-items-center mt-5"
    >
      <ReusableButton text="Get In Touch" />
    </g-link>
  </div>
</template>

<script>
import ReusableButton from '../ReusableButton';
import { email } from '@/config';

export default {
  name: 'ContactSection',
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
