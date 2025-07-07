export async function askCohere(prompt: string): Promise<string> {
  const res = await fetch("https://api.cohere.ai/v1/chat", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_CHAT_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command-r-plus",
      message: prompt,
    }),
  });

  const data = await res.json();

  if (!data.text) {
    throw new Error("No response from Cohere");
  }

  return data.text;
}
