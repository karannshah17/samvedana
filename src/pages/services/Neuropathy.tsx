import { Stethoscope } from 'lucide-react';
import ServiceDetailPage from './ServiceDetailPage';
import headacheImage from '@/assets/headache.jpg'; // Using existing image as placeholder

const Neuropathy = () => {
  return (
    <ServiceDetailPage
      title="Neuropathy Treatment"
      image={headacheImage}
      icon={<Stethoscope className="h-6 w-6" />}
      overview="Specialized evaluation and treatment for peripheral nerve disorders including diabetic neuropathy, inflammatory neuropathies, and neuropathic pain management."
      symptoms={[
        "Numbness and tingling in hands or feet",
        "Burning or sharp shooting pain",
        "Weakness in affected limbs",
        "Loss of sensation or abnormal sensations",
        "Balance problems and difficulty walking",
        "Muscle cramps and twitching",
        "Sensitivity to touch or temperature",
        "Coordination difficulties with fine motor tasks"
      ]}
      treatments={[
        "Comprehensive nerve conduction studies",
        "Electromyography (EMG) testing",
        "Neuropathic pain medications (gabapentin, pregabalin)",
        "Diabetic neuropathy management and glucose control",
        "Immune-modulating therapy for inflammatory neuropathies",
        "Physical therapy and occupational therapy referrals",
        "Topical treatments for localized neuropathic pain",
        "Vitamin supplementation for deficiency-related neuropathies"
      ]}
      whenToSeek={[
        "New onset numbness or tingling",
        "Progressive weakness in arms or legs",
        "Persistent burning or shooting pain",
        "Balance problems or frequent falls",
        "Diabetic patients with foot numbness",
        "Symptoms following illness or medication",
        "Family history of hereditary neuropathy"
      ]}
    />
  );
};

export default Neuropathy;