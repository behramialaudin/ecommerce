// Import Views
const adminUsers = () => import('../assets/views/index/adminLogin.vue')

export default [
    // Admin
    { path: '/login/', name: 'login', component: adminUsers},

]