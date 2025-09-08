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
              <h2 className="text-[#008E9E] text-3xl md:text-4xl font-bold mb-4">
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
                <h2 className="text-[#008E9E]  text-3xl md:text-4xl font-bold">
                  About Dr. Mauli Vora
                </h2>
                
                <p className="text-lg font-semibold leading-relaxed">
                  Dr. Mauli Vora is one of the best neurologists in Ahmedabad who treats a broad range of disorders related to neurological conditions. She has done MBBS from BJ Medical College, Ahmedabad. She further pursued MD Medicine from the prestigious Civil Hospital & BJ Medical College ,Ahmedabad, and DrNB in Neurology from P. D. Hinduja Hospital, Mumbai. She is passionate about the holistic approach towards patients with wide range of neurological disorders like stroke, seizures, dementia, headache, vertigo, neuropathy, myopathy to name a few, with utmost care and compassion.
                </p>
                
                <div className="space-y-4">
                                    
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      ✓
                    </div>
                    <span className="font-semibold">7+ Years Clinical Experience</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      ✓
                    </div>
                    <span className="font-semibold">1000+ Patients Successfully Treated</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      ✓
                    </div>
                    <span className="font-semibold">Specialized in Complex Neurological Cases</span>
                  </div>
                </div>
                
                <a href="#contact" className="btn-medical inline-block">
                  Schedule Consultation
                </a>
              </div>

              <div className="relative animate-fade-in">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us?</h3>
                  
                  <div className="grid gap-6">
                    <ul className="space-y-6">
  <li className="flex items-center space-x-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg">
      <Stethoscope className="h-6 w-6 text-primary" />
    </div>
    <div>
      <div className="text-lg font-semibold text-foreground">Compassionate, Personalized Neurology Care</div>
      <div className="text-sm text-muted-foreground">Individualized treatment plans tailored to each patient's unique needs</div>
    </div>
  </li>

  <li className="flex items-center space-x-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg">
      <Stethoscope className="h-6 w-6 text-primary" />
    </div>
    <div>
      <div className="text-lg font-semibold text-foreground">State-of-the-Art Diagnostic Tools</div>
      <div className="text-sm text-muted-foreground">Advanced technology for precise diagnosis and monitoring</div>
    </div>
  </li>

  <li className="flex items-center space-x-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg">
      <Stethoscope className="h-6 w-6 text-primary" />
    </div>
    <div>
      <div className="text-lg font-semibold text-foreground">Evidence-Based Medicine</div>
      <div className="text-sm text-muted-foreground">Treatment protocols based on latest scientific research and clinical studies</div>
    </div>
  </li>

  <li className="flex items-center space-x-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg">
      <Stethoscope className="h-6 w-6 text-primary" />
    </div>
    <div>
      <div className="text-lg font-semibold text-foreground">Patient Education & Counseling</div>
      <div className="text-sm text-muted-foreground">Comprehensive guidance to help patients understand their condition</div>
    </div>
  </li>

  <li className="flex items-center space-x-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg">
      <Stethoscope className="h-6 w-6 text-primary" />
    </div>
    <div>
      <div className="text-lg font-semibold text-foreground">Collaborative Care with Other Specialists</div>
      <div className="text-sm text-muted-foreground">Coordinated multidisciplinary approach for comprehensive treatment</div>
    </div>
  </li>

</ul>


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
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#008E9E' }}>
                Get Expert Neurological Care
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take the first step towards better neurological health.
                <br />
                Contact us today!
              </p>
              
              <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] medical-card-hover border border-primary/10">
                <div className="grid md:grid-cols-2 gap-8">
                  
                  <div className="space-y-6">
                    <div className="text-center md:text-left">
                      <h3 className="text-[#01287E] text-2xl font-bold mb-2">Contact Information</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:mx-0"></div>
                    </div>
                                       <div className="space-y-5 text-left">
                      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/10">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center shadow-lg">
                            📞
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground text-lg">Phone</div>
                            <div className="text-primary font-semibold text-xl tracking-wider">+91 8200045035</div>
                            <div className="text-sm text-muted-foreground">Available during clinic hours</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/10">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center shadow-lg">
                            📧
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground text-lg">Email</div>
                            <div className="text-primary font-semibold text-lg"><a href="mailto:samvedananeuro@gmail.com" className="text-primary underline">samvedananeuro@gmail.com</a></div>
                                                      </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/10">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center shadow-lg">
                            📍
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground text-lg">Location</div>
                            <div className="text-[#008E9E] font-semibold leading-relaxed">
                              Samvedana Neurocare
                              <br />
                              504, Anikedhya Capitol 2 Complex
                              <br />
                              Nr. Mahalaxi Cross road
                              <br />
                              Fatehpura, Paldi 
				<br/>Ahmedabad -380007
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-[#01287E] text-2xl font-bold  mb-2">Book Appointment</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <a 
                        href="tel:+918200045035" 
                        className="w-full btn-medical block text-center"
                      >
                        Call Now
                      </a>
                      
                      <a 
                        href="https://wa.me/+918200045035?text=Hi, I would like to book an appointment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-medical-outline block text-center"
                      >
                        WhatsApp
                      </a>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/10">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center shadow-lg">
                          🕒
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-foreground text-lg">Hours</div>
                          <div className="text-[#008E9E] font-semibold text-lg">Mon-Sat: 11 AM to 8 PM</div>
                                                  </div>
                      </div>
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