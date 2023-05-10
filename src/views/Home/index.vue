<template>
    <CustomHearder
        @create-account="handleAccountCreate"
        @login="handleLogin"
    />
    <Contact />
    <div class="flex justify-center py-10 bg-brand-gray">
        <p class="front-medium text-center text-gray-800">Aspti | 2023</p>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import Contact from './Contact.vue'
import CustomHearder from './CustomHearder.vue'
import { useRouter } from 'vue-router'

export default {
  components: { Contact, CustomHearder },
  setup () {
    const router = useRouter()

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: '' })
      }
    })

    function handleLogin () { }

    function handleAccountCreate () { }

    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>
