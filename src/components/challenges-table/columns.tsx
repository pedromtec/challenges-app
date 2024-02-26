'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import Link from 'next/link'
import { StickyNote } from 'lucide-react'

export type Challenge = {
  id: string
  title: string
  level: 'Hard' | 'Medium' | 'Easy'
  category: string
  hasSolution?: boolean
  acceptance: number
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
    accessorKey: 'hasSolution',
    header: 'Solução',
    cell: ({ row }) =>
      row.original.hasSolution ? (
        <Link href={`challenges/${row.original.id}/solution`}>
          <StickyNote />
        </Link>
      ) : null,
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
  {
    accessorKey: 'acceptance',
    header: 'Aceitação',
    cell: ({ row }) => {
      return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {row.getValue('acceptance')}%
        </p>
      )
    },
  },
]
