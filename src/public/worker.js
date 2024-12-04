console.log("Service Worker");

self.addEventListener('push', e => {
    const data = e.data.json()
    console.log(data)
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://i.pinimg.com/736x/58/b0/88/58b088ad4b6d6c4403170a5cb44ab5a2.jpg'
    });
});