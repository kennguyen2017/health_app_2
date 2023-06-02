import { Login as LoginComponent } from '@/components/login/login';
import { useTranslation } from 'next-i18next'
import Head from 'next/head';
import styles from './index.module.css';

function Login() {
  const { t } = useTranslation('login');
  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <div className={styles['container']}>
        <LoginComponent></LoginComponent>
      </div>
    </>
  );
}
export default Login;
