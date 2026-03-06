<template>
    <div class="max-w-4xl mx-auto p-6">
      <div v-if="loading">Loading...</div>
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800">Add New User</h2>
            <router-link
                to="/"
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Back to List
            </router-link>
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSubmit">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    v-model="form.name"
                >
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    v-model="form.email"
                >
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                    Phone
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="Enter phone"
                    v-model="form.phone"
                >
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                    Address
                </label>
                <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    rows="3"
                    placeholder="Enter address"
                    v-model="form.address"
                ></textarea>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="dateOfBirth">
                    Date of Birth
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="dateOfBirth"
                    type="date"
                    v-model="form.dateOfBirth"
                >
            </div>

            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
                    Age
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="age"
                    type="number"
                    placeholder="Enter age"
                    v-model="form.age"
                >
            </div>

            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
                <button
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    @click="resetForm"
                >
                    Reset
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useUserStore } from '@/stores/UserStore'
    import { storeToRefs } from 'pinia'
    const userStore = useUserStore();
    const { form, loading } = storeToRefs(userStore);
    const { submitUser } = userStore;
    const handleSubmit = async () =>{
        await submitUser();

    }
    const resetForm = () => {
    form.value.name = '';
    form.value.email = '';
    form.value.phone = '';
    form.value.address = '';
    form.value.dateOfBirth = '';
    form.value.age = null;
};

</script>
