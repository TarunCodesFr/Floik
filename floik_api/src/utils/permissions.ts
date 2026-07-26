export function hasPermission(user: any, required: string): boolean {
  if (!user) return false
  if (user.role === 'ADMIN') return true

  const perms = getUserPermissions(user)
  if (perms.includes('*')) return true
  if (perms.includes(required)) return true

  const parts = required.split(':')
  for (let i = parts.length; i > 0; i--) {
    const wildcard = [...parts.slice(0, i - 1), '*'].join(':')
    if (perms.includes(wildcard)) return true
  }

  return false
}

export function getUserPermissions(user: any): string[] {
  if (!user?.userRoles) return []
  const set = new Set<string>()
  for (const ur of user.userRoles) {
    if (ur.role?.permissions && Array.isArray(ur.role.permissions)) {
      for (const p of ur.role.permissions) {
        if (typeof p === 'string') set.add(p)
      }
    }
  }
  return [...set]
}
