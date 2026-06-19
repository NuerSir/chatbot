import { getOpenAIModels } from "@/lib/ai/models";

export async function GET() {
  const headers = {
    "Cache-Control": "public, max-age=300, s-maxage=300",
  };

  const models = await getOpenAIModels();

  const capabilities: Record<string, { tools: boolean; vision: boolean; reasoning: boolean }> = {};
  for (const model of models) {
    if (model.capabilities) {
      capabilities[model.id] = model.capabilities;
    }
  }

  const cleanModels = models.map(({ capabilities: _c, ...rest }) => rest);

  return Response.json(
    { capabilities, models: cleanModels },
    { headers },
  );
}
