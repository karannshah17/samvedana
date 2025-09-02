import { Activity } from 'lucide-react';
import ServiceDetailPage from './ServiceDetailPage';
import movementImage from '@/assets/movement-disorders.jpg';

const MovementDisorders = () => {
  return (
    <ServiceDetailPage
      title="Movement Disorders"
      image={movementImage}
      icon={<Activity className="h-6 w-6" />}
      overview="Expert diagnosis and treatment of movement disorders including Parkinson's disease, essential tremor, dystonia, and other conditions affecting movement and coordination."
      symptoms={[
        "Tremor or shaking of hands, arms, or legs",
        "Muscle stiffness and rigidity",
        "Slowness of movement (bradykinesia)",
        "Balance problems and frequent falls",
        "Involuntary muscle contractions (dystonia)",
        "Difficulty with fine motor tasks",
        "Changes in handwriting or speech",
        "Restlessness or inability to sit still"
      ]}
      treatments={[
        "Comprehensive movement disorder evaluation",
        "Dopaminergic medications for Parkinson's disease",
        "Deep brain stimulation (DBS) consultation",
        "Botulinum toxin injections for dystonia",
        "Physical and occupational therapy referrals",
        "Speech therapy for voice and swallowing issues",
        "Medication optimization and adjustment",
        "Exercise and lifestyle modification programs"
      ]}
      whenToSeek={[
        "New onset tremor or shaking",
        "Progressive difficulty with movement",
        "Balance problems or frequent falls",
        "Changes in handwriting or fine motor skills",
        "Involuntary muscle movements or spasms",
        "Medication side effects or wearing-off symptoms",
        "Need for advanced treatment options evaluation"
      ]}
    />
  );
};

export default MovementDisorders;