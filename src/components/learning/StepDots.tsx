interface StepDotsProps {
  total: number;
  current: number;
}

export function StepDots({ total, current }: StepDotsProps) {
  return (
    <div
      className="flex items-center gap-1.5"
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={current + 1}
      aria-label={`Étape ${current + 1} sur ${total}`}
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className={`h-1.5 rounded-full transition-[width,background-color] motion-ui ${
            i === current ? "w-5 bg-accent" : i < current ? "w-1.5 bg-accent/50" : "w-1.5 bg-line"
          }`}
        />
      ))}
    </div>
  );
}
