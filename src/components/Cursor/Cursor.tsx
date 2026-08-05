import cx from 'classnames';
import css from './Cursor.module.css';

type CursorProps = {
    className?: string;
};

/**
 * A blinking block cursor. The one intentional loop on the site — a text caret blinking
 * is ambient furniture rather than an animation demanding attention.
 */
const Cursor = ({ className }: CursorProps) => <span aria-hidden className={cx(css.cursor, className)} />;

export default Cursor;
