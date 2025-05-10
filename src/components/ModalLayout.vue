<template>
  <div
    class="h-screen w-full fixed top-0 left-0 right-0 bg-black opacity-70 z-50"
  ></div>
  <div
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-51 justify-center items-center w-full md:inset h-[calc(100%-1rem)] max-h-full flex"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!--Modal Content-->
      <div class="relative bg-gray-50 rounded-lg shadow-sm">
        <!--Modal Header-->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200"
        >
          <slot name="header"></slot>
        </div>
        <!--Modal body-->
        <div class="p-4 md:p-5 space-y-4">
          <slot name="body"></slot>
        </div>
        <!--Modal footer-->
        <div class="p-4 md:p-5 border-t border-gray-200 rounded-b">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
