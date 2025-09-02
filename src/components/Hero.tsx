import { useEffect, useState } from 'react';
import { Stethoscope, Award, Users, Clock } from 'lucide-react';
import drMauliVora from '@/assets/dr-mauli-vora.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: '5000+', label: 'Patients Treated' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Stethoscope, value: '6', label: 'Specializations' },
    { icon: Clock, value: '24/7', label: 'Emergency Support' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Expert Neurological Care in
                <span className="text-primary"> Paldi</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Comprehensive diagnosis and treatment for neurological disorders with 
                compassionate, evidence-based care by Dr. Mauli Vora
              </p>
              
              <div className="text-lg text-foreground">
                <p className="font-semibold">Dr. Mauli Vora</p>
                <p className="text-muted-foreground">MBBS, MD, DNB Neuro</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-medical text-center"
              >
                Book Appointment
              </a>
              <a 
                href="#services" 
                className="btn-medical-outline text-center"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className={`relative ${isVisible ? 'animate-doctor-entrance' : 'opacity-0'}`}>
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-6 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-accent/10 rounded-3xl transform -rotate-3 scale-110"></div>
              
              {/* Doctor Image */}
              <div className="relative bg-card rounded-3xl p-6 shadow-[var(--shadow-medical)] medical-card-hover">
                <img
                  src={drMauliVora}
                  alt="Dr. Mauli Vora - Neurologist"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                />
                
                {/* Doctor Info Overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground">Dr. Mauli Vora</h3>
                  <p className="text-primary font-semibold">Consultant Neurologist</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    MBBS, MD, DNB Neuro • 2+ Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse-medical"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-pulse-medical" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/5 rounded-full animate-pulse-medical" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;