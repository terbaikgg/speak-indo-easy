import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border mb-6">
            <Trophy className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">Professional Gaming Services</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Joki Game</span>
            <br />
            <span className="bg-gaming-gradient bg-clip-text text-transparent">
              Profesional
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Layanan joki game terpercaya untuk Wuthering Waves, Genshin Impact, Blue Archive, dan Arknights
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                Lihat Layanan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/order">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg">
                Order Sekarang
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-border">
              <Shield className="w-6 h-6 text-primary mr-3" />
              <span className="text-sm font-medium text-foreground">100% Aman</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-border">
              <Clock className="w-6 h-6 text-primary mr-3" />
              <span className="text-sm font-medium text-foreground">Pengerjaan Cepat</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-border">
              <Trophy className="w-6 h-6 text-primary mr-3" />
              <span className="text-sm font-medium text-foreground">Tim Profesional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;