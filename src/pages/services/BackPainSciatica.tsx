import ServiceDetailPage from './ServiceDetailPage';
import { Zap } from 'lucide-react';
import backPainImage from '@/assets/back-pain.jpg';

const BackPainSciatica = () => {
  return (
    <ServiceDetailPage
      title="Back Pain & Sciatica"
      image={backPainImage}
      icon={<Zap className="h-6 w-6" />}
      overview="Back pain and sciatica are common neurological conditions affecting the spine and nerve roots. Sciatica specifically involves pain radiating along the sciatic nerve, which runs from the lower back through the hips and down each leg. Our specialized approach focuses on identifying the root cause and providing comprehensive treatment."
      symptoms={[
        "Lower back pain ranging from dull ache to sharp, stabbing pain",
        "Pain radiating down one or both legs",
        "Tingling or numbness in legs or feet",
        "Muscle weakness in affected leg",
        "Burning sensation along the nerve path",
        "Pain that worsens with sitting or coughing",
        "Difficulty standing up straight",
        "Pain that improves when walking or lying down",
        "Sharp, shooting pain with movement",
        "Loss of bladder or bowel control (emergency symptom)"
      ]}
      treatments={[
        "Comprehensive neurological examination and imaging",
        "Nerve conduction studies and EMG when indicated",
        "Anti-inflammatory medications and pain management",
        "Nerve blocks and epidural injections",
        "Physical therapy and rehabilitation programs",
        "Specialized exercises for core strengthening",
        "Ergonomic counseling and lifestyle modifications",
        "Advanced interventional procedures",
        "Surgical consultation when conservative treatment fails",
        "Long-term prevention strategies"
      ]}
      whenToSeek={[
        "Consult immediately if experiencing severe back pain with leg weakness",
        "Seek emergency care for loss of bladder or bowel control",
        "Get prompt attention for progressive neurological symptoms",
        "See a specialist for persistent sciatic pain lasting more than a few days",
        "Consult for pain that significantly impacts daily activities"
      ]}
    />
  );
};

export default BackPainSciatica;