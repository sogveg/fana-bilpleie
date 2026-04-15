"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  label?: string;
}

export default function BeforeAfter({
  before,
  after,
  beforeAlt = "Før behandling",
  afterAlt = "Etter behandling",
  label,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => setDragging(true);
  const onMouseUp = () => setDragging(false);
  const onMouseMove = (e: React.MouseEvent) => { if (dragging) updatePosition(e.clientX); };
  const onTouchMove = (e: React.TouchEvent) => updatePosition(e.touches[0].clientX);

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <div className="flex justify-between text-xs font-bold tracking-widest uppercase text-gray-500">
          <span className="text-gray-400">FØR</span>
          <span className="text-[#d24208]">{label}</span>
          <span className="text-[#d24208]">ETTER</span>
        </div>
      )}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden cursor-ew-resize select-none"
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
      >
        {/* AFTER (bottom layer, full width) */}
        <Image
          src={after}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* BEFORE (top layer, clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={before}
            alt={beforeAlt}
            fill
            className="object-cover"
            style={{ width: `${10000 / position}%`, maxWidth: "none" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]"
          style={{ left: `${position}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize z-10"
          style={{ left: `${position}%` }}
          onMouseDown={onMouseDown}
          onTouchStart={() => setDragging(true)}
          onTouchEnd={() => setDragging(false)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" stroke="#d24208" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Labels */}
        <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1">
          FØR
        </span>
        <span className="absolute bottom-3 right-3 bg-[#d24208] text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1">
          ETTER
        </span>
      </div>
    </div>
  );
}
