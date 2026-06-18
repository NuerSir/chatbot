import { getCapabilities, getOpenAIModels } from "@/lib/ai/models";
import type { ModelCapabilities } from "@/lib/ai/models";

export async function GET() {
  const headers = {
    "Cache-Control": "public, max-age=300, s-maxage=300",
  };

  const curatedCapabilities = await getCapabilities();
  const models = await getOpenAIModels();

  const mergedCapabilities: Record<string, ModelCapabilities> = {
    ...curatedCapabilities,
  };
  for (const model of models) {
    if (model.capabilities) {
      mergedCapabilities[model.id] = model.capabilities;
    }
  }

  const cleanModels = models.map(({ capabilities: _c, ...rest }) => rest);

  return Response.json(
    { capabilities: mergedCapabilities, models: cleanModels },
    { headers },
  );
}
