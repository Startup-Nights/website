import { PartnerInfo } from "../components/blocks/partnerinfo";

export default function FourOhFour() {
  return (
    <div className="bg-sn-black h-screen grid content-center">
      <PartnerInfo
        data={{
          content_block: {
            title: "Something's wrong here.",
            content: [
              "We couldn’t find the page you were looking for."
            ],
            cta: {
              link: '/',
              text: 'Go back to the landing page'
            },
            cta_secondary: {
              link: '/contact',
              text: 'Ping us'
            }
          }
        }}
      />
</div>
  );
}
