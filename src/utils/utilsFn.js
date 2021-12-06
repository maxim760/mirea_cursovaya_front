export const toImg = (url = '') => {
  const lastPoint = url.lastIndexOf('.')
  if (lastPoint === -1) {
    return url
  }
  const slashIdx = url.indexOf('/', lastPoint)
  if (slashIdx === -1) {
    return url
  }
  return url.substring(0, slashIdx)
}

export const sx = (classes) => {
  if (Array.isArray(classes)) {
    return classes.filter(Boolean).join(" ")
  }
  if (typeof classes === "object") {
    return Object.keys(classes).filter(key => classes[key]).filter(Boolean).join(" ")
  }
  return classes
}