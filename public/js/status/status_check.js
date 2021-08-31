/* eslint-disable no-undef */
const socket = io();

socket.on("connect", () => {
  if (socket.connected) {
    const status_data = {
      user_status_line: true,
      user_status_idle: "Idle",
    };
    socket.emit("check_status", status_data);
  } else {
    const status_data = {
      user_status_line: false,
      user_status_idle: "Idle",
    };
    socket.emit("check_status", status_data);
    console.log("User Disconnected");
  }
});
socket.on("disconnect", () => {
  const status_data = {
    user_status_line: false,
    user_status_idle: "Idle",
  };
  socket.emit("check_status", status_data);
  console.log("User Disconnected");
});
