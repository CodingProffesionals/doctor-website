import "@/styles/globals.css";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return <><Script type="text/javascript" 
  src="https://assets.calendly.com/assets/external/widget.js" 
  onLoad={() => {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/forte-test-only/15min',
      parentElement: document.getElementById('calendly-embed'),
      prefill: {},
      utm: {},
      resize: true
     })  }}></Script><Component {...pageProps} />

</>;
}
