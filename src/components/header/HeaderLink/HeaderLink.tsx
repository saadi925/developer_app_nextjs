import React from 'react'
import Link from 'next/link'
interface LinkBaseProps {
    href : string 
    name : string
}
export default function HeaderLink({href, name} : LinkBaseProps) {
  return (
<li>
<Link href={href} className='px-2 sm:px-3 py-1 text-sm font-semibold'>
 {name}
 </Link>
</li>
  )
}
