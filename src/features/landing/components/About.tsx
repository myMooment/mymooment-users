import { Container } from '../../../components/ui/Container';
import { SectionHeading } from '../../../components/ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            badge="Our Story"
            title="Built with Love for Life's Best Moments"
          />
          <div className="space-y-5 text-slate-500 text-base leading-relaxed -mt-6">
            <p>
              At myMooment, we exist to support people in creating memorable 
              experiences with <span className="text-slate-700 font-semibold">comfort, trust, and simplicity</span> at the core.
            </p>
            <p>
              Driven by a passion for celebration, myMooment continues to grow as a go-to name 
              for those who value detail, ease, and unforgettable moments.
            </p>
            <p className="text-slate-700 font-medium text-lg italic">
              "Every step we take is guided by the belief that life's moments 
              deserve to be cherished — beautifully."
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
