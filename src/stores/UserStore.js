
import axios from 'axios'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useUserStore = defineStore('user', () => {
  const users = ref([])
  const loading = ref(false)
  const form = reactive({
    name: "",
    email: "",
    address: "",
    age: null,
    phone: "",
  })
  const fetchUsers = async () => {
    loading.value = true
    try {
      const response = await axios.get('http://localhost:3000/users')
      users.value = response.data
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      loading.value = false
    }
  }
 const submitUser = async () => {
    loading.value = true
    try {
      const payload = {id,...form }
      const { data } = await axios.post('http://localhost:3000/users', payload)
      users.value.push(data) // or: await fetchUsers()
      // reset form
      Object.assign(form, {
        name: "",
        email: "",
        phone: "",
        address: "",
        dateOfBirth: "",
        age: null,
      })
    } catch (error) {
      console.error('Error submitting user:', error)
    } finally {
      loading.value = false
    }
  }

  return { users, loading, fetchUsers, form, submitUser }
})
