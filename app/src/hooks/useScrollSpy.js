import { useEffect, useState } from 'react';

/**
 * The active section is the last one, in document order, whose top edge has
 * crossed the `offset` line below the header. Because sections are stacked,
 * exactly one section owns that line at any scroll position, so the result
 * changes only when a boundary crosses it and cannot flicker between
 * neighbours. Work is batched to one measurement per animation frame. At the
 * bottom of the page the last section wins, since it may never reach the line.
 */
export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');
  const [isSticky, setIsSticky] = useState(false);
  const idsKey = sectionIds.join('|');

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    let frame = 0;

    const update = () => {
      frame = 0;
      setIsSticky(window.scrollY > 100);

      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top - offset <= 1) current = section.id;
        else break;
      }
      setActiveId(current);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [idsKey, offset, sectionIds]);

  return { activeId, isSticky };
}
