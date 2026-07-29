export function getSiteBase() {
  if (typeof window === 'undefined') {
    return '/'
  }

  const pathname = window.location.pathname || '/'
  return pathname.includes('/Personal-Website/') ? '/Personal-Website/' : '/'
}

export function resolveSitePath(path) {
  if (!path) {
    return path
  }

  if (/^https?:\/\//.test(path) || path.startsWith('data:') || path.startsWith('mailto:')) {
    return path
  }

  const normalizedPath = path.replace(/^\/+/, '')
  return `${getSiteBase()}${normalizedPath}`
}
