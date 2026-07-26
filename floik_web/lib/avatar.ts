export function getAvatarUrl(profilePicture: string | null | undefined, username: string, xboxId?: string | null): string {
  if (profilePicture) return profilePicture

  if (xboxId) {
    return `https://mc-heads.net/avatar/${username}/64`
  }

  const initial = (username?.[0] || 'U').toUpperCase()
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="#6366f1" width="100" height="100" rx="50"/><text x="50" y="50" text-anchor="middle" dy=".35em" fill="white" font-family="system-ui,sans-serif" font-size="40" font-weight="600">${initial}</text></svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}
