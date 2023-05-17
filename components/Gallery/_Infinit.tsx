import { useEffect, useState, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'
import { debounce } from 'lodash'
import { motion } from 'framer-motion'
import { GetServerSideProps } from 'next'
import { getServerSideProps } from '../../pages/Gallery/[event]'

const supabase = createClient('supabase-url', 'supabase-key')

export default function TicketsPage({ tickets }) {
  const PAGE_COUNT = 20
  const containerRef = useRef(null)
  const [loadedTickets, setLoadedTickets] = useState(tickets)
  const [offset, setOffset] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isInView, setIsInView] = useState(false)

  const handleScroll = (container) => {
    if (containerRef.current && typeof window !== 'undefined') {
      const container = containerRef.current
      const { bottom } = container.getBoundingClientRect()
      const { innerHeight } = window
      setIsInView((prev) => bottom <= innerHeight)
    }
  }

  useEffect(() => {
    const handleDebouncedScroll = debounce(() => !isLast && handleScroll(), 200)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isInView) {
      loadMoreTickets(offset)
    }
  }, [isInView])

  const loadMoreTickets = async (offset: number) => {
    setIsLoading(true)
    setOffset((prev) => prev + 1)
    getServerSideProps();
    setLoadedTickets((prevTickets) => [...prevTickets, ...newTickets])
    setIsLoading(false)
  }

  const fetchTickets = async (offset) => {
    const from = offset * PAGE_COUNT
    const to = from + PAGE_COUNT - 1

    const { data } = await supabase!
        .from('my_tickets_table')
        .select('*')
        .range(from, to)
        .order('createdAt', { ascending: false })

    return data
  }

  return (
    <div ref={containerRef}>
      {
        loadedTickets.map((ticket, index) => {
          const recalculatedDelay =
            i >= PAGE_COUNT * 2 ? (i - PAGE_COUNT * (offset - 1)) / 15 : i / 15

          return (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.25, 0, 1],
                delay: recalculatedDelay,
              }}
            >
              {/* Actual ticket component */}
            </motion.div>
          )
        })
      }
    </div>
  )

