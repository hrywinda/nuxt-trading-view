import { useStore } from "vuex";
import { useRouter } from "vue-router";

//eslint-disable-next-line
export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useStore();
  const router = useRouter();
  const isLoggedIn = store.getters.isLoggedIn;

  if (from.name == "login") return;
  if (to.path === "/" && !isLoggedIn) {
    await router.push({ name: "login" });
  }
  return;
});
