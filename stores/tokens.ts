import { defineStore } from "pinia";

import userOffline from "../data/database.json";

export type RootState = {
  tokens: any;
};

export const useTokensStore = defineStore("tokens", {
  state: () =>
    ({
      tokens: {},
    } as RootState),
  actions: {
    fetchTokens() {
      const tokens = userOffline.tokens.filter((x) => x.ativo === true);

      this.tokens = tokens;
    },
  },
});
