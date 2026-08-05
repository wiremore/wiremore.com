import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+-<>/\\|=';
const DURATION = 460;

type DecodeTextProps = {
    text: string;
    /** Milliseconds to wait before starting. Used to stagger stacked lines. */
    delay?: number;
    as?: 'span' | 'h1' | 'h2';
    className?: string;
};

const scramble = (source: string, revealed: number) =>
    source
        .split('')
        .map((character, index) => {
            if (index < revealed || character === ' ') {
                return character;
            }

            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join('');

/**
 * Resolves a headline out of noise, once, on load — a signal locking in.
 *
 * The real text is what renders server-side and what assistive technology reads; the
 * scrambling only ever happens after hydration and only when motion is welcome.
 */
const DecodeText = ({ text, delay = 0, as: Element = 'span', className }: DecodeTextProps) => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [displayed, setDisplayed] = useState(text);
    const frame = useRef<number | null>(null);

    useEffect(() => {
        if (prefersReducedMotion) {
            setDisplayed(text);

            return undefined;
        }

        let start: number | null = null;
        let timeout: ReturnType<typeof setTimeout>;

        const step = (now: number) => {
            start ??= now;

            const progress = Math.min((now - start) / DURATION, 1);
            // Ease-out so the last characters land in quick succession rather than
            // trickling — the difference between "locking on" and "loading".
            const eased = 1 - (1 - progress) ** 3;

            setDisplayed(scramble(text, Math.floor(eased * text.length)));

            if (progress < 1) {
                frame.current = requestAnimationFrame(step);
            } else {
                setDisplayed(text);
            }
        };

        setDisplayed(scramble(text, 0));
        timeout = setTimeout(() => {
            frame.current = requestAnimationFrame(step);
        }, delay);

        return () => {
            clearTimeout(timeout);

            if (frame.current !== null) {
                cancelAnimationFrame(frame.current);
                frame.current = null;
            }
        };
    }, [delay, prefersReducedMotion, text]);

    return (
        <Element aria-label={displayed === text ? undefined : text} className={className}>
            <span aria-hidden={displayed === text ? undefined : true}>{displayed}</span>
        </Element>
    );
};

export default DecodeText;
