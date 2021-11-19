const routeList = {
  event: {
    images: '/event/:id/image',
    add: '/event/add',
    view: '/event/view',
    edit: '/event/edit/:id',
  },
  user: {
    add: '/user',
    view: '/user/view',
  },
  profile: {
    view: '/profile',
    updatePassword: '/profile/change-password',
  },
};

export default routeList;
