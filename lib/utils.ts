
import clsx, { ClassValue } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }

export function constructMetadata({
  title = "Mac_Solo_",
  description = "",
  image = "",
  icons = "",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
   
    icons,
    themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}