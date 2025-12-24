
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';

const PressMediaPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Solwaste Press and Media",
    "description": "Solwaste in the news, media mentions, and press highlights.",
    "url": "https://solwaste.co/press-media"
  };

  return (
    <main className="bg-cream">
      <SEO
        title="Press & Media | Solwaste in the News"
        description="Solwaste in the news, media mentions, and press highlights. See what the world is saying about us."
        keywords="Solwaste press, Solwaste media, Solwaste news, Solwaste in the news, Solwaste coverage, Solwaste articles, Solwaste tweet"
        ogImage="https://solwaste.co/og-press-media.png"
        schema={schema}
      />
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-moss/50 via-gold/35 to-cream/60 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-moss uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[10px] sm:text-xs font-bold">
              In the News
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-charcoal leading-tight mt-3 sm:mt-4">
              Press & Media
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
              See what the world is saying about Solwaste. Explore our media mentions, press highlights, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tweet/Media Section */}
      <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden bg-white border-2 border-moss/10 shadow-md">
            <img
              src="/tweet1.png"
              alt="Customer Tweet about Solwaste Installation"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PressMediaPage;
