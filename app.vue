<template>
  <div>
    <NuxtLayout>
      <template #left-panel>
        <ResumoUsuario />
      </template>

      <NuxtPage />

      <template #rigth-panel> Resumo dos ativos disponiveis. </template>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "~/stores/user";
import { useTokensStore } from "~/stores/tokens";

const userStore = useUserStore();
const tokensStore = useTokensStore();

const user = ref();
const tokens = ref();

onMounted(() => {
  userStore.fetchUser("clientex");
  user.value = userStore.user;

  tokensStore.fetchTokens();
  tokens.value = tokensStore.tokens;
});
</script>
