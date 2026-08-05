import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta/Meta';
import PageIntro from '@/components/PageIntro/PageIntro';
import Section from '@/components/Section/Section';
import { CONTACT } from '@/config/contact';
import { translatedPage } from '@/utils/translatedPage';
import css from './prose.module.css';

/**
 * German only, deliberately. The Impressum is a legal document under German law and a
 * translation of it has no legal standing — an English version would only invite the
 * question of which one counts.
 *
 * Citations updated from the previous site: the TMG was replaced by the DDG in 2024 and
 * the RStV by the MStV in 2020. Reviewed for accuracy, not a substitute for legal advice.
 */
const Legal = () => {
    const { t } = useTranslation();

    return (
        <>
            <Meta description={t('meta.descriptions.legal')} title={t('legal.title')} />

            <PageIntro title={t('legal.title')} />

            <Section>
                <div className={css.prose}>
                    <p className={css.note}>{t('legal.note')}</p>

                    <h2>Angaben gemäß § 5 DDG</h2>
                    <address>
                        {CONTACT.company}
                        <br />
                        {CONTACT.street}
                        <br />
                        {CONTACT.city}
                    </address>

                    <h3>Vertreten durch</h3>
                    <p>Geschäftsführer: {CONTACT.managingDirector}</p>

                    <h3>Kontakt</h3>
                    <p>
                        E-Mail: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                    </p>

                    <h3>Registereintrag</h3>
                    <p>Eingetragen im Handelsregister, {CONTACT.register}</p>

                    <h3>Umsatzsteuer-Identifikationsnummer</h3>
                    <p>Gemäß § 27 a Umsatzsteuergesetz: {CONTACT.vatId}</p>

                    <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                    <address>
                        {CONTACT.managingDirector}
                        <br />
                        {CONTACT.street}
                        <br />
                        {CONTACT.city}
                    </address>

                    <h2>Streitbeilegung</h2>
                    <p>
                        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>

                    <h2>Haftung für Inhalte</h2>
                    <p>
                        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                        verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                        Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                        Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
                        nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist erst ab
                        dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                        entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.
                    </p>

                    <h2>Haftung für Links</h2>
                    <p>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                        Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft;
                        rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Bei Bekanntwerden von
                        Rechtsverletzungen entfernen wir derartige Links umgehend.
                    </p>

                    <h2>Urheberrecht</h2>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                        jeweiligen Autors bzw. Erstellers. Marken und Logos Dritter sind Eigentum der jeweiligen
                        Rechteinhaber und werden hier ausschließlich zur Referenz auf durchgeführte Projekte verwendet.
                    </p>

                    <p className={css.updated}>Stand: August 2026</p>
                </div>
            </Section>
        </>
    );
};

export const getStaticProps = translatedPage;

export default Legal;
