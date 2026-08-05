import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Reports whether the visitor has asked for reduced motion.
 *
 * Deliberately returns `true` before hydration. Every animation in this codebase is an
 * enhancement over a correct static state, so assuming "reduced" on the server means the
 * markup Next renders is the finished one — good for crawlers, and no flash of scrambled
 * text for anyone whose JavaScript is slow or absent.
 */
export const usePrefersReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia(QUERY);

        setPrefersReducedMotion(mediaQuery.matches);

        const onChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);

        mediaQuery.addEventListener('change', onChange);

        return () => mediaQuery.removeEventListener('change', onChange);
    }, []);

    return prefersReducedMotion;
};
