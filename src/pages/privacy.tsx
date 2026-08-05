import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta/Meta';
import PageIntro from '@/components/PageIntro/PageIntro';
import Section from '@/components/Section/Section';
import { CONTACT } from '@/config/contact';
import { translatedPage } from '@/utils/translatedPage';
import css from './prose.module.css';

/**
 * Standard Datenschutzerklärung structure, cut down to what this site actually does.
 *
 * The site sets no cookies, runs no analytics, embeds nothing from third parties and
 * self-hosts its fonts, so the only processing worth declaring is server logs and email.
 * That is also why there is no consent banner: nothing here needs consent.
 *
 * NOTE FOR REVIEW: the hosting section does not name a provider, because the deployment
 * target is not recorded in this repository. Name the processor (and reference the
 * AV-Vertrag) before this goes live, and have a lawyer read the page.
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
                    <p>
                        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
                        Datenschutz-Grundverordnung (DSGVO) ist:
                    </p>
                    <address>
                        {CONTACT.company}
                        <br />
                        {CONTACT.street}
                        <br />
                        {CONTACT.city}
                        <br />
                        E-Mail: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                    </address>

                    <h2>2. Überblick</h2>
                    <p>Diese Website ist bewusst datensparsam gebaut. Wir</p>
                    <ul>
                        <li>setzen keine Cookies,</li>
                        <li>verwenden keine Analyse-, Tracking- oder Marketingdienste,</li>
                        <li>binden keine Inhalte, Karten, Videos oder Social-Media-Elemente Dritter ein,</li>
                        <li>liefern alle Schriftarten von unserem eigenen Server aus,</li>
                        <li>erstellen keine Nutzerprofile.</li>
                    </ul>
                    <p>
                        Aus diesem Grund gibt es auf dieser Website auch kein Cookie- oder Consent-Banner: Es findet
                        keine Verarbeitung statt, die Ihrer Einwilligung bedürfte.
                    </p>

                    <h2>3. Server-Logfiles</h2>
                    <p>
                        Beim Aufruf dieser Website werden durch den Hosting-Dienstleister, der für uns als
                        Auftragsverarbeiter tätig ist, automatisch Informationen erfasst, die Ihr Browser übermittelt:
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
                        Datenquellen findet nicht statt, und eine Auswertung zu Marketingzwecken erfolgt nicht.
                    </p>

                    <h2>4. Sprachauswahl</h2>
                    <p>
                        Beim Aufruf der Startseite werten wir die von Ihrem Browser ohnehin mitgesendete
                        Spracheinstellung (Accept-Language) aus, um Sie auf die deutsche oder englische Fassung
                        weiterzuleiten. Diese Auswertung findet ausschließlich während der Auslieferung statt. Es wird
                        dabei nichts auf Ihrem Gerät gespeichert und nichts protokolliert.
                    </p>

                    <h2>5. Kontaktaufnahme per E-Mail</h2>
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

                    <h2>6. Weitergabe von Daten</h2>
                    <p>
                        Eine Weitergabe Ihrer Daten an Dritte findet nicht statt, außer an den oben genannten
                        Hosting-Dienstleister im Rahmen der Auftragsverarbeitung sowie in Fällen, in denen wir hierzu
                        gesetzlich verpflichtet sind.
                    </p>

                    <h2>7. Verschlüsselung</h2>
                    <p>
                        Diese Website wird ausschließlich über eine mit TLS verschlüsselte Verbindung ausgeliefert,
                        erkennbar am <code>https://</code> in der Adresszeile Ihres Browsers.
                    </p>

                    <h2>8. Ihre Rechte</h2>
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

                    <h2>9. Änderungen dieser Erklärung</h2>
                    <p>
                        Wir passen diese Datenschutzerklärung an, sobald sich die Verarbeitung auf dieser Website
                        ändert — etwa wenn wir künftig Reichweitenmessung einsetzen sollten.
                    </p>

                    <p className={css.updated}>Stand: August 2026</p>
                </div>
            </Section>
        </>
    );
};

export const getStaticProps = translatedPage;

export default Privacy;
