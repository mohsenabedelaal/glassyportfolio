import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { BrandVision } from '@/components/home/BrandVision';
import { ScrollingBanner } from '@/components/home/ScrollingBanner';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ScrollingBanner />
      <ServicesOverview />
      <WhyChooseUs />
      <BrandVision />
    </Layout>
  );
};

export default Index;
