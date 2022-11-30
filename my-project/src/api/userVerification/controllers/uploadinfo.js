"use strict";
const jwt = require("jsonwebtoken");

module.exports = {
  uploadinfo: async (ctx, next) => {
    const { name, address, mobileNum, age, currentClass } = ctx.request.body;
    let token = ctx.request.headers.authorization;
    token = token.split(" ");
    token = token[1];
    var id;
    let response ;

    jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
      if (decoded.id) {
        id = decoded.id;
      }
    });
    try {
      await strapi.entityService
        .findOne("plugin::users-permissions.user", id, {
          fields: ["isVerified", "username"],
        })
        .then(async (res) => {
          if (
            currentClass &&
            age &&
            name &&
            address &&
            mobileNum &&
            !res.isVerified
          ) {
            await strapi.entityService.update(
              "plugin::users-permissions.user",
              res.id,
              {
                data: {
                  age,
                  class: currentClass,
                  address,
                  role:2,
                  fullName: name,
                  mobileNumber: mobileNum,
                  isVerified: true,
                  confirmed:true
                },
              }
            );
            response = "success"
          }
          else if(!res.verified){
            response = "enter every property"
          }
          if (res.isVerified) {
            response = "you are verified "
          }
        });
        ctx.body = response
    } catch (err) {
      ctx.body = err;
    }
  },
};
