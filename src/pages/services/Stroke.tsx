import { Heart } from 'lucide-react';
import ServiceDetailPage from './ServiceDetailPage';
import strokeImage from '@/assets/stroke.jpg';

const Stroke = () => {
  return (
    <ServiceDetailPage
      title="Stroke Management"
      image={strokeImage}
      icon={<Heart className="h-6 w-6" />}
      overview="Comprehensive stroke care including emergency treatment, prevention strategies, rehabilitation planning, and ongoing management to minimize long-term complications."
      symptoms={[
        "Sudden weakness or numbness in face, arm, or leg",
        "Confusion, trouble speaking or understanding speech",
        "Difficulty seeing in one or both eyes",
        "Trouble walking, dizziness, loss of balance",
        "Severe headache with no known cause",
        "Sudden difficulty swallowing",
        "Loss of consciousness or alertness",
        "Facial drooping on one side"
      ]}
      treatments={[
        "Emergency stroke evaluation and treatment",
        "Thrombolytic therapy for acute ischemic stroke",
        "Blood pressure and cholesterol management",
        "Antiplatelet and anticoagulation therapy",
        "Carotid artery evaluation and treatment",
        "Comprehensive stroke rehabilitation planning",
        "Secondary stroke prevention strategies",
        "Risk factor modification and lifestyle counseling"
      ]}
      whenToSeek={[
        "Any sudden onset of stroke symptoms (F.A.S.T.)",
        "Face drooping, Arm weakness, Speech difficulty, Time to call emergency",
        "Sudden severe headache with neurological symptoms",
        "Transient ischemic attack (mini-stroke) symptoms",
        "High stroke risk factors requiring evaluation",
        "Follow-up care after stroke or TIA",
        "Medication management for stroke prevention"
      ]}
    />
  );
};

export default Stroke;