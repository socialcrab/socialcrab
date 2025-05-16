const navigation = () => {
  return [
    {
      icon: 'mdi:home-outline',
      title: 'Home',
      path: '/dashboard'
    },
    {
      sectionTitle: 'Dashboard'
    },
    {
      title: 'My Profile',
      icon: 'iconamoon:profile',
      path: '/my-profile'
    },
    {
      title: 'Search History',
      icon: 'mdi:chart-line',
      path: '/search-history'
    },
    {
      sectionTitle: 'Analytics Tools'
    },
    {
      title: 'Instagram Profile',
      icon: 'mdi:instagram',
      path: '/instagram-profile'
    },

    {
      title: 'Instagram Hashtag',
      icon: 'mdi:instagram',
      path: '/instagram-hashtag'
    },
    {
      title: 'TikTok Profile',
      icon: 'akar-icons:tiktok-fill',
      path: '/tiktok-profile'
    },
    {
      title: 'TikTok Hashtag',
      icon: 'akar-icons:tiktok-fill',
      path: '/tiktok-hashtag'
    }
  ]
}

export default navigation
