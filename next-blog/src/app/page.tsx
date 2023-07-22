/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome 👋&nbsp;
        <span className="whitespace-nowrap">
            I'm <span className="font-bold">James</span>
        </span>
      </p>
    </main>
  )
}
