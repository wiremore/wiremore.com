export type NavItem = {
    href: string;
    labelKey: string;
};

export const NAV_ITEMS: NavItem[] = [
    { href: '/what-we-do', labelKey: 'navigation.whatWeDo' },
    { href: '/how-we-work', labelKey: 'navigation.howWeWork' },
    { href: '/clients', labelKey: 'navigation.clients' },
    { href: '/studio', labelKey: 'navigation.studio' },
    { href: '/contact', labelKey: 'navigation.contact' },
];

export const LEGAL_ITEMS: NavItem[] = [
    { href: '/legal', labelKey: 'navigation.legal' },
    { href: '/privacy', labelKey: 'navigation.privacy' },
];
