import { useTranslation } from 'next-i18next';
import Meta from '@/components/Meta/Meta';
import ErrorScreen from '@/components/ErrorScreen/ErrorScreen';
import { translatedPage } from '@/utils/translatedPage';

const ServerError = () => {
    const { t } = useTranslation();

    return (
        <>
            <Meta description={t('serverError.text')} title={t('serverError.title')} />
            <ErrorScreen
                back={t('serverError.back')}
                code={t('serverError.code')}
                text={t('serverError.text')}
                title={t('serverError.title')}
            />
        </>
    );
};

export const getStaticProps = translatedPage;

export default ServerError;
