import { AppDataSource } from '../data-source'

export const connectToDB = async () => {
  try {
    const dataSource = await AppDataSource.initialize()
    console.log(`App connected to db ${dataSource.options.database}`)
    process.on('SIGINT', async () => {
      await dataSource.destroy()
      console.log('Connection to db closed')
    })
  } catch (error) {
    console.log(error)
  }
}
