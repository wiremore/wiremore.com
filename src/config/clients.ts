export const SECTOR_IDS = [
    'automotive',
    'finance',
    'commerce',
    'health',
    'media',
    'logistics',
    'industry',
] as const;

export type SectorId = (typeof SECTOR_IDS)[number];

export type Client = {
    name: string;
    file: string;
    sectors: SectorId[];
    /** Delivered on behalf of an agency; footnoted rather than hidden. */
    viaAgency?: string;
};

/**
 * Ordered for the wall rather than chronologically — recognisable marks first, so the
 * grid reads at a glance. `FEATURED_CLIENTS` takes the first two rows on the home page.
 *
 * Sectors drive the hover filter on /work. Every client carries at least one, otherwise
 * it could never light up and would read as a broken cell.
 *
 * Assignments come from the project notes in the CV data, with TomTom, Service Partner ONE
 * and Eberlein & Kunz corrected by Manuel. BCG Digital Ventures (precision agriculture),
 * Cosuno (construction tendering) and Spark Networks were still judgement calls.
 */
export const CLIENTS: Client[] = [
    { name: 'Porsche', file: 'porsche.svg', sectors: ['automotive'] },
    { name: 'Daimler', file: 'daimler.svg', sectors: ['automotive'] },
    { name: 'Zalando', file: 'zalando.svg', sectors: ['commerce'] },
    { name: 'Börse Stuttgart Digital Exchange', file: 'bsdex.svg', sectors: ['finance'] },
    { name: 'Klarna', file: 'klarna.svg', sectors: ['finance'] },
    { name: 'TomTom', file: 'tomtom.svg', sectors: ['logistics', 'automotive'] },
    { name: 'adidas', file: 'adidas.svg', sectors: ['commerce'], viaAgency: 'Sevenval' },
    { name: 'ProSiebenSat.1', file: 'pro7sat1digital.svg', sectors: ['media'] },
    { name: 'BCG Digital Ventures', file: 'bcgdv.svg', sectors: ['industry'] },
    { name: 'Rocket Internet', file: 'rocket-internet.svg', sectors: ['commerce'] },
    { name: 'Osram', file: 'osram2.svg', sectors: ['industry'] },
    { name: 'GLS', file: 'gls.svg', sectors: ['logistics'] },
    { name: 'Handelsblatt', file: 'handelsblatt.svg', sectors: ['media'] },
    { name: 'WirtschaftsWoche', file: 'wiwo.svg', sectors: ['media'] },
    { name: 'Migros', file: 'migros.svg', sectors: ['commerce'], viaAgency: 'Aperto' },
    { name: 'Rossmann', file: 'rossmann.svg', sectors: ['commerce'], viaAgency: 'Aperto' },
    { name: 'DocMorris', file: 'docmorris.svg', sectors: ['health', 'commerce'], viaAgency: 'Publicis Pixelpark' },
    { name: 'Schmitz Cargobull', file: 'schmitzcargobull.svg', sectors: ['logistics', 'industry', 'automotive'] },
    { name: 'Spark Networks', file: 'spark.svg', sectors: ['media'] },
    { name: 'Dampsoft', file: 'dampsoft.svg', sectors: ['health'] },
    { name: 'VR Smart Finanz', file: 'vr-smart-finanz.svg', sectors: ['finance'] },
    { name: 'finstreet', file: 'finstreet.svg', sectors: ['finance'] },
    { name: 'Cosuno', file: 'cosuno.svg', sectors: ['industry'] },
    { name: 'Gymondo', file: 'gymondo.svg', sectors: ['health', 'media'] },
    { name: 'Service Partner ONE', file: 'servicepartnerone.svg', sectors: ['industry'] },
    { name: 'Eberlein & Kunz', file: 'eberlein-kunz.svg', sectors: ['commerce'] },
];

export const FEATURED_CLIENTS = CLIENTS.slice(0, 12);
