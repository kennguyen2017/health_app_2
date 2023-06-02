import { AppLayout } from '@/components/layout';
import '@/styles/globals.css';
import { ConfigProvider } from 'antd';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import nextI18NextConfig from '../../next-i18next.config.js';

const antdTheme = {
  token: {
    colorPrimary: '#00b96b',
    colorTextBase: '#fff',
  },
  components: {
   Layout: {
    colorBgHeader: '#414141',
    colorBgFooter: '#414141',
    colorTextBase: '#fff',
   },
   Menu: {
    colorBgContainer: '#414141',
    margin: 15
   },
  }
}

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <RecoilRoot>
       <ConfigProvider theme={antdTheme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ConfigProvider>
    </RecoilRoot>
  )
}


export default appWithTranslation(App, nextI18NextConfig)
