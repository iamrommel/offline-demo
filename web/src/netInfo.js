const netInfo = () => {
  const eventName = navigator && navigator.onLine ? 'online' : 'offline'
  window.dispatchEvent(new Event(eventName))
}


// window.addEventListener('online',  updateIndicator);
// window.addEventListener('offline', updateIndicator);
// updateIndicator();
