interface StepDotsProps {
  total: number;
  current: number;
}

export function StepDots({ total, current }: StepDotsProps) {
  return (
    <div className="flex items-center gap-1.5" role="presentation">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all motion-reduce:transition-none ${
            i === current ? "w-5 bg-accent" : i < current ? "w-1.5 bg-accent/50" : "w-1.5 bg-line"
          }`}
        />
      ))}
    </div>
  );
}
