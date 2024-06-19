'use server'

export const getNews = async () => {
  return await fetch('/mock.json')
}
