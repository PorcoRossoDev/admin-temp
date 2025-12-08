<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'


const form = ref({
    email: 'admin-01@ecme.com',
    password: '123Qwe',
    remember: false,
})

const loading = ref(false)
const router = useRouter()
const auth = useAuthStore()
const handleSubmit = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
        ElMessage.success(`Welcome back, ${form.value.email}`)
        auth.login(form.value)
        router.push({ name: 'admin.dashboard' })
    }, 100)
}
</script>

<template>
    <div class="flex h-screen bg-white dark:bg-gray-800 p-6">
        <!-- Left -->
        <div class="flex flex-col justify-center items-center flex-1 px-6">
            <div class="w-full xl:max-w-[450px] px-8 max-w-[380px]">

                <div class="">
                    <img class="w-14 h-14"
                        src="https://ecme-next.themenate.net/_next/image?url=%2Fimg%2Flogo%2Flogo-light-streamline.png&w=128&q=75"
                        alt="">
                </div>
                <!-- <AuthLogo /> -->

                <div class="mb-10 mt-3">
                    <h1 class="font-bold text-3xl">Welcome back!</h1>
                    <p class="font-medium mt-2">Please enter your credentials to sign in!</p>
                </div>

                <!-- Form -->
                <el-form :model="form" @submit.prevent="handleSubmit" class="space-y-2">
                    <el-form-item>
                        <div class="font-medium">Email</div>
                        <el-input v-model="form.email" placeholder="Email" size="large" type="email" clearable />
                    </el-form-item>

                    <el-form-item>
                        <div class="font-medium">Mật khẩu</div>
                        <el-input v-model="form.password" placeholder="Password" size="large" type="password"
                            show-password />
                    </el-form-item>

                    <div class="text-right text-sm mb-2 flex justify-between items-center">
                        <el-form-item class="h-full !mb-0">
                            <el-checkbox v-model="form.remember" label="Ghi nhớ" class="font-normal" />
                        </el-form-item>
                        <a href="/auth/forgot-password" class="text-primary underline">
                            Quên mật khẩu?
                        </a>
                    </div>

                    <el-button type="primary" native-type="submit" size="large" round class="w-full !rounded-md"
                        :loading="loading">
                        Đăng nhập
                    </el-button>
                </el-form>

            </div>
        </div>

        <!-- Right (background image) -->
        <div
            class="hidden lg:flex flex-col flex-1 justify-between items-end relative rounded-3xl overflow-hidden max-w-[520px] 2xl:max-w-[720px]">
            <img src="https://ecme-next.themenate.net/img/others/auth-side-bg.png" alt="auth-side-bg"
                class="absolute w-full h-full object-cover" />
        </div>
    </div>
</template>

<style scoped>
.text-primary {
    color: var(--el-color-primary);
}
</style>