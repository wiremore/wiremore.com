import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta/Meta';
import PageIntro from '@/components/PageIntro/PageIntro';
import Section from '@/components/Section/Section';
import { CONTACT } from '@/config/contact';
import { translatedPage } from '@/utils/translatedPage';
import css from './prose.module.css';

/**
 * Written to describe what this site actually does rather than what a generator assumes:
 * no analytics, no tracking, no third-party embeds, no consent banner, and fonts served
 * from our own domain. The single cookie is the locale preference.
 *
 * NOTE FOR REVIEW: the hosting section deliberately does not name a provider, because the
 * deployment target is not recorded in this repository. Name the processor (and reference
 * the AV-Vertrag) before this goes live, and have a lawyer read the whole page.
 */
const Privacy = () => {
    const { t } = useTranslation();

    return (
        <>
            <Meta description={t('meta.descriptions.privacy')} title={t('privacy.title')} />

            <PageIntro title={t('privacy.title')} />

            <Section>
                <div className={css.prose}>
                    <p className={css.note}>{t('privacy.note')}</p>

                    <h2>1. Verantwortlicher</h2>
                    <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                    <address>
                        {CONTACT.company}
                        <br />
                        {CONTACT.street}
                        <br />
                        {CONTACT.city}
                        <br />
                        E-Mail: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                    </address>

                    <h2>2. Grundsätzliches</h2>
                    <p>
                        Diese Website ist bewusst datensparsam gebaut. Wir setzen keine Analyse- oder Trackingdienste
                        ein, binden keine Inhalte Dritter ein und verwenden keine Werbe- oder Marketing-Cookies. Es gibt
                        daher auch kein Cookie-Banner: Es gibt nichts, wozu wir Ihre Einwilligung bräuchten.
                    </p>

                    <h2>3. Server-Logfiles</h2>
                    <p>
                        Beim Aufruf dieser Website werden durch den Hosting-Dienstleister, der für uns als
                        Auftragsverarbeiter tätig ist, automatisch Informationen erfasst, die Ihr Browser übermittelt.
                        Das sind:
                    </p>
                    <ul>
                        <li>die aufgerufene Adresse und die übertragene Datenmenge</li>
                        <li>Datum und Uhrzeit des Abrufs</li>
                        <li>Meldung über den erfolgreichen Abruf</li>
                        <li>Browsertyp und Browserversion sowie das verwendete Betriebssystem</li>
                        <li>die zuvor besuchte Seite (Referrer)</li>
                        <li>die IP-Adresse des anfragenden Geräts</li>
                    </ul>
                    <p>
                        Diese Daten sind technisch erforderlich, um die Website auszuliefern, ihre Stabilität und
                        Sicherheit zu gewährleisten und Missbrauch zu erkennen. Rechtsgrundlage ist unser berechtigtes
                        Interesse nach Art. 6 Abs. 1 lit. f DSGVO. Eine Zusammenführung dieser Daten mit anderen
                        Datenquellen findet nicht statt, und wir werten sie nicht zu Marketingzwecken aus.
                    </p>

                    <h2>4. Cookies</h2>
                    <p>
                        Diese Website setzt genau ein Cookie: <code>NEXT_LOCALE</code>. Es speichert ausschließlich, in
                        welcher Sprache Sie die Seite lesen möchten, damit Sie bei einem erneuten Besuch nicht wieder in
                        der falschen Sprache landen. Es enthält keine personenbezogenen Daten, ermöglicht keine
                        Wiedererkennung über Websites hinweg und läuft nach einem Jahr ab.
                    </p>
                    <p>
                        Als technisch notwendiges Cookie im Sinne von § 25 Abs. 2 TDDDG bedarf es keiner Einwilligung.
                        Sie können es jederzeit über die Einstellungen Ihres Browsers löschen.
                    </p>

                    <h2>5. Sprachweiterleitung</h2>
                    <p>
                        Beim ersten Aufruf werten wir die von Ihrem Browser mitgesendete Spracheinstellung
                        (Accept-Language) aus, um Sie auf die deutsche oder englische Fassung weiterzuleiten. Diese
                        Auswertung findet während der Auslieferung statt; die Information wird nicht gespeichert und
                        nicht protokolliert.
                    </p>

                    <h2>6. Schriftarten</h2>
                    <p>
                        Alle Schriftarten werden von unserem eigenen Server ausgeliefert. Es besteht zu keinem Zeitpunkt
                        eine Verbindung zu Google Fonts oder einem anderen externen Anbieter, und es wird dabei keine
                        IP-Adresse an Dritte übertragen.
                    </p>

                    <h2>7. Kontaktaufnahme per E-Mail</h2>
                    <p>
                        Diese Website enthält kein Kontaktformular. Wenn Sie uns eine E-Mail schreiben, verarbeiten wir
                        Ihre Angaben zur Bearbeitung Ihrer Anfrage und für den Fall, dass sich Anschlussfragen ergeben.
                        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um die Anbahnung oder Durchführung
                        eines Vertrags geht, andernfalls Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                    <p>
                        Wir löschen diese Daten, sobald sie für den Zweck nicht mehr erforderlich sind, es sei denn,
                        gesetzliche Aufbewahrungsfristen stehen dem entgegen.
                    </p>

                    <h2>8. Verschlüsselung</h2>
                    <p>
                        Diese Website wird ausschließlich über eine mit TLS verschlüsselte Verbindung ausgeliefert,
                        erkennbar am <code>https://</code> in der Adresszeile Ihres Browsers.
                    </p>

                    <h2>9. Ihre Rechte</h2>
                    <p>Sie haben uns gegenüber jederzeit das Recht auf:</p>
                    <ul>
                        <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
                        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                        <li>Löschung (Art. 17 DSGVO)</li>
                        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                    </ul>
                    <p>
                        Wenden Sie sich dafür formlos an die oben genannte Adresse. Außerdem steht Ihnen ein
                        Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, für uns die Berliner Beauftragte für
                        Datenschutz und Informationsfreiheit.
                    </p>

                    <p className={css.updated}>Stand: August 2026</p>
                </div>
            </Section>
        </>
    );
};

export const getStaticProps = translatedPage;

export default Privacy;
