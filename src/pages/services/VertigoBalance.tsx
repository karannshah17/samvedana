import ServiceDetailPage from './ServiceDetailPage';
import { RotateCcw } from 'lucide-react';
import vertigoImage from '@/assets/vertigo.jpg';

const VertigoBalance = () => {
  return (
    <ServiceDetailPage
      title="Vertigo & Balance Disorders"
      image={vertigoImage}
      icon={<RotateCcw className="h-6 w-6" />}
      overview="Vertigo and balance disorders affect the inner ear and brain systems responsible for maintaining equilibrium. These conditions can significantly impact quality of life, causing dizziness, unsteadiness, and falls. Our specialized approach includes comprehensive vestibular assessment and targeted treatment."
      symptoms={[
        "Spinning sensation (vertigo) even when still",
        "Dizziness and lightheadedness",
        "Loss of balance and unsteadiness",
        "Nausea and vomiting with movement",
        "Hearing changes or ear fullness",
        "Ringing in ears (tinnitus)",
        "Headaches associated with dizziness",
        "Difficulty focusing or concentrating",
        "Anxiety about falling or moving",
        "Fatigue from constant balance effort"
      ]}
      treatments={[
        "Comprehensive vestibular and neurological examination",
        "Specialized balance and dizziness testing",
        "Canalith repositioning procedures (Epley maneuver)",
        "Vestibular rehabilitation therapy",
        "Medications for symptom management",
        "Balance training and fall prevention programs",
        "Lifestyle modifications and dietary counseling",
        "Treatment of underlying conditions",
        "Hearing assessment and management",
        "Long-term monitoring and prevention strategies"
      ]}
      whenToSeek={[
        "Seek immediate care for sudden severe vertigo with headache, weakness, or speech problems",
        "Get urgent attention for vertigo accompanied by neurological symptoms",
        "Consult promptly for persistent dizziness lasting more than a few days",
        "See a specialist for recurrent vertigo episodes",
        "Get evaluation for balance problems affecting daily activities and increasing fall risk"
      ]}
    />
  );
};

export default VertigoBalance;