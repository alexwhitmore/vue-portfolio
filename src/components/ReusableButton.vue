<template>
  <button
    class="border-2 border-green-500 rounded block text-white text-sm font-semibold tracking-widest uppercase rounded-md cursor-pointer px-5 py-3 hover:bg-green-800 hover:bg-opacity-30 focus:outline-none"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ReusableButton',
  props: {
    text: String,
  },
};
</script>
