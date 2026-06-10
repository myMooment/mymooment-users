import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './features/landing/LandingPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { RefundPolicy } from './pages/RefundPolicy';
import { PaymentPolicy } from './pages/PaymentPolicy';
import { VendorAgreement } from './pages/VendorAgreement';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/payment-policy" element={<PaymentPolicy />} />
        <Route path="/vendor-agreement" element={<VendorAgreement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
