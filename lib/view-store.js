const globalStore = globalThis;

if (!globalStore.__blogViewCounts) {
  globalStore.__blogViewCounts = {};
}

const viewCounts = globalStore.__blogViewCounts;

export function getViewCount(slug, fallback = 0) {
  if (typeof viewCounts[slug] !== "number") {
    viewCounts[slug] = fallback;
  }

  return viewCounts[slug];
}

export function incrementViewCount(slug, fallback = 0) {
  const current = getViewCount(slug, fallback);
  viewCounts[slug] = current + 1;
  return viewCounts[slug];
}
