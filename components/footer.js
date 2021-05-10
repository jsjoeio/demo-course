import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="mt-16 lg:mt-64 bg-pink-900 text-pink-200 md:p-16 sm:p-8 p-4 leading-7">
      <p className="text-2xl mb-4">
        <Link href="/">
          <a className="text-white">Demo Course</a>
        </Link>
      </p>
      <p>A demo course for jp-courses</p>
      <p>Made in Scottsdale, Arizona 🌵</p>
      <p>
        Built by{' '}
        <a
          className="text-white"
          href="https://joeprevite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joe Previte
        </a>{' '}
        (
        <a
          className="text-white"
          href="https://twitter.com/jsjoeio"
          target="_blank"
          rel="noopener noreferrer"
        >
          @jsjoeio
        </a>
        )
      </p>
      <p>
        Using{' '}
        <a
          className="text-white"
          href="https://github.com/scastiel/nextjs-course-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          nextjs-course-template
        </a>
      </p>
    </footer>
  )
}
