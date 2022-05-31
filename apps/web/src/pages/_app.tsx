import { AppProps } from 'next/app'

import '../styles/global.css'

function MyApp({ Component }: AppProps) {
  return <Component />
}

export default MyApp
