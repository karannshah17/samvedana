import Header from '@/components/Header';
import drMauliVora from '@/assets/dr-mauli-vora.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Dr. Mauli Vora</h1>
          <p className="text-xl text-muted-foreground">Expert Neurologist & Founder of Samvedana Neuro Care Clinic</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Background</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Mauli Vora is a distinguished neurologist with extensive experience in treating complex neurological conditions. 
                With years of dedicated practice, Dr. Vora has established herself as a leading expert in neurological care, 
                specializing in epilepsy, stroke management, movement disorders, and various other neurological conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Education & Expertise</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Advanced training in Neurology
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Specialized expertise in Epilepsy management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Stroke prevention and treatment specialist
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Movement disorders and Parkinson's disease expert
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Samvedana Neuro Care Clinic, we are committed to providing compassionate, comprehensive neurological care. 
                Our approach combines cutting-edge medical technology with personalized treatment plans to ensure the best 
                possible outcomes for our patients.
              </p>
            </div>
          </div>

          <div className="text-center">
            <img 
              src={drMauliVora} 
              alt="Dr. Mauli Vora - Neurologist" 
              className="w-80 h-80 object-cover rounded-xl shadow-medical mx-auto mb-6"
            />
            <div className="bg-card p-6 rounded-xl shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-2">Contact Information</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>📞 Phone: +91 82000 45035</p>
                <p>📧 Email: info@samvedananeurocare.in</p>
                <p>📍 Location: Specialized Neurological Care</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-card p-8 rounded-xl shadow-card">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Why Choose Samvedana Neuro Care?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Expertise</h3>
                <p className="text-muted-foreground">Advanced neurological expertise with years of specialized experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Compassionate Care</h3>
                <p className="text-muted-foreground">Patient-centered approach with personalized treatment plans</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Modern Technology</h3>
                <p className="text-muted-foreground">State-of-the-art diagnostic and treatment facilities</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;