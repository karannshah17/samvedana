import Header from '@/components/Header';
import drMauliVora from '@/assets/dr-mauli-vora.jpg';
import drMauliVoramain from '@/assets/1.jpg';
import drMauliVoracard from '@/assets/2.jpg';
import drMauliVoracard2 from '@/assets/3.jpg';
import drMauliVoracard3 from '@/assets/4.jpg';
import drMauliVoracard4 from '@/assets/5.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#008E9E' }}>About Dr. Mauli Vora</h1>
                 </div>

        {/* About + Photo */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#008E9E' }}>Professional Background</h2>
              <p className="text-muted-foreground leading-relaxed font-semibold">
                Dr. Mauli Vora is a distinguished neurologist with extensive experience in treating complex neurological conditions. 
                With years of dedicated practice, Dr. Vora has established herself as a leading expert in neurological care, 
                specializing in epilepsy, stroke management, movement disorders, and various other neurological conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#008E9E' }}>Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed font-semibold">
                At Samvedana NeuroCare, we are committed to providing compassionate, comprehensive neurological care. 
                Our approach combines cutting-edge medical technology with personalized treatment plans to ensure the best 
                possible outcomes for our patients.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#008E9E' }}>Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed font-semibold">
                We envision a world where every individual has access to advanced neurological care delivered with empathy, 
                precision, and integrity. Our goal is to not only treat neurological disorders but also improve the quality 
                of life for patients and their families through awareness, education, and innovation.
              </p>
            </div>
          </div>

         {/*  <div className="text-center">*/}

            <div className="relative w-100% h-100% mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 transform hover:scale-105 transition duration-500">

              <img 
                src={drMauliVoracard4} 
                alt="Dr. Mauli Vora - Neurologist" 
                className="w-full h-full object-cover"
              />
            {/* </div>*/}
          </div>

        </div>

        {/* Why Patients Choose Dr. Mauli Vora */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#008E9E' }}>Why do patients choose Dr. Mauli Vora as their Doctor?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-84 overflow-hidden">
                <img src={drMauliVoracard} alt="Reason 3" className="w-full h-full object-cover object-top" />
              </div>

              <div className="p-8 bg-card min-h-[220px] flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#008E9E' }}>Unmatched Knowledge</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Dr. Vora’s education, training, and professional qualifications are exceptional, making her a trusted expert in the field of neurology.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-84 overflow-hidden">
                <img src={drMauliVoracard3} alt="Reason 2" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-8 bg-card min-h-[220px] flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#008E9E' }}>Personalized Care</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Every patient is treated with genuine respect, empathy, and attention, ensuring that individual needs are always prioritized.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-84 overflow-hidden">
                <img src={drMauliVoramain} alt="Reason 3" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-8 bg-card min-h-[220px] flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#008E9E' }}>Innovative Approach</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Dr. Vora is actively engaged in research and the advancement of neurology, bringing innovative ideas and practices to her patients’ care.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
