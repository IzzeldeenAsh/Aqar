
const menu_data = [
  {
    id: 1,
    name: {
      ar: 'الرئيسية',
      en: 'Home'
    },
    link: {
      ar: '/ar',
      en: '/'
    },
    has_dropdown: false,
  },
  // {
  //   id: 2,
  //   name: {
  //     ar: 'المتجر',
  //     en: 'Shop'
  //   },
  //   link: {
  //     ar: '/ar/shop',
  //     en: '/shop'
  //   },
  //   has_dropdown: false,
  // },
  // Uncomment if needed
  // {
  //   id: 3,
  //   name: {
  //     ar: 'المدونة',
  //     en: 'Blog'
  //   },
  //   link: {
  //     ar: '/ar/blog',
  //     en: '/blog'
  //   },
  //   has_dropdown: true,
  //   dropdown_menus: [
  //     { title: { ar: 'صورة كبيرة', en: 'Big image' }, link: { ar: '/ar/blog', en: '/blog' } },
  //     { title: { ar: 'شريط جانبي على اليمين', en: 'Right sidebar' }, link: { ar: '/ar/blog-right-sidebar', en: '/blog-right-sidebar' } },
  //     { title: { ar: 'شريط جانبي على اليسار', en: 'Left sidebar' }, link: { ar: '/ar/blog-left-sidebar', en: '/blog-left-sidebar' } },
  //     { title: { ar: 'منشور مفرد', en: 'Single Post' }, link: { ar: '/ar/blog-details', en: '/blog-details' } },
  //   ]
  // },
  // {
  //   id: 4,
  //   name: {
  //     ar: 'صفحات',
  //     en: 'Pages'
  //   },
  //   link: {
  //     ar: '/ar/about',
  //     en: '/about'
  //   },
  //   has_dropdown: true,
  //   dropdown_menus: [
  //     { title: { ar: 'موقع المتجر الأول', en: 'Shop Location One' }, link: { ar: '/ar/shop-location', en: '/shop-location' } },
  //     { title: { ar: 'موقع المتجر الثاني', en: 'Shop Location Two' }, link: { ar: '/ar/shop-location-2', en: '/shop-location-2' } },
  //     { title: { ar: 'الأسئلة الشائعة', en: 'FAQs' }, link: { ar: '/ar/faq', en: '/faq' } },
  //     { title: { ar: 'الدفع', en: 'Checkout' }, link: { ar: '/ar/checkout', en: '/checkout' } },
  //     { title: { ar: 'صفحة السلة', en: 'Cart Page' }, link: { ar: '/ar/cart', en: '/cart' } },
  //     { title: { ar: 'صفحة المقارنة', en: 'Compare Page' }, link: { ar: '/ar/compare', en: '/compare' } },
  //     { title: { ar: 'قائمة الرغبات', en: 'Wishlist' }, link: { ar: '/ar/wishlist', en: '/wishlist' } },
  //     { title: { ar: 'تسجيل الدخول', en: 'Sign In' }, link: { ar: '/ar/login', en: '/login' } },
  //     { title: { ar: 'قريبًا', en: 'Coming soon' }, link: { ar: '/ar/coming-soon', en: '/coming-soon' } },
  //     { title: { ar: 'صفحة 404', en: 'Page 404' }, link: { ar: '/ar/404', en: '/404' } },
  //   ]
  // },
  {
    id: 5,
    name: {
      ar: 'من نحن',
      en: 'About Us'
    },
    link: {
       ar: '/ar/#about',
      en: '/#about'
    },
  },
  {
    id: 6,
    name: {
      ar: 'اتصل بنا',
      en: 'Contact Us'
    },
    link: {
      ar: '/ar/#contact',
      en: '/#contact'
    },
  },
]

export default menu_data;

// mobile menus 
export const mobile_menus = [
  {
    id: 1,
    name: {
      ar: 'الرئيسية',
      en: 'Home'
    },
    link: {
      ar: '/ar',
      en: '/'
    },
    has_dropdown: false,
  },
  // {
  //   id: 2,
  //   name: {
  //     ar: 'المتجر',
  //     en: 'Shop'
  //   },
  //   link: {
  //     ar: '/ar/shop',
  //     en: '/shop'
  //   },
  //   has_dropdown: false,
  // },
  {
    id: 6,
    name: {
      ar: 'من نحن',
      en: 'About Us'
    },
    link: {
      ar: '/ar/#about',
      en: '/#about'
    },
  },
  {
    id: 7,
    name: {
      ar: 'اتصل بنا',
      en: 'Contact Us'
    },
    link: {
      ar: '/ar/#contact',
      en: '/#contact'
    },
  },
]
