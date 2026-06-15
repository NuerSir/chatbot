import { getCapabilities, getOpenAIModels } from "@/lib/ai/models";

export async function GET() {
  const headers = {
    "Cache-Control": "public, max-age=300, s-maxage=300",
  };

  const curatedCapabilities = await getCapabilities();
  const models = await getOpenAIModels();

  return Response.json({ capabilities: curatedCapabilities, models }, { headers });
}
