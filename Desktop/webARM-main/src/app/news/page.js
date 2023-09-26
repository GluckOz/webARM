import Image from 'next/image'
import Header from '@/components/Header'

export default function About() {
  return (
    <>
      <Header/>
      <div className="flex min-h-screen pt-28 py-8 flex-col bg-red-500 justify-center items-center text-black text-5xl">
        About 
      </div>
    </>
  )
}