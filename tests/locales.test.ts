import { describe, expect, it } from 'vitest';
import de from '../public/locales/de/common.json';
import en from '../public/locales/en/common.json';

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

/**
 * Flattens to a set of leaf paths, with array indices included. Divergence between the
 * two bundles is the failure mode that actually bites a bilingual site: a key added to
 * English only silently renders the raw key path to German visitors, and an array that
 * gained an entry in one language renders a shorter list in the other.
 */
const paths = (value: Json, prefix = ''): string[] => {
    if (Array.isArray(value)) {
        return value.flatMap((entry, index) => paths(entry, `${prefix}[${index}]`));
    }

    if (value !== null && typeof value === 'object') {
        return Object.entries(value).flatMap(([key, entry]) => paths(entry, prefix ? `${prefix}.${key}` : key));
    }

    return [prefix];
};

describe('locale bundles', () => {
    const enPaths = paths(en as Json);
    const dePaths = paths(de as Json);

    it('has no keys missing from German', () => {
        expect(enPaths.filter((path) => !dePaths.includes(path))).toEqual([]);
    });

    it('has no keys missing from English', () => {
        expect(dePaths.filter((path) => !enPaths.includes(path))).toEqual([]);
    });

    it('has no empty strings', () => {
        const empty = [...Object.entries({ en, de })].flatMap(([locale, bundle]) =>
            paths(bundle as Json)
                .filter((path) => {
                    const value = path
                        .replace(/\[(\d+)\]/g, '.$1')
                        .split('.')
                        .reduce<Json>((node, key) => (node as Record<string, Json>)?.[key], bundle as Json);

                    return typeof value === 'string' && value.trim() === '';
                })
                .map((path) => `${locale}:${path}`),
        );

        expect(empty).toEqual([]);
    });
});
