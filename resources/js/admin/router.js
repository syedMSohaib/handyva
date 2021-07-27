import VueRouter from "vue-router";
import NotFound from "./components/NotFound";

// Dashboard
const DashboardComponent        = () => import(/* webpackChunkName: "admin-dashboard" */ './views/dashboard/IndexComponent');
const AllNotificationComponent  = () => import(/* webpackChunkName: "admin-dashboard" */ './views/dashboard/AllNotificationComponent');

// Profile
const ProfileComponent          = () => import(/* webpackChunkName:  "admin-profile-view" */ './views/dashboard/ProfileComponent');
const EditProfileComponent      = () => import(/* webpackChunkName:  "admin-profile-edit" */ './views/dashboard/EditProfileComponent');

// Task
const TaskComponent             = () => import(/* webpackChunkName: "admin-task-index" */ './views/task/IndexComponent');
const TaskCreateComponent       = () => import(/* webpackChunkName: "admin-task-create" */ './views/task/CreateComponent');
const TaskShowComponent         = () => import(/* webpackChunkName: "admin-task-show" */ './views/task/ShowComponent');
const TaskLogComponent          = () => import(/* webpackChunkName: "admin-task-log" */ './views/task/LogComponent');

// Employee
const EmployeeComponent         = () => import(/* webpackChunkName: "admin-employee-index" */ './views/employee/IndexComponent');
const EmployeeCreateComponent   = () => import(/* webpackChunkName: "admin-employee-create" */ './views/employee/CreateComponent');
const EmployeeShowComponent     = () => import(/* webpackChunkName: "admin-employee-show" */ './views/employee/ShowComponent');
const EmployeeEditComponent   = () => import(/* webpackChunkName: "admin-employee-edit" */ './views/employee/EditComponent');

// Client
const ClientComponent           = () => import(/* webpackChunkName: "admin-client-index" */ './views/client/IndexComponent');
const ClientCreateComponent     = () => import(/* webpackChunkName: "admin-client-create" */ './views/client/CreateComponent');
const ClientShowComponent       = () => import(/* webpackChunkName: "admin-client-show" */ './views/client/ShowComponent');

// Blogs
const BlogComponent             = () => import(/* webpackChunkName: "admin-blog-index" */ './views/blog/IndexComponent');
const BlogCreateComponent       = () => import(/* webpackChunkName: "admin-blog-create" */ './views/blog/CreateComponent');
const BlogShowComponent         = () => import(/* webpackChunkName: "admin-blog-show" */ './views/blog/ShowComponent');

// Referrals
const ReferralComponent         = () => import(/* webpackChunkName: "admin-Referral-index" */ './views/referral/IndexComponent');

// Chat
const ChatComponent             = () => import(/* webpackChunkName: "admin.chat" */ './views/chat/ChatComponent');

const router = new VueRouter({
    mode: 'history',
    base: `${process.env.NODE_ENV === 'production' ? process.env.MIX_PRODUCTION_BASE : process.env.MIX_BASE_URL}/admin/`,
    routes: [
        {
            path: '/',
            name: 'index',
            component: DashboardComponent,
            meta: {
                title: "Dashboard",
                description: ""
            }
        },
        {
            path: '/dashboard',
            name: 'home',
            component: DashboardComponent,
            meta: {
                title: "Dashboard",
                description: ""
            }
        },
        {
            path: '/task',
            name: 'task',
            component: TaskComponent,
            meta: {
                title: "All Tasks",
                description: ""
            }
        },
        {
            path: '/task/create',
            name: 'task.create',
            component: TaskCreateComponent,
            meta: {
                title: "Task - Create",
                description: ""
            }
        },
        {
            path: '/task/:id',
            name: 'task.show',
            component: TaskShowComponent,
            meta: {
                title: "Task - Detail",
                description: ""
            }
        },
        {
            path: '/task/:id/logs',
            name: 'task.logs',
            component: TaskLogComponent,
            meta: {
                title: "Task - Activity Log",
                description: ""
            }
        },
        {
            path: '/employees',
            name: 'employee',
            component: EmployeeComponent,
            meta: {
                title: "All Employee",
                description: ""
            }
        },
        {
            path: '/employees/create',
            name: 'employee.create',
            component: EmployeeCreateComponent,
            meta: {
                title: "Employee Create",
                description: ""
            }
        },
        {
            path: '/employees/:id',
            name: 'employee.show',
            component: EmployeeShowComponent,
            meta: {
                title: "Employee Show",
                description: ""
            }
        },
        {
            path: '/employees/:id/edit',
            name: 'employee.edit',
            component: EmployeeEditComponent,
            meta: {
                title: "Employee Show",
                description: ""
            }
        },
        {
            path: '/clients',
            name: 'client',
            component: ClientComponent,
            meta: {
                title: "All Clients",
                description: ""
            }
        },
        {
            path: '/clients/create',
            name: 'client.create',
            component: ClientCreateComponent,
            meta: {
                title: "CLient Create",
                description: ""
            }
        },
        {
            path: '/clients/:id',
            name: 'client.show',
            component: ClientShowComponent,
            meta: {
                title: "Client Show",
                description: ""
            }
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogComponent,
            meta: {
                title: "All Blog",
                description: ""
            }
        },
        {
            path: '/blog/create',
            name: 'blog.create',
            component: BlogCreateComponent,
            meta: {
                title: "Blog Create",
                description: ""
            }
        },
        {
            path: '/blog/:id',
            name: 'blog.show',
            component: BlogShowComponent,
            meta: {
                title: "Manage Blog",
                description: ""
            }
        },
        {
            path: '/referral',
            name: 'referral',
            component: ReferralComponent,
            meta: {
                title: "All referral",
                description: ""
            }
        },
        {
            path: '/chat',
            name: 'chat',
            component: ChatComponent,
            meta: {
                title: "Chat",
                description: ""
            }
        },

        {
            path: '*',
            name: 'notfound',
            component: NotFound,
            meta: {
                title: "Not found",
                description: ""
            }
        },

    ],
});

router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) document.title = window.appname+" - " + nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create, so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router;
