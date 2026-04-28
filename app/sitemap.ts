import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://merlina.ai", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://merlina.ai/que-es", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://merlina.ai/como-funciona", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://merlina.ai/casos-de-uso", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://merlina.ai/resultados", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://merlina.ai/faq", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://merlina.ai/demo", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ]
}
