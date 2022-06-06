import { Collection, MongoClient, MongoClientOptions } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri?: string): Promise<MongoClient> {
    const options: MongoClientOptions = {}
    this.client = await MongoClient.connect(uri ?? process.env.MONGO_URL, options)
    return this.client
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  async getCollection (name: string): Promise<Collection> {
    return this.client.db().collection(name)
  }
}
