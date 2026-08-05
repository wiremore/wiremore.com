import cx from 'classnames';
import { FRAMES, VIEW_BOX } from './frames';
import css from './Logo.module.css';

type LogoProps = {
    /** Accessible name. Pass null when an adjacent element already names the link. */
    title?: string | null;
    /** Plays the power-on burst once. Only the header logo should do this. */
    animated?: boolean;
    className?: string;
};

const Logo = ({ title = 'wiremore', animated = false, className }: LogoProps) => (
    <svg
        aria-hidden={title === null ? true : undefined}
        className={cx(css.logo, animated && css.powerOn, className)}
        role={title === null ? undefined : 'img'}
        shapeRendering="geometricPrecision"
        viewBox={VIEW_BOX}
        xmlns="http://www.w3.org/2000/svg"
    >
        {title !== null && <title>{title}</title>}
        {FRAMES.map((frame) => (
            <path className={css.frame} d={frame.d} key={frame.transform} transform={frame.transform} />
        ))}
    </svg>
);

export default Logo;
