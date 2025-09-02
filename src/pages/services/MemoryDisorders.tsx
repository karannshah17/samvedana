import { Users } from 'lucide-react';
import ServiceDetailPage from './ServiceDetailPage';
import epilepsyImage from '@/assets/epilepsy.jpg'; // Using existing image as placeholder

const MemoryDisorders = () => {
  return (
    <ServiceDetailPage
      title="Memory Disorders"
      image={epilepsyImage}
      icon={<Users className="h-6 w-6" />}
      overview="Comprehensive evaluation and management of memory disorders including dementia, Alzheimer's disease, and other cognitive impairments with personalized care plans."
      symptoms={[
        "Progressive memory loss affecting daily activities",
        "Difficulty remembering recent events or conversations",
        "Confusion about time, place, or familiar people",
        "Problems with language and communication",
        "Changes in mood, behavior, or personality",
        "Difficulty with complex tasks or decision-making",
        "Getting lost in familiar places",
        "Misplacing items frequently"
      ]}
      treatments={[
        "Comprehensive cognitive assessment and testing",
        "Cholinesterase inhibitors for Alzheimer's disease",
        "NMDA receptor antagonists for moderate to severe dementia",
        "Behavioral interventions and cognitive stimulation",
        "Family education and caregiver support",
        "Safety planning and home environment modifications",
        "Management of behavioral and psychological symptoms",
        "Coordination with multidisciplinary care teams"
      ]}
      whenToSeek={[
        "Noticeable memory problems affecting daily life",
        "Difficulty completing familiar tasks",
        "Confusion about time or place",
        "Changes in judgment or decision-making",
        "Problems with language or communication",
        "Mood or personality changes",
        "Family concerns about cognitive changes"
      ]}
    />
  );
};

export default MemoryDisorders;