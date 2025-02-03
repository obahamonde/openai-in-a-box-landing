import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Usage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Usage</h2>
        <Card>
          <CardHeader>
            <CardTitle>Example usage with Python:</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`from openai import OpenAI

client = OpenAI()

response = client.chat.completion(messages=[{"role": "system", "content": "You are a chatbot."}])
print(response.choices[0].message.content)`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

