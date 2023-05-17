<template>
  <Login />
</template>

<script>
import { onMounted } from "vue";
import Login from "./Login.vue";
import { useRouter } from "vue-router";

export default {
  components: { Login },
  setup () {
    const router = useRouter();

    onMounted(() => {
      const token = window.localStorage.getItem("token");
      if (token) {
        router.push({ name: "" });
      }
    });

    function handleLogin () { };

    function handleAccountCreate () { };

    return {
      handleLogin,
      handleAccountCreate,
    };
  },
};
</script>
