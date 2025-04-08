<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="flex justify-center items-center h-[90svh]">
    <div
      class="border-2 border-gray-300 w-3/5 my-0 mx-auto p-10 shadow-md rounded-xl register-form"
    >
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-xl">Регистрация</h3>
        <router-link class="" to="/auth">Авторизация</router-link>
      </div>

      <div class="flex flex-col gap-4 mt-[1em]">
        <input
          class="border-2 rounded-lg p-2 focus:outline focus:border-sky-500"
          type="email"
          placeholder="Введите Email..."
        />
        <input
          class="border-2 rounded-lg p-2 focus:outline focus:border-sky-500"
          type="password"
          placeholder="Введите пароль..."
        />
        <button
          class="cursor-pointer bg-[#4C75A3] rounded-xl text-white py-2 w-3/5 my-0 mx-auto form__btn"
        >
          Создать новый аккаунт
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.register-form {
  @media (max-width: 1284px) {
    width: 80%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }

  .form__btn {
    @media (max-width: 500px) {
      width: 100%;
    }
  }
}
</style>
