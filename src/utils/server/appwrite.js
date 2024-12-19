import { Client, Account, Databases } from 'appwrite';

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(import.meta.env.VITE_ENDPOINT)
    .setProject(import.meta.env.VITE_PROJECT);

  return {
    account: new Account(client),
    database: new Databases(client),
  };
}
