/* eslint-disable no-undef */
self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log(data);
  self.registration.showNotification(
    data.title, // title of the notification
    {
      body: `A new post was added. Check out now.`, //the body of the push notification
      image: "/public/assets/common/notif-image-1600x1100-01.png",
      icon: "/assets/common/notif-icon-512x512.png", // icon
      badge: "/public/assets/common/notif-badge-128x128-01.png",
      vibrate: [
        500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110,
        170, 40, 500,
      ],
    }
  );
});
self.addEventListener('notificationclick', function(event) {
  const clickedNotification = event.notification;
  clickedNotification.close();

  // Do something as the result of the notification click
  const promiseChain = clients.openWindow("/dashboard");
  event.waitUntil(promiseChain);
});