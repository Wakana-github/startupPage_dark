"use client"

import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import React from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdOutlineWbSunny } from 'react-icons/md'

const DarkToggle = () => {

  const {theme, setTheme} = useTheme();


  return (
    <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full" 
          onClick={()=>{setTheme(theme === "light"? "dark" : "light")}}
          >

      <MdOutlineWbSunny className="absolute h-10 w-10 rotate-0 scale-100 dark:hidden"></MdOutlineWbSunny>
      <FaMoon className="absolute h-10 w-10  transition-transform duration-100 hidden dark:block"></FaMoon>
    </Button>
  )
}

export default DarkToggle