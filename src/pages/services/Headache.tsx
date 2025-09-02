import { Zap } from 'lucide-react';
import ServiceDetailPage from './ServiceDetailPage';
import headacheImage from '@/assets/headache.jpg';

const Headache = () => {
  return (
    <ServiceDetailPage
      title="Headache & Migraine Treatment"
      image={headacheImage}
      icon={<Zap className="h-6 w-6" />}
      overview="Specialized care for chronic headaches and migraines with comprehensive evaluation, personalized treatment plans, and both preventive and acute management strategies."
      symptoms={[
        "Severe throbbing or pulsating head pain",
        "Nausea and vomiting during headache episodes",
        "Sensitivity to light (photophobia) and sound (phonophobia)",
        "Visual disturbances or aura before headache",
        "Neck stiffness and muscle tension",
        "Dizziness or vertigo with headaches",
        "Difficulty concentrating during episodes",
        "Fatigue and mood changes"
      ]}
      treatments={[
        "Comprehensive headache evaluation and classification",
        "Preventive medications to reduce frequency",
        "Acute treatment options for immediate relief",
        "Botox injections for chronic migraine",
        "Lifestyle modification and trigger identification",
        "Stress management and relaxation techniques",
        "Nutritional counseling and dietary changes",
        "CGRP inhibitors for migraine prevention"
      ]}
      whenToSeek={[
        "Sudden, severe headache unlike any before",
        "Headaches with fever, stiff neck, or rash",
        "Increasing frequency or severity of headaches",
        "Headaches after head injury",
        "Changes in vision, speech, or coordination",
        "Headaches interfering with work or daily life",
        "Headaches not responding to over-the-counter medications"
      ]}
    />
  );
};

export default Headache;