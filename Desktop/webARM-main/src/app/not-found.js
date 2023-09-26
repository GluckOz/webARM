import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="bg-black min-h-screen">
      <h2>Страница не найдена!</h2>
      <Link href="/">Вернуться</Link>
    </div>
  )
}