import { LegalLayout } from '../components/legal/LegalLayout';
import { termsAndConditions } from '../data/legal/terms';

export function Terms() {
  return (
    <LegalLayout 
      title="Terms & Conditions"
      lastUpdated="May 2026"
      markdownContent={termsAndConditions}
    />
  );
}
