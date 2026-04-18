import { useEffect, useState } from "react";

type UseCountUpOptions = {
  delay?: number;
  decimals?: number;
  start?: boolean;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function buildCountUpSequence(target: number, decimals: number) {
  const multiplier = 10 ** decimals;
  const totalUnits = Math.max(0, Math.round(target * multiplier));

  if (totalUnits === 0) {
    return [0];
  }

  if (decimals > 0 && target < 10) {
    return Array.from({ length: totalUnits + 1 }, (_, index) => index / multiplier);
  }

  if (decimals === 0 && target <= 20) {
    return Array.from({ length: totalUnits + 1 }, (_, index) => index);
  }

  const coarseFrames = 42;
  const slowTailUnits = decimals === 0 ? Math.min(20, totalUnits) : Math.min(10 * multiplier, totalUnits);
  const coarseLimit = Math.max(0, totalUnits - slowTailUnits);
  const sequence = new Set<number>([0]);

  for (let frame = 1; frame <= coarseFrames; frame += 1) {
    const progress = frame / coarseFrames;
    const eased = 1 - Math.pow(1 - progress, 3);
    const units = Math.round(eased * coarseLimit);
    sequence.add(units / multiplier);
  }

  for (let units = coarseLimit; units <= totalUnits; units += 1) {
    sequence.add(units / multiplier);
  }

  return Array.from(sequence).sort((left, right) => left - right);
}

export function useCountUp(
  target: number,
  duration: number,
  options: UseCountUpOptions = {},
) {
  const { delay = 0, decimals = 0, start = true } = options;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }

    let frameId = 0;
    let timeoutId = 0;
    const safeDuration = Math.max(duration, 0);
    const sequence = buildCountUpSequence(target, decimals);
    const lastIndex = Math.max(0, sequence.length - 1);

    const animate = (startTime: number) => {
      const tick = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = safeDuration === 0 ? 1 : Math.min(elapsed / safeDuration, 1);
        const nextIndex = clamp(Math.floor(progress * lastIndex), 0, lastIndex);

        setValue(sequence[nextIndex] ?? target);

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick);
        } else {
          setValue(target);
        }
      };

      frameId = window.requestAnimationFrame(tick);
    };

    timeoutId = window.setTimeout(() => {
      animate(performance.now());
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
    };
  }, [decimals, delay, duration, start, target]);

  return value;
}
