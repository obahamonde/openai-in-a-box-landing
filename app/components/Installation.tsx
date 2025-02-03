import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const installationSteps = [
  "git clone https://github.com/obahamonde/openai-in-a-box.git",
  "cd openai-in-a-box",
  "docker build -t openai-in-a-box .",
  "docker run -d -p 8080:8080 openai-in-a-box",
]

export default function Installation() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Installation</h2>
        <Card>
          <CardHeader>
            <CardTitle>Follow these steps to install:</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              {installationSteps.map((step, index) => (
                <li key={index} className="font-mono bg-gray-200 p-2 rounded">
                  {step}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

