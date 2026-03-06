<template>
      <div  v-if="users.length" class='py-5'>

        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-700">ID</th>
              <th class="py-2 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-700">Name</th>
              <th class="py-2 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-700">Email</th>
              <th class="py-2 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-700">Address</th>
              <th class="py-2 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100">
              <td class="py-2 px-4 border-b border-gray-200">{{ user.id }}</td>
              <td class="py-2 px-4 border-b border-gray-200">{{ user.name }}</td>
              <td class="py-2 px-4 border-b border-gray-200">{{ user.email }}</td>
                <td class="py-2 px-4 border-b border-gray-200">{{ user.address }}</td>
                <td class="space-x-5">
                  <button class="text-blue-500 text-2xl"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button class="text-red-500 text-2xl"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
</template>

<script setup>
    defineProps({
        users: {
            type: Array,
            default: () => []
        }
    });
</script>
