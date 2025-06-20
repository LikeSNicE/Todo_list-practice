<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useRegisterStore } from "../stores/registerStore";
import { useRouter } from "vue-router";
import AuthLayout from "../components/AuthLayout.vue";

const registerStore = useRegisterStore();
const router = useRouter();

const handleSubmit = async () => {
  await registerStore.registerUser();
  router.push({path: "auth"})
}

</script>

<template>
  <AuthLayout>
    <form @submit.prevent="handleSubmit">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-xl">{{ $t('account.registrationTitle') }}</h3>
        <router-link class="" to="/auth">{{ $t('account.loginTitle') }}</router-link>
      </div>

      <div class="flex flex-col gap-4 mt-[1em]">
        <div class="flex flex-col">
          <label class="block text-gray-900 text-sm font-bold mb-2"
            >Email:
          </label>
          <input
            class="border-2 rounded-lg p-2 focus:outline focus:border-sky-500"
            type="email"
            :placeholder="$t('account.enterEmail')"
            v-model="registerStore.userEmail"
          />
        </div>

        <flex class="flex flex-col">
          <label class="block text-gray-900 text-sm font-bold mb-2"
            >{{ $t('account.password') }}:
          </label>
          <input
            class="border-2 rounded-lg p-2 focus:outline focus:border-sky-500"
            type="password"
            :placeholder="$t('account.enterPassword')"
            v-model="registerStore.userPassword"
          />
        </flex>

        <button
          type="submit"
          class="cursor-pointer bg-[#4C75A3] rounded-xl text-white py-2 w-3/5 my-0 mx-auto form__btn"
        >
          {{ $t("account.createNewAccount") }}
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
