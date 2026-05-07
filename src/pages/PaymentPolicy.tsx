import { LegalLayout } from '../components/legal/LegalLayout';
import { paymentPolicy } from '../data/legal/payment-policy';

export function PaymentPolicy() {
  return (
    <LegalLayout 
      title="Payment & Settlement Policy"
      lastUpdated="May 2026"
      markdownContent={paymentPolicy}
    />
  );
}
