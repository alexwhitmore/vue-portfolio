<template>
  <!-- NOTES Should I keep shadow or get rid of it? Sticky? -->
  <header class="top-0 left-0 z-40 fixed w-full border-green-700 shadow-md">
    <nav
      class="container mx-auto flex flex-wrap justify-between items-center py-8"
    >
      <div>
        <g-link
          :to="url"
          class="text-copy-primary hover:text-gray-600 tracking-widest uppercase font-bold"
          >{{ name }}</g-link
        >
      </div>
      <!-- <HamburgerButton /> -->
      <ul
        class="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
        :class="isOpen ? 'block' : 'hidden'"
      >
        <li v-for="(nav, index) in navLinks" :key="index">
          <a :href="nav.url" class="text-copy-primary hover:text-gray-600">{{
            nav.name
          }}</a>
        </li>
        <a :href="'/resume.pdf'" target="_blank" class="button-wrapper">
          <ReusableButton class="button" text="Resume" />
        </a>
      </ul>
    </nav>
  </header>
</template>

<script>
import ReusableButton from './ReusableButton';
import HamburgerButton from './HamburgerButton';
import { homeLink, navLinks } from '@/config';
const { url, name } = homeLink;

export default {
  name: 'HeaderSection',
  data() {
    return {
      url,
      name,
      navLinks,
    };
  },
  components: {
    HamburgerButton,
    ReusableButton,
  },
  props: {
    isOpen: Boolean,
  },
};
</script>

<style scoped>
.button-wrapper .button {
  padding: 10px;
  margin-top: 0px;
}
</style>
