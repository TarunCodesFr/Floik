import { formatDistanceToNow } from 'date-fns';

export function safeFormatDistance(dateStr: string | undefined | null, options?: any): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '';
    return formatDistanceToNow(date, options);
  } catch {
    return '';
  }
}
