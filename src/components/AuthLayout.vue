<template>
  <section class="flex justify-center items-center h-[90svh]">
    <div
      class="border-2 border-gray-300 w-2/5 mx-auto p-10 shadow-md rounded-xl auth-layout"
    >
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
.auth-layout {
  @media (max-width: 1284px) {
    width: 75%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
}

</style>
