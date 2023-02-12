import { GithubLogo, TwitterLogo, EnvelopeSimple } from 'phosphor-react';

export function Footer() {
  return (
    <footer className="footer">
      <a href='https://github.com/salieflewis' target='_blank'>
        <GithubLogo size={24} />
      </a>
      <a href='https://twitter.com/salieflewis' target='_blank'>
        <TwitterLogo size={24} />
      </a>
      <a href='mailto:salieflewis@gmail.com' target='_blank'>
        <EnvelopeSimple size={24} />
      </a>
    </footer>
  );
}
