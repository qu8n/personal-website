import { useEffect, useRef, createElement } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

// https://github.com/cahilfoley/react-snowfall
import Snowfall from 'react-snowfall'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Snowfall
          speed={[0.1, 2.5]}
          wind={[0.1, 2.0]}
          color="#b6c1f0"
          snowflakeCount={75}
          style={{ opacity: '0.3' }}
        />
        <Snowfall
          speed={[0.1, 2.5]}
          wind={[0.1, 2.0]}
          color="#b6c1f0"
          snowflakeCount={75}
          style={{ opacity: '0.1' }}
        />
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
