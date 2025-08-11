import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Shield, Trophy, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import wutheringWaves from '@/assets/wuthering-waves.jpg';
import genshinImpact from '@/assets/genshin-impact.jpg';
import blueArchive from '@/assets/blue-archive.jpg';
import arknights from '@/assets/arknights.jpg';

const Services = () => {
  const services = [
    {
      game: 'Wuthering Waves',
      image: wutheringWaves,
      packages: [
        {
          name: 'Daily Package',
          price: '50k',
          duration: '7 hari',
          features: ['Daily Quest Completion', 'Tacet Fields Farming', 'Simulated Universe', 'Material Collection'],
          popular: false,
        },
        {
          name: 'Weekly Package', 
          price: '150k',
          duration: '7 hari',
          features: ['Daily Quest + Weekly', 'Boss Farming', 'Echo Collection', 'Weapon Enhancement', 'Character Building'],
          popular: true,
        },
        {
          name: 'Monthly Package',
          price: '500k', 
          duration: '30 hari',
          features: ['All Daily & Weekly', 'Full Story Progress', 'Character Maxing', 'Weapon Maxing', 'Tower Clearing'],
          popular: false,
        },
      ],
    },
    {
      game: 'Genshin Impact',
      image: genshinImpact,
      packages: [
        {
          name: 'Daily Package',
          price: '45k',
          duration: '7 hari', 
          features: ['Daily Commissions', 'Resin Usage', 'Domain Runs', 'Artifact Farming'],
          popular: false,
        },
        {
          name: 'Weekly Package',
          price: '140k',
          duration: '7 hari',
          features: ['Daily + Weekly Boss', 'Spiral Abyss', 'Character Building', 'Weapon Enhancement', 'Event Completion'],
          popular: true,
        },
        {
          name: 'Monthly Package',
          price: '480k',
          duration: '30 hari',
          features: ['Full Service', 'Story Progress', 'Character Maxing', 'Weapon Maxing', 'Achievement Hunt'],
          popular: false,
        },
      ],
    },
    {
      game: 'Blue Archive',
      image: blueArchive,
      packages: [
        {
          name: 'Daily Package',
          price: '40k',
          duration: '7 hari',
          features: ['Daily Missions', 'Lesson Completion', 'Bounty Hunting', 'Resource Farming'],
          popular: false,
        },
        {
          name: 'Weekly Package',
          price: '120k', 
          duration: '7 hari',
          features: ['Daily + Weekly Raid', 'PvP Battles', 'Event Clearing', 'Student Enhancement'],
          popular: true,
        },
        {
          name: 'Monthly Package',
          price: '400k',
          duration: '30 hari',
          features: ['Full Service', 'Campaign Progress', 'Student Maxing', 'Equipment Upgrade', 'Ranking Push'],
          popular: false,
        },
      ],
    },
    {
      game: 'Arknights',
      image: arknights,
      packages: [
        {
          name: 'Daily Package',
          price: '35k',
          duration: '7 hari',
          features: ['Daily Missions', 'Sanity Usage', 'Material Farming', 'Base Management'],
          popular: false,
        },
        {
          name: 'Weekly Package',
          price: '110k',
          duration: '7 hari', 
          features: ['Daily + Weekly', 'Event Stages', 'Operator Enhancement', 'Skill Mastery'],
          popular: true,
        },
        {
          name: 'Monthly Package',
          price: '380k',
          duration: '30 hari',
          features: ['Full Service', 'Story Progress', 'Operator Maxing', 'Elite Promotion', 'Contingency Contract'],
          popular: false,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <Trophy className="w-4 h-4 mr-1" />
            All Services
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Daftar Lengkap
            <span className="bg-gaming-gradient bg-clip-text text-transparent"> Layanan Joki</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan gaming Anda
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((gameService) => (
            <div key={gameService.game} className="mb-20">
              {/* Game Header */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-lg overflow-hidden border border-border mr-4">
                  <img 
                    src={gameService.image} 
                    alt={gameService.game}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">{gameService.game}</h2>
                  <p className="text-muted-foreground">Paket layanan joki profesional</p>
                </div>
              </div>

              {/* Packages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {gameService.packages.map((pkg) => (
                  <Card key={pkg.name} className={`relative bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 ${pkg.popular ? 'ring-2 ring-primary shadow-gaming' : ''}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-accent text-accent-foreground animate-pulse-glow">
                          <Star className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl text-foreground">{pkg.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {pkg.duration}
                      </CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                        <span className="text-muted-foreground ml-1">/paket</span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                            <Users className="w-4 h-4 mr-1 text-primary" />
                            Yang Akan Dikerjakan:
                          </h4>
                          <ul className="space-y-2">
                            {pkg.features.map((feature) => (
                              <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                <Shield className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link to="/order" state={{ selectedGame: gameService.game, selectedPackage: pkg.name }}>
                          <Button 
                            className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'}`}
                          >
                            Order {pkg.name}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Mengapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card-gradient border-border">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">100% Aman</h3>
                <p className="text-muted-foreground">Tidak ada resiko banned. Kami menggunakan teknik bermain yang natural.</p>
              </CardContent>
            </Card>
            <Card className="bg-card-gradient border-border">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Pengerjaan Cepat</h3>
                <p className="text-muted-foreground">Tim profesional yang berpengalaman menyelesaikan pesanan dengan cepat.</p>
              </CardContent>
            </Card>
            <Card className="bg-card-gradient border-border">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Garansi Puas</h3>
                <p className="text-muted-foreground">Jika tidak puas dengan hasil, kami akan mengulang atau refund 100%.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;