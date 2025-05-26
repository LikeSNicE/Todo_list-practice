<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useRegisterStore } from "../stores/registerStore";
import AuthLayout from "../components/AuthLayout.vue";

const registerStore = useRegisterStore();
</script>

<template>
  <AuthLayout>
    <form @submit="registerStore.registerUser()">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-xl">Регистрация</h3>
        <router-link class="" to="/auth">Войти</router-link>
      </div>

      <div class="flex flex-col gap-4 mt-[1em]">
        <div class="flex flex-col">
          <label class="block text-gray-900 text-sm font-bold mb-2"
            >Email:
          </label>
          <input
            class="border-2 rounded-lg p-2 focus:outline focus:border-sky-500"
            type="email"
            placeholder="Введите Email... "
            v-model="registerStore.userEmail"
          />
        </div>

        <flex class="flex flex-col">
          <label class="block text-gray-900 text-sm font-bold mb-2"
            >Пароль:
          </label>
          <input
            class="border-2 rounded-lg p-2 focus:outline focus:border-sky-500"
            type="password"
            placeholder="Введите пароль..."
            v-model="registerStore.userPassword"
          />
        </flex>

        <button
          type="submit"
          class="cursor-pointer bg-[#4C75A3] rounded-xl text-white py-2 w-3/5 my-0 mx-auto form__btn"
        >
          Создать новый аккаунт
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<style scoped lang="scss">
.form__btn {
  @media (max-width: 500px) {
    width: 100%;
  }
}
</style>
