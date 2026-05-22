import { createClient } from '@insforge/sdk';

const BASE_URL = 'https://hmqm8s6a.us-east.insforge.app';
const PROJECT_API_KEY = 'ik_48755d9ec62e383b1a7fc5863a8a3544';

const insforge = createClient({
  baseUrl: BASE_URL,
  anonKey: PROJECT_API_KEY,
  isServerMode: true,
});

async function run() {
  const typesRes = await insforge.database.from("channel_types").select("*").order("created_at", { ascending: true });
  console.log("Types Result:", typesRes);
}

run().catch(console.error);
