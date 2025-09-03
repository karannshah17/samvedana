import ServiceDetailPage from './ServiceDetailPage';
import { Shield } from 'lucide-react';
import msImage from '@/assets/multiple-sclerosis.jpg';

const MultipleSclerosis = () => {
  return (
    <ServiceDetailPage
      title="Multiple Sclerosis"
      image={msImage}
      icon={<Shield className="h-6 w-6" />}
      overview="Multiple Sclerosis (MS) is a chronic autoimmune condition affecting the central nervous system. The immune system mistakenly attacks the protective covering of nerve fibers, disrupting communication between the brain and body. Early diagnosis and comprehensive care are crucial for managing symptoms and slowing progression."
      symptoms={[
        "Fatigue and weakness",
        "Numbness or tingling in limbs",
        "Vision problems, including blurred or double vision",
        "Difficulty with coordination and balance",
        "Muscle stiffness and spasms",
        "Problems with thinking and memory",
        "Emotional changes and depression",
        "Speech and swallowing difficulties",
        "Bowel and bladder dysfunction",
        "Heat sensitivity and temperature intolerance"
      ]}
      treatments={[
        "Disease-modifying therapies (DMTs) to slow progression",
        "Comprehensive neurological monitoring with MRI",
        "Corticosteroids for acute relapses",
        "Symptom-specific medications",
        "Physical therapy and rehabilitation",
        "Occupational therapy for daily living skills",
        "Speech and swallowing therapy",
        "Fatigue management strategies",
        "Psychological support and counseling",
        "Lifestyle modifications and wellness programs"
      ]}
      whenToSeek={[
        "Seek evaluation for unexplained neurological symptoms such as vision changes",
        "Consult for persistent numbness, weakness, or coordination problems",
        "Get early consultation for multiple symptoms that come and go",
        "See a specialist if symptoms affect different parts of the body",
        "Schedule evaluation for any combination of neurological symptoms"
      ]}
    />
  );
};

export default MultipleSclerosis;