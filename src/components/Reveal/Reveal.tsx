import { ElementType, ReactNode, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import css from './Reveal.module.css';

type RevealProps = {
    children: ReactNode;
    /** Stagger in milliseconds, applied as an animation-delay. */
    delay?: number;
    as?: ElementType;
    className?: string;
};

/**
 * Lifts content 8px into place as it scrolls in.
 *
 * Starts revealed and is switched to hidden on mount, so the content stays visible when
 * JavaScript never runs. The observer disconnects after firing — this is a first-sight
 * effect, not something that should replay every time you scroll past.
 */
const Reveal = ({ children, delay = 0, as: Element = 'div', className }: RevealProps) => {
    const ref = useRef<HTMLElement>(null);
    const [state, setState] = useState<'static' | 'pending' | 'revealed'>('static');

    useEffect(() => {
        const node = ref.current;

        if (!node || typeof IntersectionObserver === 'undefined') {
            return undefined;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return undefined;
        }

        setState('pending');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setState('revealed');
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <Element
            className={cx(css.reveal, state === 'pending' && css.pending, state === 'revealed' && css.revealed, className)}
            ref={ref}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </Element>
    );
};

export default Reveal;
