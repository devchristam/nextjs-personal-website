import Head from 'next/head'
import dynamic from 'next/dynamic'
import Spinner from './components/Spinner'

const LazyloadApp = dynamic(
  () => import('./components/App'),
  { 
    loading: function SpinLoader() {
      return (
        <Spinner/> 
      );
    }, 
    ssr: false
  }
)

function Home() {
  return (
    <div>
      <Head>
        <title>Chris Tam</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="description" content="Chris Tam personal website" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Chris Tam" />
				<meta property="og:description" content="Chris Tam personal website"  />
				<meta property="og:site_name" content="Chris Tam" />
				<meta property="twitter:card" content="Chris Tam" />
				<meta property="twitter:creator" content="Chris Tam" />
				<meta property="twitter:title" content="Chris Tam" />
				<meta property="twitter:description" content="Chris Tam personal website" />
      </Head>
      <LazyloadApp/>
    </div>
  )
}
export default Home