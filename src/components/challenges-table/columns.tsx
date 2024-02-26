'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import Link from 'next/link'

export type Challenge = {
  id: string
  title: string
  level: 'Hard' | 'Medium' | 'Easy'
  category: string
}

const colorByLevel: Record<Challenge['level'], string> = {
  Easy: 'text-green-500',
  Hard: 'text-red-500',
  Medium: 'text-yellow-500',
}

export const columns: ColumnDef<Challenge>[] = [
  {
    accessorKey: 'title',
    header: 'Título',
    cell: ({ row }) => {
      return (
        <Link href={`challenges/${row.original.id}`}>
          <Button variant="link">{row.original.title}</Button>
        </Link>
      )
    },
  },
  {
    accessorKey: 'level',
    header: 'Dificuldade',
    cell: ({ row }) => {
      return (
        <span className={colorByLevel[row.original.level]}>
          {row.original.level}
        </span>
      )
    },
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
    cell: ({ row }) => {
      return <Badge>{row.original.category}</Badge>
    },
  },
]
