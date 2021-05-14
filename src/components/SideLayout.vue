<template>
  <div class="email-design fixed bottom-0 z-10 ml-1">
    <div
      class="my-5 mx-auto tracking-widest transform hover:-translate-y-3 motion-reduce:transform-none ease-in-out duration-300 hover:text-green-700 ml-2.5 rotate-180"
      style="writing-mode: vertical-rl"
    >
      <g-link :to="`mailto:${email}`">
        {{ email }}
      </g-link>
    </div>
  </div>
</template>

<script>
import { email } from '@/config';

export default {
  name: 'SideLayout',
  data() {
    return {
      email,
    };
  },
};
</script>

<style scoped>
.email-design::after {
  content: '- - - - - - - - ';
  writing-mode: vertical-rl;
  display: block;
  width: 0px;
  margin: 0 auto 0 23.5px;
  padding-left: 14.5px;
}

@media (max-height: 510px) {
  .email-design {
    display: none;
  }
}

@media (max-width: 865px) {
  .email-design {
    display: none;
  }
}
</style>
