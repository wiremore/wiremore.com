import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta/Meta';
import ErrorScreen from '@/components/ErrorScreen/ErrorScreen';
import { translatedPage } from '@/utils/translatedPage';

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <>
            <Meta description={t('notFound.text')} title={t('notFound.title')} />
            <ErrorScreen
                back={t('notFound.back')}
                code={t('notFound.code')}
                lost
                text={t('notFound.text')}
                title={t('notFound.title')}
            />
        </>
    );
};

export const getStaticProps = translatedPage;

export default NotFound;
