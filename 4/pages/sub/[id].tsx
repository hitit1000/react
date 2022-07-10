import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
export default function id() {
    const router = useRouter();
    const id = router
  return (
    <>
        <div>hello {id.query.id}</div>
        <Link href="/">Home</Link>    
    </>
  )
}
