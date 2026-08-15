interface ProgressBarProps {
  ratio: number;
  label?: string;
  className?: string;
}

export function ProgressBar({ ratio, label, className = "" }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(1, ratio));
  const percent = Math.round(clamped * 100);

  return (
    <div className={className}>
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="h-2 w-full overflow-hidden rounded-full bg-paper-raised"
      >
        <div
          className="h-full rounded-full bg-accent transition-[width] motion-reduce:transition-none"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
