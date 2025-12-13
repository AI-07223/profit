import Hero from "@/components/home/Hero";
import DemoSection from "@/components/home/DemoSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <DemoSection />
      <ServicesSection />
      <WhyChooseUs />
      <ContactForm />
    </div>
  );
}
