'use client'

import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

interface TabBarProps {
  currentTab?: number
  tabOptions?: number[]
}

export const TabBar = ({
  currentTab = 1,
  tabOptions = [1, 2, 3, 4]
}: TabBarProps) => {
  const router = useRouter()

  const [selected, setSelected] = useState(currentTab)

  const handleSelectTab = (tab: number) => {
    setSelected(tab)
    setCookie('selected-tab', tab.toString())
    router.refresh()
  }

  return (
    <div
      className={`grid w-full space-x-2 rounded-xl bg-white p-2 mt-4 grid-cols-4`}
    >
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input
            checked={selected === tab}
            onChange={() => {}}
            type='radio'
            id={tab.toString()}
            name='tab'
            className='peer hidden'
          />
          <label
            onClick={() => handleSelectTab(tab)}
            className='block cursor-pointer select-none transition-all rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  )
}
