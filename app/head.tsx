"use client";

import { MetaProps } from "@/lib/type";

const Head: React.FC<MetaProps> = ({
  title,
  description,
  url,
}) => {

  const defaultSchema =  {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: title,
    description: description,
    url: url,
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultSchema, null, 2) }}
      />
    </>
  );
};

export default Head;
