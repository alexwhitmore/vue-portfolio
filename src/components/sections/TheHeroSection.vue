<template>
  <div
    class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16 mt-8"
  >
    <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
      <div class="text-green-700 leading-tight">Hi, I'm Alex</div>
      <div class="leading-tight">Welcome to my portfolio!</div>
    </div>
    <div class="mt-8 ml-6 sm:mt-0">
      <g-image
        src="../../svg/hero.svg"
        alt="Illustration of person with source code behind them"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAboutSection',
};
</script>
