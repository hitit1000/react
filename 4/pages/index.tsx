import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <div>welcome to next!!</div>
      <ul>
        <li><Link href="/sub">Page/sub</Link></li>
        <li><Link href="/sub/test">Page/sub/test</Link></li>
        <li><Link href="/sub/1">Page/sub/1</Link></li>
        <li><Link href="/sub/2">Page/sub/2</Link></li>
      </ul>
    </div>
  )
}

export default Home
