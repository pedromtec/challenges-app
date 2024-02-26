import { Challenge, columns } from '@/components/challenges-table/columns'
import { DataTable } from '@/components/challenges-table/data-table'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
function getData(): Challenge[] {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      title: 'Remova Elementos repetidos do vetor',
      category: 'Hash Map',
      level: 'Easy',
    },
    {
      id: '728ed52a',
      title: 'Essa palavra é um Palindromo?',
      category: 'Strings',
      level: 'Easy',
    },
    {
      id: '728ed52b',
      title: 'Busca em uma lista encadeada',
      category: 'Binary Search',
      level: 'Hard',
    },
    {
      id: '728ed520v',
      title: 'Tic tac toe',
      category: 'Arrays',
      level: 'Medium',
    },
    // ...
  ]
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <DataTable columns={columns} data={getData()} />
      </div>
    </main>
  )
}
