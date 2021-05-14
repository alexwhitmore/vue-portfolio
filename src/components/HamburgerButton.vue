<template>
  <div class="block lg:hidden">
    <button
      class="flex items-center
            px-3
            py-2
            rounded
            border-gray-500
            hover:text-gray-600"
    >
      <svg
        class="current-color h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'HamburgerButton',
};
</script>
