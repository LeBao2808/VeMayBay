import { createRouter, createWebHistory } from 'vue-router'
import layout1 from '../components/layout/layout1.vue'
import LayoutBlankVue from '@/components/layout/LayoutBlank.vue';
import LayoutElementVue from '@/components/layout/LayoutElement.vue';
import Cookies from 'js-cookie';
import LoginView from '../views/Auth/LoginView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'
import ResetPasswordView from '../views/Auth/ResetPasswordView.vue'
import AdminView from '../views/Auth/AdminView.vue'
import LayoutMenu from '../components/layout/LayoutMenuDoc.vue'
import User from '../views/User/Index.vue'
import layout1Vue from '../components/layout/layout1.vue';
import Airlines from '@/views/Auth/Airlines/Airlines.vue';
import CustomersVue from '@/views/Auth/Customers/Customers.vue';
import FeedbackAndReviewsVue from '@/views/Auth/FeedbackAndReviews/FeedbackAndReviews.vue';
import FlightVue from '@/views/Auth/Flights/Flights.vue';
import PayVue from '@/views/Auth/Payments/Payments.vue';
import PromotionVue from '@/views/Auth/Promotions/Promotions.vue';
import HomeALVue from '@/views/Home/HomeAL.vue';
import FlightScheduleVue from '@/views/Home/FlightSchedules.vue';
import BookingsVue from '@/views/Auth/Bookings/Bookings.vue';
import TicketsVue from '@/views/Auth/Tickets/Tickets.vue';
import ConTact from '@/views/SecondaryPage/ConTact.vue';
import CustomerInformation from '@/views/Home/CustomerInformation.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component:LoginView,
    },
    
   
        {
          path: "/reset",
          component: ResetPasswordView,
        },
        {
          path: '/Auth',
          component:RegisterView,
        },
        {
          path: '/Contact',
          component:ConTact,
        },

    {
      path: '/Home',
      component:HomeALVue,
        meta: { requiresAuth: true }, 
    },

    {
      path: '/Home/:startingPoint/:endingPoint', // Thêm endingPoint vào đường dẫn
      name: 'FlightSchedule', // Đặt tên cho route này
      component: FlightScheduleVue,
      meta: { requiresAuth: true }, 
    },
    {
      path: '/CustomersInformation/:startingPoint/:endingPoint/:ticketPrice', // Đường dẫn của route
      name: 'CustomerInformation', // Tên của route
      component: CustomerInformation, // Component Vue để render cho route này
      props: true, // Nếu bạn
    },
    
    
    {
      path: '/',
      component: LayoutMenu,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: 'User',
          component:User,
        },
       
        {
          path: 'Airlines',
          component:Airlines,
        },
        {
          path: 'Customers',
          component:CustomersVue,
        },
        {
          path: 'Bookings',
          component:BookingsVue,
        },
        
        {
          path: 'FeedbackAndReviews',
          component:FeedbackAndReviewsVue,
        },
        {
          path: 'Flights',
          component:FlightVue,
        },
        {
          path: 'Payments',
          component:PayVue,
        },
        {
          path: 'Promotions',
          component:PromotionVue,
        },
        {
          path: 'Tickets',
          component:TicketsVue,
        },
      ],
    },
    



    



  ]
})

export default router