import cx from 'classnames';
import { Client, SectorId } from '@/config/clients';
import css from './ClientWall.module.css';

type ClientWallProps = {
    clients: Client[];
    /** When set, clients in this sector come up in colour and the rest recede. */
    highlighted?: SectorId | null;
};

const ClientWall = ({ clients, highlighted = null }: ClientWallProps) => (
    <ul className={cx(css.wall, highlighted && css.filtering)}>
        {clients.map((client) => {
            const isMatch = highlighted !== null && client.sectors.includes(highlighted);

            return (
                <li className={cx(css.cell, highlighted !== null && (isMatch ? css.match : css.miss))} key={client.file}>
                    <img
                        alt={client.name}
                        className={css.logo}
                        loading="lazy"
                        src={`/assets/clients/${client.file}`}
                    />
                </li>
            );
        })}
    </ul>
);

export default ClientWall;
