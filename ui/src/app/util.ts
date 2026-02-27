export function formatDate(d: string) {
  const time = new Date(d);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return time.toLocaleDateString("en-CA", options);
}
