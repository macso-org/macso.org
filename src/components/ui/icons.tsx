import type { SVGProps } from 'react'

function StrokeIcon({
  strokeWidth = 2.2,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      aria-hidden="true"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  )
}

export function PencilIcon() {
  return (
    <StrokeIcon>
      <path d="M17 3l4 4L8 20l-5 1 1-5z" />
    </StrokeIcon>
  )
}

export function ChatIcon() {
  return (
    <StrokeIcon>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
    </StrokeIcon>
  )
}

export function ArrowRightIcon() {
  return (
    <StrokeIcon strokeWidth={2.4}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </StrokeIcon>
  )
}

export function MailIcon() {
  return (
    <StrokeIcon>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </StrokeIcon>
  )
}

export function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function WebsiteIcon() {
  return (
    <StrokeIcon width="20" height="20" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.7 2.6 3.8 6 3.8 9s-1.1 6.4-3.8 9c-2.7-2.6-3.8-6-3.8-9S9.3 5.6 12 3z" />
    </StrokeIcon>
  )
}
