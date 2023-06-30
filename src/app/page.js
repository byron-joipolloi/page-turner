'use client'
import Image from 'next/image'
import HTMLFlipBook from 'react-pageflip';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HTMLFlipBook width={400} height={639}>
        <Image src={`/page-0.jpg`} alt={`page 0`} width={400} height={639} />
        <Image src={`/page-1.jpg`} alt={`page 1`} width={400} height={639} />
        <Image src={`/page-2.jpg`} alt={`page 2`} width={400} height={639} />
        <Image src={`/page-3.jpg`} alt={`page 3`} width={400} height={639} />
        <Image src={`/page-4.jpg`} alt={`page 4`} width={400} height={639} />
        <Image src={`/page-5.jpg`} alt={`page 5`} width={400} height={639} />
        <Image src={`/page-6.jpg`} alt={`page 6`} width={400} height={639} />
        <Image src={`/page-7.jpg`} alt={`page 7`} width={400} height={639} />
        <Image src={`/page-8.jpg`} alt={`page 8`} width={400} height={639} />
        <Image src={`/page-9.jpg`} alt={`page 9`} width={400} height={639} />
      </HTMLFlipBook>
    </main>
  )
}
