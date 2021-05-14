<template>
  <!-- NOTES UPDATE GitHub link once project is published -->
  <footer>
    <SideLayout />
    <div
      class="footer-link text-center pb-5 uppercase text-xs tracking-widest font-bold"
    >
      <g-link :to="url" target="_blank" class="hover:text-green-700"
        >Built by Alex Whitmore</g-link
      >
    </div>
  </footer>
</template>

<script>
import SideLayout from './SideLayout';
import { githubLink } from '@/config';
const { name, url } = githubLink;

export default {
  name: 'FooterSection',
  data() {
    return {
      name,
      url,
    };
  },
  components: {
    SideLayout,
  },
};
</script>
