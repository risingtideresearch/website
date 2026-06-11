export function ExternalLinkIcon({ size = 34 }: { size?: number | string } = {}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: "inline", verticalAlign: "middle" }}
    >
      <path d="M12 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11" />
      <path d="M14.5 9.5L21 3M16 3L21 3L21 8" />
    </svg>
  );
}

export function LeftArrowIcon({ size = 34 }: { size?: number | string } = {}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: "inline", verticalAlign: "middle" }}
    >
      <path d="M16.5 12h-9M11 8.5l-3.5 3.5 3.5 3.5" />
    </svg>
  );
}

export function InternalLinkIcon({ size = 34, style = {} }: { size?: number | string, style?: object } = {}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: "inline", verticalAlign: "middle", ...style }}
    >
      <circle cx="12" cy="12" r="11" />
      <path d="M7.5 12h9M13 8.5l3.5 3.5-3.5 3.5" />
    </svg>
  );
}
