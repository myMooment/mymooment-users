import { LegalLayout } from '../components/legal/LegalLayout';
import { refundPolicy } from '../data/legal/refund-policy';

export function RefundPolicy() {
  return (
    <LegalLayout 
      title="Refund & Cancellation Policy"
      lastUpdated="May 2026"
      markdownContent={refundPolicy}
    />
  );
}
