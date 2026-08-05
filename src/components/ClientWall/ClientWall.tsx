import { Client } from '@/config/clients';
import css from './ClientWall.module.css';

type ClientWallProps = {
    clients: Client[];
};

const ClientWall = ({ clients }: ClientWallProps) => (
    <ul className={css.wall}>
        {clients.map((client) => (
            <li className={css.cell} key={client.file}>
                <img alt={client.name} className={css.logo} loading="lazy" src={`/assets/clients/${client.file}`} />
            </li>
        ))}
    </ul>
);

export default ClientWall;
