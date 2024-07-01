import React from 'react'
import "@/app/global.css"
import Provider from '@/providers/ThemeProvider'

export default function layout(props: { children: React.ReactNode }) {
    return (
        <html>
            <body>
          <Provider>
            {props.children}
          </Provider>
            </body>
        </html>
    )
}
