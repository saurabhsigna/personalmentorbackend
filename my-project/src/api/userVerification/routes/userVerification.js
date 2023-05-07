module.exports = {
  routes: [
    {
      method: "POST",
      path: "/users/updateuser",
      handler: "uploadinfo.uploadinfo",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/users/buyedcourses",
      handler: "buyedcourses.buyedcourses",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/users/register",
      handler: "register.register",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
