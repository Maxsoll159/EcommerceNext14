import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hola mundo</h1>
      <h2 className={titleFont.className}>Hola mundo</h2>
    </div>
  )
}