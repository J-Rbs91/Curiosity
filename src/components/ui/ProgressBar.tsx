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
        className="h-2 w-full overflow-hidden rounded-full bg-track"
      >
        {/*
         * La progression est lue au montage : la barre part de zéro et rejoint
         * sa valeur. Le remplissage n'est pas décoratif — c'est ce qui rend la
         * grandeur perceptible, là où une barre déjà pleine ne se compare
         * qu'aux autres. Courbe linéaire : une progression n'accélère pas.
         */}
        <div
          className="h-full rounded-full bg-ink-soft transition-[width] duration-[var(--dur-mark)] ease-linear"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
