import AdminLayout from "@/layouts/AdminLayout.vue";

export default [
    {
        path: '/admin',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'admin.dashboard',
                component: () => import('@/views/admin/DashboardView.vue'),
            },
        ]
    }
]