import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "i can p[ut keywords here",
  keywords: "about, corporate, openai",
  twitter: {
    card: "summary_large_image",
    title: "About us",
  },
};

const About = () => {
  return <div>About page</div>;
};

export default About;
