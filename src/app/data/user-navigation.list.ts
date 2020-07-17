// user-navigation.list.ts
export function UserNavigationList(){
  return {
    active: true,
    unauthenticated: [
      {
        active: true,
        label: 'Login',
        link: 'login'
      },
      {
        active: true,
        label: 'Register',
        link: 'register'
      }
    ],
    authenticated: [
      {
        active: true,
        label: 'Pofile',
        link: 'profile'
      },
      {
        active: false,
        label: 'Saved events',
        link: 'saved-events'
      },
      {
        active: false,
        label: 'Saved articles',
        link: 'saved-articles'
      }
    ]
  }
};
