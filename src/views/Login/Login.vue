<template>
    <div class="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div class="mx-10">
            <div class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeIn animate__faster">
                <div class="flex flex-col px-12 py-10 bg-white">
                    <div class="mt-16">
                        <form @submit.prevent="handleSubmit">
                            <label class="block">
                                <span class="text-lg font-medium text-gray-800">
                                    <input v-model="state.email.value" type="email" :class="{'border-brand-danger': !!state.email.errorMessage}" class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded" placeholder="E-mail">
                                </span>
                                <span v-if="!!state.email.errorMessage" class="block font-medium text-brand-danger">
                                    {{ state.email.errorMessage }}
                                </span>
                            </label>
                            <label class="block mt-9">
                                <span class="text-lg font-medium text-gray-800">
                                    <input v-model="state.password.value" type="password" :class="{'border-brand-danger': !!state.password.errorMessage}" class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded" placeholder="Senha">
                                </span>
                                <span v-if="!!state.password.errorMessage" class="block font-medium text-brand-danger">
                                    {{ state.password.errorMessage }}
                                </span>
                            </label>

                            <button :disabled="state.isLoading" :class="{ 'opacity-50': state.isLoading }" class="w-full px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none ">Entrar</button>
                            <div class="flex items-center justify-between">
                              <div class="flex items-start py-8">
                                <div class="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                                </div>
                                <div class="ml-3 text-sm">
                                  <label for="remember" class="text-gray-500 dark:text-gray-300">Lembrar-me</label>
                                </div>
                              </div>
                              <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Esqueceu a senha?</a>
                            </div>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Você ainda não possui uma conta? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Cadastrar</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useField } from "vee-validate";
import { validateEmptyAndLength3, validateEmptyAndEmail } from "../../utils/validators";
import services from "../../services";
export default {
  setup () {
    const router = useRouter();
    const {
      value: emailValue,
      errorMessage: emailErrorMessage,
    } = useField("email", validateEmptyAndEmail);
    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage,
    } = useField("password", validateEmptyAndLength3);
    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage,
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage,
      },
    });

    async function handleSubmit () {
      try {
        // debbuger;
        state.isLoading = true;

        const { data, errors } = await services.auth.login({
          nomeUsuarioEmail: state.email.value,
          senha: state.password.value,
        });

        if (!errors) {
          window.localStorage.setItem("token", data.accessToken);
          router.push({ name: "Home" });
          return;
        }
      } catch (error) {
        state.isLoading = false;
        state.hasErrors = !!error;
      }
    };

    return {
      state,
      handleSubmit,
    };
  },
};
</script>

<style>

</style>
