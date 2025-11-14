import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
  variant?: 'primary' | 'secondary'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function StudioButton({
  invert = false,
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-6 py-3 text-base font-semibold transition',
    variant === 'primary' && !invert && 'bg-neutral-950 text-white hover:bg-neutral-800',
    variant === 'primary' && invert && 'bg-white text-neutral-950 hover:bg-neutral-200',
    variant === 'secondary' && 'bg-transparent border-2 border-neutral-950 text-neutral-950 hover:bg-neutral-50',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props as React.ComponentPropsWithoutRef<'button'>}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props as React.ComponentPropsWithoutRef<typeof Link>}>
      {inner}
    </Link>
  )
}
