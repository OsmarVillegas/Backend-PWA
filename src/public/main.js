const PUBLIC_VAPID_KEY =
  "BBxLyh0vFImcZG65K6F4wZv17fbd501Jm1gxxuQLOJCsk6Pq3xJP_wmV9_vgqTcVk-l1-wadN3spEApWaWgASYE";

const form = document.querySelector("#myform");
const message = document.querySelector("#message");
console.log(message.value);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("/new-message", {
    method: "POST",
    body: JSON.stringify({
      message: message.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  form.reset();
});

const subscription = async () => {
  const register = await navigator.serviceWorker.register("./worker.js", {
    scope: "/",
  });
  console.log("New Service Worker");

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: PUBLIC_VAPID_KEY,
  });

  await fetch("https://backend-pwa-3o91.onrender.com/subscription", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("Suscribed!!");
};

subscription();
