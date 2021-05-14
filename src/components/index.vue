<template>
  <table class="SectionProxy">
    <slot />
  </table>
</template>

<script>
export default {
  name: 'SectionProxy',
};

export { default as SideLayout } from './SideLayout';
export { default as ReusableButton } from './ReusableButton';
export { default as HamburgerButton } from './HamburgerButton';
export { default as HeaderSection } from './HeaderSection';
export { default as FooterSection } from './FooterSection';
export { default as TheHeroSection } from './sections/TheHeroSection';
export { default as TheIntroSection } from './sections/TheIntroSection';
export { default as TheAboutSection } from './sections/TheAboutSection';
export { default as TheProjectSection } from './sections/TheProjectSection';
export { default as TheContactSection } from './sections/TheContactSection';
</script>
