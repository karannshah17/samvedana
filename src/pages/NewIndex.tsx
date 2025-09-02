import { Brain, Zap, Heart, Activity, Users, Stethoscope } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import epilepsyImage from '@/assets/epilepsy.jpg';
import headacheImage from '@/assets/headache.jpg';
import strokeImage from '@/assets/stroke.jpg';
import movementImage from '@/assets/movement-disorders.jpg';

const NewIndex = () => {
  const services = [
    {
      title: 'Epilepsy Treatment',
      description: 'Advanced diagnosis and management of epilepsy and seizure disorders with personalized treatment plans and comprehensive care.',
      image: epilepsyImage,
      href: '/services/epilepsy',
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: 'Headache & Migraine',
      description: 'Specialized care for chronic headaches and migraines including both preventive treatments and acute management strategies.',
      image: headacheImage,
      href: '/services/headache',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Stroke Management',
      description: 'Comprehensive stroke care including prevention, emergency treatment, rehabilitation planning, and long-term management.',
      image: strokeImage,
      href: '/services/stroke',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Movement Disorders',
      description: 'Expert care for Parkinson\'s disease, tremors, dystonia and other movement disorders with advanced treatment options.',
      image: movementImage,
      href: '/services/movement-disorders',
      icon: <Activity className="h-6 w-6" />
    },
    {
      title: 'Memory Disorders',
      description: 'Comprehensive evaluation and management of dementia, Alzheimer\'s disease and other cognitive impairments.',
      image: epilepsyImage, // Using existing image as placeholder
      href: '/services/memory-disorders',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Neuropathy Treatment',
      description: 'Specialized care for peripheral nerve disorders, diabetic neuropathy, and neuropathic pain management.',
      image: headacheImage, // Using existing image as placeholder
      href: '/services/neuropathy',
      icon: <Stethoscope className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Specialized Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive neurological care with advanced diagnostic capabilities and 
                personalized treatment approaches for various neurological conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  About Dr. Mauli Vora
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dr. Mauli Vora is a highly skilled neurologist with extensive experience in 
                  diagnosing and treating complex neurological disorders. With her compassionate 
                  approach and evidence-based practice, she provides personalized care to each patient.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-foreground">MBBS, MD, DNB Neurology</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-foreground">15+ Years Clinical Experience</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-foreground">5000+ Patients Successfully Treated</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-foreground">Specialized in Complex Neurological Cases</span>
                  </div>
                </div>
                
                <a href="#contact" className="btn-medical inline-block">
                  Schedule Consultation
                </a>
              </div>

              <div className="relative animate-fade-in">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us?</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">5000+</div>
                      <div className="text-sm text-muted-foreground">Happy Patients</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">6</div>
                      <div className="text-sm text-muted-foreground">Specializations</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Get Expert Neurological Care
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take the first step towards better neurological health. 
                Contact us today to schedule your consultation with Dr. Mauli Vora.
              </p>
              
              <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] medical-card-hover">
                <div className="grid md:grid-cols-2 gap-8">
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
                    
                    <div className="space-y-3 text-left">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          📞
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Phone</div>
                          <div className="text-muted-foreground">+91 8200045035</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          📍
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Location</div>
                          <div className="text-muted-foreground">Paldi, Ahmedabad</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          🕒
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Hours</div>
                          <div className="text-muted-foreground">Mon-Sat: 9AM-7PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">Book Appointment</h3>
                    
                    <div className="space-y-3">
                      <a 
                        href="tel:+918200045035" 
                        className="w-full btn-medical block text-center"
                      >
                        Call Now
                      </a>
                      
                      <a 
                        href="https://wa.me/8200045035?text=Hi, I would like to book an appointment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-medical-outline block text-center"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </div>
  );
};

export default NewIndex;