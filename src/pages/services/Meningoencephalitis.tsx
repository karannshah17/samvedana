import ServiceDetailPage from './ServiceDetailPage';
import { Brain } from 'lucide-react';
import meningoencephalitisImage from '@/assets/meningoencephalitis.jpg';

const Meningoencephalitis = () => {
  return (
    <ServiceDetailPage
      title="Meningoencephalitis"
      image={meningoencephalitisImage}
      icon={<Brain className="h-6 w-6" />}
      overview="Meningoencephalitis is a serious condition involving inflammation of both the brain (encephalitis) and the protective membranes covering the brain and spinal cord (meningitis). This dual inflammation requires immediate medical attention and specialized neurological care."
      symptoms={[
        "Severe headache with neck stiffness",
        "High fever and chills",
        "Confusion and altered mental state",
        "Sensitivity to light (photophobia)",
        "Nausea and vomiting",
        "Seizures",
        "Difficulty speaking or understanding speech",
        "Memory problems",
        "Drowsiness or loss of consciousness",
        "Skin rash (in some cases)"
      ]}
      treatments={[
        "Immediate hospitalization and intensive care monitoring",
        "Intravenous antiviral medications (for viral causes)",
        "Antibiotics (for bacterial causes)",
        "Corticosteroids to reduce brain inflammation",
        "Anti-seizure medications if needed",
        "Supportive care including fluid management",
        "Pain management and fever control",
        "Rehabilitation therapy for recovery",
        "Long-term neurological monitoring",
        "Preventive measures and vaccination counseling"
      ]}
      whenToSeek={[
        "Seek immediate emergency care if experiencing severe headache with fever and neck stiffness",
        "Contact emergency services for confusion, seizures, or altered mental state",
        "Get urgent medical attention for any combination of neurological symptoms",
        "Meningoencephalitis is a medical emergency requiring immediate treatment"
      ]}
    />
  );
};

export default Meningoencephalitis;