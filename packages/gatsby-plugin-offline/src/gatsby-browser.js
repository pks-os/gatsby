exports.registerServiceWorker = () => true

exports.onPrefetchPathname = pathData => {
  if (`serviceWorker` in navigator) {
    navigator.serviceWorker.controller.postMessage({
      type: `prefetch`,
      ...pathData,
    })
  }
}
