
import HomePage from '../pages/self-care-entry-main.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';
import Entrypage1 from '../pages/self-care-entry-1.f7';
import Entrypage2 from '../pages/self-care-entry-2.f7';
import Entrypage3 from '../pages/self-care-entry-3.f7';
import Entrypage4 from '../pages/self-care-sign-in.f7';
import Entrypage5 from '../pages/self-care-sign-up.f7';
import Entrypage6 from '../pages/self-care-OTP-page.f7';
import Home1 from '../pages/self-care-home.f7';
import Home2 from '../pages/self-care-doc-page.f7';
import doctorlist from '../pages/self-care-doc-list.f7';
import alldoctorpage from '../pages/self-care-all-doc-page.f7';
import appointmentpage from '../pages/self-care-appointment-page.f7';
import paymentpage from '../pages/self-care-payment-select.f7';
import chatlistpage from '../pages/self-care-doc-chat-list.f7';
import chatpage from '../pages/self-care-doc-chat-page.f7';
import reciptpage from '../pages/self-care-recipt-page.f7';



import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/entry1/',
    component: Entrypage1,
  },
  {
    path: '/entry2/',
    component: Entrypage2,
  },
  {
    path: '/entry3/',
    component: Entrypage3,
  },
  {
    path: '/entry3/',
    component: Entrypage3,
  },
  {
    path: '/entry4/',
    component: Entrypage4,
  },
  {
    path: '/entry5/',
    component: Entrypage5,
  },
  {
    path: '/entry6/',
    component: Entrypage6,
  },
  {
    path: '/home/', //home
    component: Home1,
  },
  {
    path: '/doctor/:id',
    component: Home2,
  },
  {
    path: '/all-doc-list/', //all-doc-list
    component: doctorlist,
  },
  {
    path: '/all-doc-page/',
    component: alldoctorpage,
  },
  {
    path: '/appointment-page/',
    component: appointmentpage,
  },
  {
    path: '/payment-select/',
    component: paymentpage,
  },
  {
    path: '/chat-list/',
    component: chatlistpage,
  },
  {
    path: '/chat-page/',
    component: chatpage,
  },
  {
    path: '/recipt-page/',
    component: reciptpage,
  },
  
  
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
