import { metaConfig } from "@/config/meta";

export default function Head() {
  return (
    <>
      <title>{`${metaConfig.name} - ${metaConfig.description}`}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={metaConfig.description} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaConfig.name} />
      <meta property="og:description" content={metaConfig.description} />
      <meta name="twitter:title" content={metaConfig.name} />
      <meta name="twitter:description" content={metaConfig.description} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
