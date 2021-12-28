/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  console.log('👍', 'navigator.serviceWorker is supported');
  navigator.serviceWorker.register('service-worker.js');
}
