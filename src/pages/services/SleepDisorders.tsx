import ServiceDetailPage from './ServiceDetailPage';
import { Moon } from 'lucide-react';
import sleepImage from '@/assets/sleep-disorders.jpg';

const SleepDisorders = () => {
  return (
    <ServiceDetailPage
      title="Sleep Disorders"
      image={sleepImage}
      icon={<Moon className="h-6 w-6" />}
      overview="Sleep disorders encompass a range of conditions that affect sleep quality, timing, and duration. These neurological conditions can significantly impact physical health, mental well-being, and daily functioning. Our comprehensive approach includes detailed sleep assessment and personalized treatment strategies."
      symptoms={[
        "Difficulty falling asleep or staying asleep",
        "Excessive daytime sleepiness",
        "Loud snoring and breathing interruptions",
        "Restless or uncomfortable leg sensations",
        "Sudden muscle weakness with emotions (cataplexy)",
        "Sleep walking or talking",
        "Nightmares or night terrors",
        "Morning headaches",
        "Difficulty concentrating during the day",
        "Mood changes and irritability"
      ]}
      treatments={[
        "Comprehensive sleep history and clinical evaluation",
        "Sleep study (polysomnography) when indicated",
        "Continuous Positive Airway Pressure (CPAP) therapy",
        "Medications for specific sleep disorders",
        "Sleep hygiene education and behavioral therapy",
        "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
        "Treatment of underlying medical conditions",
        "Lifestyle modifications and sleep scheduling",
        "Management of sleep-related movement disorders",
        "Long-term monitoring and follow-up care"
      ]}
      whenToSeek={[
        "Consult if experiencing persistent sleep problems lasting more than a month",
        "Seek help for excessive daytime sleepiness affecting work or safety",
        "Get evaluation for loud snoring with breathing pauses",
        "See a specialist for unusual behaviors during sleep",
        "Seek prompt evaluation for sudden onset sleep attacks or muscle weakness triggered by emotions"
      ]}
    />
  );
};

export default SleepDisorders;