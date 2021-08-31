"use strict";
const { insertUserLineStatus } = require("../query/insert_data");
const { updateUserStatusOffline } = require("../query/update_data");
class User_Status {
  socket_init(io) {
    io.on("connection", async (socket) => {
      console.log("user connected");
      const session = socket.request.session;
      console.log("IT's ME: ", session.passport);
      session.connections++;
      session.save();
      if (socket.connected) {
        socket.on("check_status", async (data) => {
          // console.log(session.passport.user);
          if (session.passport) {
            const sessionID = session.passport.user;
            await insertUserLineStatus(sessionID, data.user_status_line);
          } else {
            return console.log("NO user found");
          }
        });
      } else {
        socket.on("check_status", (data) => {
          console.log(data);
        });
      }
      socket.on("disconnect", async () => {
        if (session.passport) {
          const sessionID = session.passport.user;
          await updateUserStatusOffline(sessionID, false);
          console.log("USER DISCONNECTED", session.passport.user);
        }
      });
    });
  }
}

module.exports = { User_Status };
