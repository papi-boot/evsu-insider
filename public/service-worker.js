/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
window.addEventListener("load", () => {
  const notifStorage = localStorage;
  const vapid_public_key =
    "BJuP8sbVtm9fT0gSK4f5QvO67sceVhWmyBftscPnDvMk1JmqoWWDVQEehCikAlaYWJHb0Hsdq_KO-e_JUIYHjGI";
  const getNotifiedBanner = document.querySelector(".notification__permission");
  const btnGetNotify = document.querySelector(".btn__get-notified");
  const loadingSpinner = document.querySelector(".loading-spinner");

  if (!("serviceWorker" in navigator)) {
    console.log("Your browser is not supported with this type of notification");
  } else {
    console.log("Browser is Supported");
    const registerServiceWorker = async () => {
      console.log("Registering Service Worker");
      const subscription = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      return subscription;
    };
    registerServiceWorker()
      .then(async (registration) => {
        if (registration.installing) {
          return;
        } else if (registration.waiting) {
          return;
        } else if (registration.active) {
          const notifState = notifStorage.getItem("notif_state");
          if (!notifState) {
            getNotifiedBanner.classList.add("slide-up");
            await activateNotification(registration);
          } else if (notifState === "allowed") {
            await notifAlwaysCheck(registration);
          } else {
            return;
          }
        }
      })
      .catch((err) => console.error("Error: ", err));

    const activateNotification = async (reg) => {
      btnGetNotify.addEventListener("click", () => {
        loadingSpinner.classList.remove("d-none");
        notifStorage.setItem("notif_state", "allowed");
        Notification.requestPermission()
          .then(async (permission) => {
            if (permission == "granted") {
              const addSubscription = await reg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(vapid_public_key),
              });
              const isSubscribed = await fetch("/subscription", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(addSubscription),
              });
              if (isSubscribed.ok) {
                getNotifiedBanner.classList.remove("slide-up");
              }
            }else{
              alert("You'll no longer receive any new updates from Insider Hub.");
            }
          })
          .catch((err) => console.error(err));
      });
    };

    //run on background always to check
    const notifAlwaysCheck = async (reg) => {
      Notification.requestPermission()
        .then(async (permission) => {
          if (permission == "granted") {
            const addSubscription = await reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(vapid_public_key),
            });
            const isSubscribed = await fetch("/subscription", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(addSubscription),
            });
            if (isSubscribed.ok) {
              getNotifiedBanner.classList.remove("slide-up");
            }
          }
        })
        .catch((err) => console.error(err));
    };
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
  }
});
