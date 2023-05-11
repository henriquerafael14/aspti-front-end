<template>
    <header class="header">
        <div class="flex flex-col w-4/5 mas-w6xl">
            <div class="flex items-center justify-between py-10">
                <div class="w-28 lg:w-36 ">
                    <img src="../../assets/images/logo.png" alt="logo" class="w-10" width="10">
                </div>

                <div class="flex">
                    <button class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none"
                    >
                    Entrar
                    </button>
                    <button class="px-6 py-2 font-bold rounded-full text-white focus:outline-none"
                    >
                    Crie uma conta
                    </button>
                </div>
            </div>
            <div class="flex flex-col mt-28">
                <h1 class="text-4xl font-black text-white">
                    Assistência técnica com mais facilidade.
                </h1>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.header {
    @apply bg-brand-main w-full flex justify-center;
    height: 700px;
}
</style>
