import { LegalLayout } from '../components/legal/LegalLayout';
import { aboutUs } from '../data/legal/aboutUs';

export function AboutUs() {
  return (
    <LegalLayout 
      title="About Us"
      lastUpdated="10 June 2026"
      markdownContent={aboutUs}
    />
  );
}
