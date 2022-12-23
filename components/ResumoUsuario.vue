<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text align="center" justify="center">
      <ResumoUsuarioTop />
      <ResumoUsuarioBadges />
    </v-card-text>

    <v-card-text class="mt-3" justify="center">
      <div class="d-flex align-center me-8 mb-2">
        <v-avatar
          class="text-primary me-3 rounded-lg"
          icon="mdi-bitcoin"
          color="deep-purple lighten-4"
          size="150"
          rounded="0"
          style="width: 44px; height: 44px"
        >
        </v-avatar>
        <div>
          <h6 class="text-h6">1,230</h6>
          <span>Qtde Tokens</span>
        </div>
      </div>
      <div class="d-flex align-center me-8 mb-2">
        <v-avatar
          class="text-primary me-3 rounded-lg"
          icon="mdi-cash"
          color="deep-purple lighten-4"
          size="150"
          rounded="0"
          style="width: 44px; height: 44px"
        >
        </v-avatar>
        <div>
          <h6 class="text-h6">R$ 1,800</h6>
          <span>Total investido</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
