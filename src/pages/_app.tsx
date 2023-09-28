import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache }: MyAppProps) {
  emotionCache = clientSideEmotionCache;
  return <CacheProvider value={emotionCache}>
    <CssBaseline />
    <Component {...pageProps} />
  </CacheProvider>
}
