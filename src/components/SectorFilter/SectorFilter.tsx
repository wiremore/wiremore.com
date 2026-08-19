import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import cx from 'classnames';
import { SECTOR_IDS, SectorId } from '@/config/clients';
import css from './SectorFilter.module.css';

type SectorFilterProps = {
    onChange: (sector: SectorId | null) => void;
};

/**
 * Turns the list of sectors into a way of reading the logo wall.
 *
 * Pointing is the primary gesture, but hover alone would make this useless on a phone and
 * unreachable by keyboard, so each sector is a real button: hovering or focusing previews
 * a sector, clicking or tapping pins it until it is clicked again.
 */
const SectorFilter = ({ onChange }: SectorFilterProps) => {
    const { t } = useTranslation();
    const [hovered, setHovered] = useState<SectorId | null>(null);
    const [pinned, setPinned] = useState<SectorId | null>(null);

    const active = hovered ?? pinned;

    useEffect(() => {
        onChange(active);
    }, [active, onChange]);

    const togglePin = (sector: SectorId) => setPinned((current) => (current === sector ? null : sector));

    return (
        <div className={css.filter}>
            <p className={css.label}>{t('clients.sectorsLabel')}</p>

            <ul className={css.list} onMouseLeave={() => setHovered(null)}>
                {SECTOR_IDS.map((sector) => (
                    <li key={sector}>
                        <button
                            aria-pressed={pinned === sector}
                            className={cx(css.sector, active === sector && css.active)}
                            onBlur={() => setHovered(null)}
                            onClick={() => togglePin(sector)}
                            onFocus={() => setHovered(sector)}
                            onMouseEnter={() => setHovered(sector)}
                            type="button"
                        >
                            {t(`clients.sectors.${sector}`)}
                        </button>
                    </li>
                ))}
            </ul>

            <p className={css.hint}>{t('clients.sectorsHint')}</p>
        </div>
    );
};

export default SectorFilter;
