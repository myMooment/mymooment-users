import { LegalLayout } from '../components/legal/LegalLayout';
import { vendorAgreement } from '../data/legal/vendor-agreement';

export function VendorAgreement() {
  return (
    <LegalLayout 
      title="Vendor Agreement"
      lastUpdated="May 2026"
      markdownContent={vendorAgreement}
    />
  );
}
