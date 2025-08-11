import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GameServices from '@/components/GameServices';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GameServices />
    </div>
  );
};

export default Index;
