/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="hidden sm:block" />
        Let's build something together!
      </p>
      <Link className="btn" to="/contact">
        Conatct
      </Link>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
