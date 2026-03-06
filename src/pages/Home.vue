<template>
  <main class="bg-gray-100">
   <div class="max-w-4xl mx-auto">
    <div v-if="loading">Loading...</div>
          <div v-else-if="!users.length">No users found</div>
      <UserList :users="users" :loading="loading"/>
   </div>
  </main>
</template>
<script setup>
    import { onMounted } from 'vue'
    import { storeToRefs } from 'pinia'
    import UserList from './UserList.vue'
    import { useUserStore } from '@/stores/UserStore'

    const userStore = useUserStore();
    const {  fetchUsers } = userStore;
    const {loading,users} = storeToRefs(userStore);
    onMounted(async () => {
        await fetchUsers();
    });
</script>


