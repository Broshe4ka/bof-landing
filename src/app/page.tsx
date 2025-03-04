import Welcome from '@/components/sections/welcome/welcome';
import About from '@/components/sections/about/about';
import Subs from '@/components/sections/subs/subs';
import Faq from '@/components/sections/faq/faq';

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Subs />
      <Faq />
    </>
  );
}
