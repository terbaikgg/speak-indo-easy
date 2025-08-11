import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import wutheringWaves from '@/assets/wuthering-waves.jpg';
import genshinImpact from '@/assets/genshin-impact.jpg';
import blueArchive from '@/assets/blue-archive.jpg';
import arknights from '@/assets/arknights.jpg';

const GameServices = () => {
  const games = [
    {
      name: 'Wuthering Waves',
      image: wutheringWaves,
      description: 'Joki daily quest, farming materials, dan progression character',
      services: ['Daily Quest', 'Farming Materials', 'Character Build', 'Story Progress'],
      price: 'Mulai dari 50k',
      popular: true,
    },
    {
      name: 'Genshin Impact',
      image: genshinImpact,
      description: 'Complete daily commissions, domains, dan event clearing',
      services: ['Daily Commissions', 'Domain Runs', 'Spiral Abyss', 'Event Completion'],
      price: 'Mulai dari 45k',
      popular: false,
    },
    {
      name: 'Blue Archive',
      image: blueArchive,
      description: 'Campaign clearing, raid participation, dan PvP ranking',
      services: ['Campaign Progress', 'Raid Clearing', 'PvP Boost', 'Event Farming'],
      price: 'Mulai dari 40k',
      popular: false,
    },
    {
      name: 'Arknights',
      image: arknights,
      description: 'Stage clearing, operator farming, dan resource management',
      services: ['Stage Clearing', 'Operator Farming', 'Resource Management', 'Event Maps'],
      price: 'Mulai dari 35k',
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <Star className="w-4 h-4 mr-1" />
            Game Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Layanan Joki Game
            <span className="bg-gaming-gradient bg-clip-text text-transparent"> Terlengkap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih game favorit Anda dan biarkan tim profesional kami menyelesaikan misi Anda
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {games.map((game, index) => (
            <Card key={game.name} className="group hover:shadow-gaming transition-all duration-300 bg-card-gradient border-border hover:border-primary/50 relative overflow-hidden">
              {game.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-accent text-accent-foreground animate-pulse-glow">
                    <Zap className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-border">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {game.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {game.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Services */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-1 text-primary" />
                      Layanan Tersedia:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {game.services.map((service) => (
                        <Badge key={service} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-2xl font-bold text-primary">{game.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">/paket</span>
                    </div>
                    <Link to="/order" state={{ selectedGame: game.name }}>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                        Order
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Lihat Semua Layanan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GameServices;