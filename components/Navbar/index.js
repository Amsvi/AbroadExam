import { useTranslation } from 'i18n'
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

const items = [
  { text: 'home', link: '/', type: 'simple' },
  { text: 'exams', link: '/exams', type: 'dropdown' },
  { text: 'blog', link: '/blog', type: 'simple' },
  { text: 'about', link: '/about', type: 'simple' },
  { text: 'prices', link: '/prices', type: 'simple' },
  { text: 'faq', link: '/faq', type: 'simple' },
  { text: 'support', link: '/support', type: 'simple' },
  { text: 'contacts', link: '/contacts', type: 'simple' },
]

const Navbar = () => {
  const { t } = useTranslation('common')
  return (
    <div className={styles.container}>
      <ul>
        {items.map((item) => (
          <li key={item.text}>
            <Link href={item.link}>
              <a>
                {t(item.text)}
                {item.type === 'dropdown' && (
                  <span style={{ margin: '5px', fontSize: '13px' }}>▼</span>
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
