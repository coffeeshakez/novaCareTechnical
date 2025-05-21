import { PageContainer } from '@/components/Layout';
import { Hero } from '@/components/Hero/Hero';

const Home = () => {
  return (
    <PageContainer>
      <Hero 
        title="NovaCare" 
        text="Providing star class consultants to help you grow your business."
        linkText="Visit our FAQ"
        linkUrl="/faq"
      />
    </PageContainer>
  );
};

export default Home;
