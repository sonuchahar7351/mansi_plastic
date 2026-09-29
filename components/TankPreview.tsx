import { COLOUR_HEX, type ColourName } from "@/types/company";

export default function TankPreview({ colour }: { colour: ColourName }) {
  const shape =
    "M30 60 Q30 30 100 30 Q170 30 170 60 V225 Q170 240 100 240 Q30 240 30 225Z";
  return (
    <svg
      viewBox="0 0 200 260"
      role="img"
      aria-label={`${colour} water tank`}
      className="h-auto w-56 sm:w-64"
    >
      <defs>
        <clipPath id="tank-clip">
          <path d={shape} />
        </clipPath>
      </defs>
      <path
        d={shape}
        fill={COLOUR_HEX[colour]}
        stroke="currentColor"
        strokeWidth={3}
        className="transition-[fill] duration-300"
      />
      <g clipPath="url(#tank-clip)">
        <rect
          x={20}
          y={120}
          width={160}
          height={130}
          className="animate-fill fill-sky-600 opacity-35"
        />
      </g>
      <rect x={82} y={14} width={36} height={16} rx={4} fill="currentColor" />
      <path
        d="M30 100 H170 M30 160 H170"
        stroke="currentColor"
        strokeOpacity={0.25}
        strokeWidth={2}
      />
    </svg>
  );
}
