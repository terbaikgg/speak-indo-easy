import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, MessageCircle, Phone, Clock, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Order = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    game: location.state?.selectedGame || '',
    package: location.state?.selectedPackage || '',
    accountDetails: '',
    notes: '',
  });

  const games = [
    'Wuthering Waves',
    'Genshin Impact', 
    'Blue Archive',
    'Arknights'
  ];

  const packages = {
    'Wuthering Waves': ['Daily Package (50k)', 'Weekly Package (150k)', 'Monthly Package (500k)'],
    'Genshin Impact': ['Daily Package (45k)', 'Weekly Package (140k)', 'Monthly Package (480k)'],
    'Blue Archive': ['Daily Package (40k)', 'Weekly Package (120k)', 'Monthly Package (400k)'],
    'Arknights': ['Daily Package (35k)', 'Weekly Package (110k)', 'Monthly Package (380k)']
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.whatsapp || !formData.game || !formData.package) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon lengkapi semua field yang wajib diisi",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `*ORDER JOKI GAME*\n\n` +
      `📱 Nama: ${formData.name}\n` +
      `📞 WhatsApp: ${formData.whatsapp}\n` +
      `📧 Email: ${formData.email || 'Tidak diisi'}\n` +
      `🎮 Game: ${formData.game}\n` +
      `📦 Paket: ${formData.package}\n` +
      `🔐 Detail Akun: ${formData.accountDetails || 'Akan diberikan via chat'}\n` +
      `📝 Catatan: ${formData.notes || 'Tidak ada'}\n\n` +
      `Terima kasih telah memesan layanan joki kami! 🎮`;

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Order Berhasil Dikirim!",
      description: "Anda akan diarahkan ke WhatsApp admin. Silahkan tunggu respon dari tim kami.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <ShoppingCart className="w-4 h-4 mr-1" />
            Order Form
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Buat
            <span className="bg-gaming-gradient bg-clip-text text-transparent"> Pesanan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Isi form di bawah untuk memesan layanan joki game
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Form Pemesanan</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Lengkapi informasi di bawah untuk memproses pesanan Anda
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Informasi Pribadi</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-foreground">Nama Lengkap *</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="bg-background border-border"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="whatsapp" className="text-foreground">WhatsApp *</Label>
                          <Input
                            id="whatsapp"
                            type="tel"
                            placeholder="08xxxxxxxxxx"
                            value={formData.whatsapp}
                            onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                            className="bg-background border-border"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-foreground">Email (Opsional)</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Pilih Layanan</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="game" className="text-foreground">Game *</Label>
                          <Select value={formData.game} onValueChange={(value) => handleInputChange('game', value)}>
                            <SelectTrigger className="bg-background border-border">
                              <SelectValue placeholder="Pilih game" />
                            </SelectTrigger>
                            <SelectContent>
                              {games.map((game) => (
                                <SelectItem key={game} value={game}>{game}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="package" className="text-foreground">Paket *</Label>
                          <Select 
                            value={formData.package} 
                            onValueChange={(value) => handleInputChange('package', value)}
                            disabled={!formData.game}
                          >
                            <SelectTrigger className="bg-background border-border">
                              <SelectValue placeholder="Pilih paket" />
                            </SelectTrigger>
                            <SelectContent>
                              {formData.game && packages[formData.game as keyof typeof packages]?.map((pkg) => (
                                <SelectItem key={pkg} value={pkg}>{pkg}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Account Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Detail Akun</h3>
                      
                      <div>
                        <Label htmlFor="accountDetails" className="text-foreground">
                          Informasi Login (Opsional)
                        </Label>
                        <Textarea
                          id="accountDetails"
                          placeholder="Username/Email dan password akun game (bisa diberikan nanti via chat untuk keamanan)"
                          value={formData.accountDetails}
                          onChange={(e) => handleInputChange('accountDetails', e.target.value)}
                          className="bg-background border-border min-h-[100px]"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          *Untuk keamanan, Anda bisa memberikan detail login via chat setelah order
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="notes" className="text-foreground">Catatan Tambahan</Label>
                        <Textarea
                          id="notes"
                          placeholder="Request khusus, jadwal pengerjaan, atau informasi tambahan lainnya"
                          value={formData.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Kirim ke WhatsApp Admin
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary & Info */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="bg-card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-primary" />
                    Kontak Admin
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>⏰ Online: 08:00 - 22:00 WIB</p>
                    <p>📱 Respon dalam 5-15 menit</p>
                  </div>
                </CardContent>
              </Card>

              {/* Order Info */}
              <Card className="bg-card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Informasi Pesanan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {formData.game && (
                    <div>
                      <p className="text-sm text-muted-foreground">Game:</p>
                      <p className="font-medium text-foreground">{formData.game}</p>
                    </div>
                  )}
                  {formData.package && (
                    <div>
                      <p className="text-sm text-muted-foreground">Paket:</p>
                      <p className="font-medium text-foreground">{formData.package}</p>
                    </div>
                  )}
                  
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">100% Aman & Terpercaya</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">Pengerjaan 1-7 hari</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process Steps */}
              <Card className="bg-card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Cara Order</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">1</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Isi Form</p>
                      <p className="text-xs text-muted-foreground">Lengkapi data dan pilih layanan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">2</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Chat Admin</p>
                      <p className="text-xs text-muted-foreground">Konfirmasi detail & pembayaran</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">3</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Pengerjaan</p>
                      <p className="text-xs text-muted-foreground">Tim mulai mengerjakan akun</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">4</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Selesai</p>
                      <p className="text-xs text-muted-foreground">Akun dikembalikan dengan progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;