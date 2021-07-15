self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log(data);
  self.registration.showNotification(
    data.title, // title of the notification
    {
      body: `A new post was added by ${data.from_user}. Check out now.`, //the body of the push notification
      image:
        "/assets/common/insiderhub-logo.svg",
      icon: "/assets/common/bell.png", // icon
    }
  );
});
