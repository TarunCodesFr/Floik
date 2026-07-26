const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
export const API_URL = API_BASE.startsWith('http') ? API_BASE : `https://${API_BASE}`;

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function apiFetch(path: string, options?: RequestInit) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    credentials: 'include' // Default to our secure cookies
  });
  
  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new ApiError(res.status, error.error || 'Request failed');
  }
  
  // Handing No-Content
  if (res.status === 204) return null;
  
  return res.json();
}
