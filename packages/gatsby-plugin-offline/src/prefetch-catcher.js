self.addEventListener(`message`, async ({ data }) => {
  if (data.type === `prefetch`) {
    const cache = await caches.open(`runtimecache`)
    cache.addAll([data.pathname, ...data.dependencies])
  }
})
