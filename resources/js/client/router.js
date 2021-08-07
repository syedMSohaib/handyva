import VueRouter from "vue-router";
import NotFound from "./components/NotFound";

// Dashboard
const DashboardComponent        = () => import(/* webpackChunkName: "client-dashboard" */ './views/dashboard/IndexComponent');
const AllNotificationComponent  = () => import(/* webpackChunkName: "client-dashboard" */ './views/dashboard/AllNotificationComponent');

// Profile
const ProfileComponent          = () => import(/* webpackChunkName:  "client-profile-view" */ './views/profile/ProfileComponent');
const SocialLifeComponent       = () => import(/* webpackChunkName:  "client-profile-social_life" */ './views/profile/SocialLifeComponent');
const TravelComponent           = () => import(/* webpackChunkName:  "client-profile-contacts" */ './views/profile/TravelComponent');
const ContactComponent          = () => import(/* webpackChunkName:  "client-profile-travels" */ './views/profile/ContactComponent');


// Task
const TaskComponent             = () => import(/* webpackChunkName: "client-task-index" */ './views/task/IndexComponent');
const TaskCreateComponent       = () => import(/* webpackChunkName: "client-task-create" */ './views/task/CreateComponent');
const TaskShowComponent         = () => import(/* webpackChunkName: "client-task-show" */ './views/task/ShowComponent');
const TaskLogComponent          = () => import(/* webpackChunkName: "client-task-log" */ './views/task/LogComponent');
const TaskEditComponent         = () => import(/* webpackChunkName: "client-task-edit" */ './views/task/EditComponent');

// Employee
const EmployeeComponent         = () => import(/* webpackChunkName: "client-employee-index" */ './views/employee/IndexComponent');
const EmployeeCreateComponent   = () => import(/* webpackChunkName: "client-employee-create" */ './views/employee/CreateComponent');
const EmployeeShowComponent     = () => import(/* webpackChunkName: "client-employee-show" */ './views/employee/ShowComponent');
const EmployeeEditComponent   = () => import(/* webpackChunkName: "client-employee-edit" */ './views/employee/EditComponent');

// Client
const ClientComponent           = () => import(/* webpackChunkName: "client-client-index" */ './views/client/IndexComponent');
const ClientCreateComponent     = () => import(/* webpackChunkName: "client-client-create" */ './views/client/CreateComponent');
const ClientShowComponent       = () => import(/* webpackChunkName: "client-client-show" */ './views/client/ShowComponent');

// Blogs
const BlogComponent             = () => import(/* webpackChunkName: "client-blog-index" */ './views/blog/IndexComponent');
const BlogCreateComponent       = () => import(/* webpackChunkName: "client-blog-create" */ './views/blog/CreateComponent');
const BlogShowComponent         = () => import(/* webpackChunkName: "client-blog-show" */ './views/blog/ShowComponent');

// Referrals
const ReferralComponent         = () => import(/* webpackChunkName: "client-Referral-index" */ './views/referral/IndexComponent');
const ReferralCreateComponent         = () => import(/* webpackChunkName: "client-Referral-create" */ './views/referral/CreateComponent');

// Chat
const ChatComponent             = () => import(/* webpackChunkName: "client.chat" */ './views/chat/ChatComponent');

//reminders
const ReminderComponent         = () => import(/* webpackChunkName: "client.reminder" */ './views/reminder/IndexComponent');

//faqs
const FaqComponent              = () => import(/* webpackChunkName: "client.reminder" */ './views/faq/IndexComponent');

const router = new VueRouter({
    mode: 'history',
    base: `${process.env.NODE_ENV === 'production' ? process.env.MIX_PRODUCTION_BASE : process.env.MIX_BASE_URL}/client/`,
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
            path: '/profile',
            name: 'profile',
            component: ProfileComponent,
            meta: {
                title: "Profile",
                description: ""
            }
        },
        {
            path: '/profile/social-life',
            name: 'profile.social_life',
            component: SocialLifeComponent,
            meta: {
                title: "Social Life",
                description: ""
            }
        },
        {
            path: '/profile/travels',
            name: 'profile.travels',
            component: TravelComponent,
            meta: {
                title: "My Travels",
                description: ""
            }
        },
        {
            path: '/profile/contacts',
            name: 'profile.contacts',
            component: ContactComponent,
            meta: {
                title: "My Contacts",
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
            path: '/task/:id/edit',
            name: 'task.edit',
            component: TaskEditComponent,
            meta: {
                title: "Task - Edit",
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
            path: '/reminders',
            name: 'reminders',
            component: ReminderComponent,
            meta: {
                title: "My Reminders",
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
            path: '/referral/create',
            name: 'referral.create',
            component: ReferralCreateComponent,
            meta: {
                title: "Create Referral",
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
            path: '/faq',
            name: 'faqs',
            component: FaqComponent,
            meta: {
                title: "FAQs",
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
