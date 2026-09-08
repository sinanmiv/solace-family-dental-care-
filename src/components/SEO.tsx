import React, { useEffect } from 'react';
import { siteConfig, getDentistSchemaJSONLD } from '../config/site.config';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  injectSchema?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = '',
  injectSchema = false,
}) => {
  const pageTitle = title 
    ? `${title} | ${siteConfig.clinicName}`
    : `${siteConfig.clinicName} – ${siteConfig.cityArea}`;
  
  const pageDescription = description || siteConfig.tagline;
  const canonicalUrl = `https://solacedental.in${path}`;

  useEffect(() => {
    document.title = pageTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDescription);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', pageDescription);
      document.head.appendChild(metaDesc);
    }

    // Inject Schema.org JSON-LD script if requested
    let schemaScript: HTMLScriptElement | null = null;
    if (injectSchema) {
      const existingScript = document.getElementById('json-ld-schema');
      if (existingScript) {
        existingScript.remove();
      }
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      schemaScript.text = JSON.stringify(getDentistSchemaJSONLD(siteConfig));
      document.head.appendChild(schemaScript);
    }

    return () => {
      if (schemaScript && schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
    };
  }, [pageTitle, pageDescription, injectSchema, canonicalUrl]);

  return null;
};
