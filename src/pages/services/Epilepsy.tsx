import { Brain } from 'lucide-react';
import ServiceDetailPage from './ServiceDetailPage';
import epilepsyImage from '@/assets/epilepsy.jpg';

const Epilepsy = () => {
  return (
    <ServiceDetailPage
      title="Epilepsy Treatment"
      image={epilepsyImage}
      icon={<Brain className="h-6 w-6" />}
      overview="Comprehensive epilepsy care including advanced diagnosis, personalized treatment plans, and ongoing management to help patients achieve seizure control and improve quality of life."
      symptoms={[
        "Sudden uncontrolled electrical activity in the brain",
        "Temporary confusion or loss of consciousness",
        "Staring spells and unresponsiveness",
        "Uncontrollable jerking movements of arms and legs",
        "Psychic symptoms like fear, déjà vu, or anxiety",
        "Loss of awareness or consciousness",
        "Unusual sensations like tingling or flashing lights"
      ]}
      treatments={[
        "Anti-epileptic medications (AEDs) customized to patient needs",
        "Video EEG monitoring for accurate diagnosis",
        "Seizure disorder classification and treatment planning",
        "Ketogenic diet therapy for drug-resistant epilepsy",
        "Lifestyle counseling and seizure trigger identification",
        "Regular monitoring and medication adjustment",
        "Emergency seizure management protocols",
        "Surgical evaluation for refractory cases"
      ]}
      whenToSeek={[
        "First-time seizure or unexplained episodes",
        "Seizures lasting more than 5 minutes",
        "Frequent seizures despite medication",
        "Side effects from current epilepsy medications",
        "Planning pregnancy with epilepsy",
        "Seizures interfering with daily activities",
        "Changes in seizure pattern or frequency"
      ]}
    />
  );
};

export default Epilepsy;