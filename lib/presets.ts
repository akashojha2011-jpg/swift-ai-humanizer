export interface PresetSample {
  id: string;
  title: string;
  category: "academic" | "blog" | "marketing" | "resume";
  aiScore: number;
  text: string;
}

export const SAMPLE_PRESETS: PresetSample[] = [
  {
    id: "formatted-draft",
    title: "Formatted AI List (Bullets & Bold)",
    category: "blog",
    aiScore: 96,
    text: "## **Key Benefits of AI Automation**\n\nFurthermore, it is important to note that artificial intelligence plays a crucial role in modern workflows:\n\n- **Faster Execution:** Utilizing automated tools has the ability to accelerate daily tasks.\n- **Error Reduction:** Seamlessly eliminates manual entry errors across all departments.\n- **Data Insights:** Serves as a testament to human innovation by delving into complex analytics."
  },
  {
    id: "academic-essay",
    title: "Academic AI Essay",
    category: "academic",
    aiScore: 98,
    text: "Furthermore, it is important to note that artificial intelligence plays a crucial role in modern educational paradigms. Moreover, the integration of automated learning systems serves as a testament to human innovation, fostering unprecedented efficiency and unraveling new pedagogical horizons."
  },
  {
    id: "chatgpt-blog",
    title: "ChatGPT Blog Post",
    category: "blog",
    aiScore: 95,
    text: "In conclusion, staying ahead in today's fast-paced digital landscape requires a multifaceted approach. Utilizing cutting-edge tools has the ability to revolutionize workflow productivity, seamlessly bridging the gap between strategy and execution."
  },
  {
    id: "cold-outreach",
    title: "AI Marketing Email",
    category: "marketing",
    aiScore: 92,
    text: "I am writing to delve into potential synergies between our organizations. Our robust solution leverages state-of-the-art algorithms to empower your sales pipeline, creating a seamless paradigm shift in customer acquisition."
  }
];
