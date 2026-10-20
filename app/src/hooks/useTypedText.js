import { useEffect, useState } from 'react';

export function useTypedText(strings, options = {}) {
  const typeSpeed = options.typeSpeed ?? 70;
  const backSpeed = options.backSpeed ?? 70;
  const backDelay = options.backDelay ?? 1000;

  const [text, setText] = useState('');

  useEffect(() => {
    if (!strings.length) return undefined;

    let stringIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const current = strings[stringIndex];

      if (!deleting) {
        charIndex += 1;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = window.setTimeout(tick, backDelay);
          return;
        }
        timeoutId = window.setTimeout(tick, typeSpeed);
        return;
      }

      charIndex -= 1;
      setText(current.slice(0, charIndex));
      if (charIndex === 0) {
        deleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
        timeoutId = window.setTimeout(tick, typeSpeed);
        return;
      }
      timeoutId = window.setTimeout(tick, backSpeed);
    };

    timeoutId = window.setTimeout(tick, typeSpeed);
    return () => window.clearTimeout(timeoutId);
  }, [backDelay, backSpeed, strings, typeSpeed]);

  return text;
}
