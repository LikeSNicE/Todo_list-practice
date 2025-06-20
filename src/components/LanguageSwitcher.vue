<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const languages = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

const changeLanguage = (code: string) => {
  locale.value = code;
  localStorage.setItem("lang", code);
};
</script>

<template>
  <select
    :value="locale"
    @change="changeLanguage(($event.target as HTMLSelectElement).value)"
    class="p-2 border rounded-md text-black bg-white"
  >
    <option v-for="lang in languages" :key="lang.code" :value="lang.code">
      {{ lang.label }}
    </option>
  </select>
</template>
