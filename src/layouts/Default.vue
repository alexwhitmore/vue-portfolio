<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-copy-primary
  leading-normal flex flex-col min-h-screen theme-dark pt-12"
  >
    <HeaderSection :isOpen="isOpen" />
    <slot />
    <FooterSection />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { HeaderSection, FooterSection } from '@/components';

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
  components: {
    HeaderSection,
    FooterSection,
  },
};
</script>

<style src="@/css/main.css" />
