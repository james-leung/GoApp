import Image from 'next/image'
import styles from './page.module.css'
import Posts from './components/Posts'

export default function Home() {
  return (
    <main className={styles.main}>
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome 👋&nbsp;
        <span className="whitespace-nowrap">
            I&apos;m <span className="font-bold">James</span>
        </span>
      </p>
      <Posts />
    </main>
  )
}
