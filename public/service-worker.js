/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */

const vapid_public_key =
  "BJuP8sbVtm9fT0gSK4f5QvO67sceVhWmyBftscPnDvMk1JmqoWWDVQEehCikAlaYWJHb0Hsdq_KO-e_JUIYHjGI";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    const notifAcceptStorage = localStorage;

    Notification.requestPermission()
      .then((notifPermission) => {
        if (notifPermission == "granted") {
          navigator.serviceWorker
            .register("/sw.js", { scope: "/" })
            .then(async (registration) => {
              notifAcceptStorage.setItem("notif_state", "process");
              const isNotifGranted = notifAcceptStorage.getItem("notif_state");
              if (isNotifGranted === "process") {
                const subscription = await registration.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: urlBase64ToUint8Array(vapid_public_key),
                });
                fetch("/subscription", {
                  method: "POST",
                  body: JSON.stringify(subscription),
                  headers: {
                    "content-type": "application/json",
                  },
                })
                  .then(async () => {
                    notifAcceptStorage.setItem("notif_state", "done");
                    await registration.update();
                  })
                  .catch((err) => console.error(err));
              } else {
                console.log("notif already subscribed");
              }
            })
            .catch((err) => {
              //FAILED
              console.log("ServiceWorker registration failed: ", err);
            });
        } else if (notifPermission === "denied") {
          alert("Notification is Off");
        }
      })
      .catch((err) => console.log(err));
  });
}

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
