import { ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import WhatsAppFloat from '@/components/WhatsAppFloat';

interface ServiceDetailPageProps {
  title: string;
  image: string;
  overview: string;
  symptoms: string[];
  treatments: string[];
  whenToSeek: string[];
  icon?: React.ReactNode;
}

const ServiceDetailPage = ({ 
  title, 
  image, 
  overview, 
  symptoms, 
  treatments, 
  whenToSeek, 
  icon 
}: ServiceDetailPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-primary hover:text-primary-hover transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </button>

          {/* Hero Section */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Image */}
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                
                {icon && (
                  <div className="absolute top-6 right-6 bg-primary text-primary-foreground p-3 rounded-xl">
                    {icon}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {title}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {overview}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => {
                      const phoneNumber = '+918200045035';
                      const message = 'I want to schedule an appointment';
                      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappURL, '_blank');
                    }}
                    className="btn-medical text-center"
                  >
                    Book Consultation
                  </button>
                  <a 
                    href="tel:+918200045035" 
                    className="btn-medical-outline text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Symptoms */}
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] medical-card-hover">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mr-3">
                  ⚠️
                </div>
                Symptoms
              </h2>
              <ul className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] medical-card-hover">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-3">
                  💊
                </div>
                Treatments
              </h2>
              <ul className="space-y-3">
                {treatments.map((treatment, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When to Seek Help */}
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] medical-card-hover">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3">
                  🏥
                </div>
                When to Seek Help
              </h2>
              <ul className="space-y-3">
                {whenToSeek.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need Expert Care for {title}?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Dr. Mauli Vora provides comprehensive neurological care with personalized treatment plans. 
              Book your consultation today for expert diagnosis and treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const phoneNumber = '+918200045035';
                  const message = 'I want to schedule an appointment';
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');
                }}
                className="btn-medical"
              >
                Schedule Appointment
              </button>
              <a 
                href="tel:+918200045035" 
                className="btn-medical-outline"
              >
                Emergency Call
              </a>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppFloat />
    </div>
  );
};

export default ServiceDetailPage;