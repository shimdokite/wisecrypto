import type { Metadata } from 'next';
import { Mulish, Montserrat } from 'next/font/google';
import { Slide, ToastContainer } from 'react-toastify';

import './_shared/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { ReactQueryProvider } from 'components';

const mulish = Mulish({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--montserrat' });

export const metadata: Metadata = {
  title: 'Wisecrypto',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${mulish.className} ${montserrat.variable}`}>
        <ReactQueryProvider>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            closeOnClick
            closeButton
            theme="light"
            transition={Slide}
          />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
