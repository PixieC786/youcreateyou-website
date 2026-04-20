import clsx from 'clsx'

interface SectionLabelProps {
  text: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export default function SectionLabel({ text, align = 'center', className }: SectionLabelProps) {
  return (
    <div
      className={clsx(
        'label-line',
        align === 'left'  && 'label-left',
        align === 'right' && 'label-right',
        className,
      )}
    >
      {text}
    </div>
  )
}
