import * as React from 'react'
import { Link } from 'gatsby'
import {   container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText} from './layout.module.css'
import { notStrictEqual } from 'assert'

const Layout = ({ pageTitle, children }: {pageTitle: string, children: React.ReactNode}) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
      <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout