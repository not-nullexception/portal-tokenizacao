import { defineStore } from "pinia";

import userOffline from "../data/database.json";

export type RootState = {
  user: any;
};

export const useUserStore = defineStore("user", {
  state: () =>
    ({
      user: {},
    } as RootState),
  actions: {
    fetchUser(user: string) {
      const userData =
        userOffline.usuarios.find((x) => x.usuario === user) || null;

      this.user = userData;
    },
  },
});
