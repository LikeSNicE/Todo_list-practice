<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="flex justify-center items-center h-[90svh]">
    <div
      class="border-2 border-gray-300 w-2/5 my-0 mx-auto p-10 shadow-md rounded-xl auth-form"
    >
      <h3 class="font-bold text-xl text-center">Авторизация</h3>

      <div class="flex flex-col gap-4 mt-[1em] justify-center items-center">
        <input
          class="border-2 rounded-lg p-2 focus:outline focus:border-sky-500 w-3/5 form__input"
          type="email"
          placeholder="Введите Email..."
        />
        <input
          class="border-2 rounded-lg p-2 focus:outline focus:border-sky-500 w-3/5 form__input "
          type="password"
          placeholder="Введите пароль..."
        />
        <button class="flex items-center justify-center cursor-pointer bg-[#4C75A3] rounded-xl text-white py-2  text-center w-3/5 my-0 mx-auto form__btn">
          Авторизоваться
        </button>

        <div class="flex flex-col items-center auth-form__text">
          <router-link to="/registration" class="italic font-semibold text-color">Нет аккаунта тогда зарегистрируетесь</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.auth-form {
  @media (max-width: 1284px) {
    width: 80%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  &__text{
    @media(max-width: 440px){
    text-align: center;
    font-size: 14px;
    font-weight: normal;
  }
  }
}

.form__input{
   @media (max-width: 500px) {
    width: 100%;
  }
}

.form__btn{
  @media (max-width: 500px) {
    width: 100%;
  }
}
</style>
