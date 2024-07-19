import React from 'react'
import "@/app/global.css"
import Provider from '@/providers/ThemeProvider'
import {Open_Sans} from 'next/font/google'
const font = Open_Sans({
  subsets : ["greek", "latin"],
 variable : "--font-opensans"
})
export default function layout(props: { children: React.ReactNode }) {
    return (
        <html>
            <body className={`${font.className} bg-gray-300 dark:bg-gray-900 `}>
          <Provider>
            {props.children}
          </Provider>
            </body>
        </html>
    )
}
