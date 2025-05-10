<script setup>
import { RouterLink } from "vue-router";
import AuthLayout from "../components/AuthLayout.vue";
import { useLoginStore } from "../stores/loginStore";

const loginStore = useLoginStore();
</script>

<template>
  <AuthLayout>
    <form @submit.prevent="loginStore.loginUser()">
      <h3 class="font-bold text-xl text-center">Авторизация</h3>
      <div class="flex flex-col gap-4 mt-[1em] justify-center items-center">
        <input
          class="border-2 rounded-lg p-2 focus:outline focus:border-sky-500 w-3/5 form__input"
          type="email"
          placeholder="Введите Email..."
          v-model="loginStore.email"
        />
        <input
          class="border-2 rounded-lg p-2 focus:outline focus:border-sky-500 w-3/5 form__input"
          type="password"
          placeholder="Введите пароль..."
          v-model="loginStore.password"
        />
        <button
          type="submit"
          class="flex items-center justify-center cursor-pointer bg-[#4C75A3] rounded-xl text-white py-2 text-center w-3/5 my-0 mx-auto form__btn"
        >
          Авторизоваться
        </button>

        <div class="flex flex-col items-center auth-form__text">
          <router-link
            to="/registration"
            class="italic font-semibold text-color"
            >Нет аккаунта тогда зарегистрируетесь</router-link
          >
        </div>
      </div>
    </form>
  </AuthLayout>
</template>

<style scoped lang="scss">
.form__input {
  @media (max-width: 500px) {
    width: 100%;
  }
}

.form__btn {
  @media (max-width: 500px) {
    width: 100%;
  }
}

.auth-form__text {
  @media (max-width: 440px) {
    text-align: center;
    font-size: 14px;
    font-weight: normal;
  }
}
</style>
