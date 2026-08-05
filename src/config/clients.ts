export type Client = {
    name: string;
    file: string;
    /** Delivered on behalf of an agency; footnoted rather than hidden. */
    viaAgency?: string;
};

/**
 * Ordered for the wall rather than chronologically — recognisable marks first, so the
 * grid reads at a glance. `featured` on the home page takes the first row and a half.
 */
export const CLIENTS: Client[] = [
    { name: 'Porsche', file: 'porsche.svg' },
    { name: 'Daimler', file: 'daimler.svg' },
    { name: 'Zalando', file: 'zalando.svg' },
    { name: 'Börse Stuttgart Digital Exchange', file: 'bsdex.svg' },
    { name: 'Klarna', file: 'klarna.svg' },
    { name: 'TomTom', file: 'tomtom.svg' },
    { name: 'adidas', file: 'adidas.svg', viaAgency: 'Sevenval' },
    { name: 'ProSiebenSat.1', file: 'pro7sat1digital.svg' },
    { name: 'BCG Digital Ventures', file: 'bcgdv.svg' },
    { name: 'Rocket Internet', file: 'rocket-internet.svg' },
    { name: 'Osram', file: 'osram2.svg' },
    { name: 'GLS', file: 'gls.svg' },
    { name: 'Handelsblatt', file: 'handelsblatt.svg' },
    { name: 'WirtschaftsWoche', file: 'wiwo.svg' },
    { name: 'Migros', file: 'migros.svg', viaAgency: 'Aperto' },
    { name: 'Rossmann', file: 'rossmann.svg', viaAgency: 'Aperto' },
    { name: 'DocMorris', file: 'docmorris.svg', viaAgency: 'Publicis Pixelpark' },
    { name: 'Schmitz Cargobull', file: 'schmitzcargobull.svg' },
    { name: 'Spark Networks', file: 'spark.svg' },
    { name: 'Dampsoft', file: 'dampsoft.svg' },
    { name: 'VR Smart Finanz', file: 'vr-smart-finanz.svg' },
    { name: 'finstreet', file: 'finstreet.svg' },
    { name: 'Cosuno', file: 'cosuno.svg' },
    { name: 'Gymondo', file: 'gymondo.svg' },
    { name: 'Service Partner ONE', file: 'servicepartnerone.svg' },
    { name: 'Eberlein & Kunz', file: 'eberlein-kunz.svg' },
];

export const FEATURED_CLIENTS = CLIENTS.slice(0, 12);
