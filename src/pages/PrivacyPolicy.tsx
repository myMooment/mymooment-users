import { LegalLayout } from '../components/legal/LegalLayout';
import { privacyPolicy } from '../data/legal/privacy';

export function PrivacyPolicy() {
  return (
    <LegalLayout 
      title="Privacy Policy"
      lastUpdated="May 2026"
      markdownContent={privacyPolicy}
    />
  );
}
