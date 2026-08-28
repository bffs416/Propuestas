import { cn } from '@/lib/utils';

export const NyvaraLogo = ({
  className,
  smallText = false,
}: {
  className?: string;
  smallText?: boolean;
}) => (
  <div
    className={cn(
      'bg-slate-900 rounded-lg flex items-center justify-center',
      className
    )}
  >
    <span
      className={cn(
        'text-white font-bold',
        smallText ? 'text-[8px]' : 'text-sm'
      )}
    >
      N
    </span>
  </div>
);
