// SEO Components Export Index
// This file provides a clean import interface for all SEO components

export { default as SEOHead } from './SEOHead';
export type { SEOProps } from './SEOHead';

export { default as GoogleAnalytics, useGoogleAnalytics } from './GoogleAnalytics';
export { default as SearchConsole } from './SearchConsole';
export { default as LazyImage } from './LazyImage';
export { default as SEOValidator } from './SEOValidator';
export { default as SEOSetup } from './SEOSetup';

export {
  StructuredData,
  organizationSchema,
  financialServiceSchema,
  createArticleSchema,
  createFAQSchema,
  createBreadcrumbSchema
} from './StructuredData';

export {
  useAnalytics,
  useScrollDepth,
  usePerformanceTracking
} from './useAnalytics';

export { siteConfig, pageConfigs, keywordMap } from './seoConfig';

// Convenience exports for common patterns
export const SEOComponents = {
  SEOHead,
  GoogleAnalytics,
  SearchConsole,
  LazyImage,
  SEOValidator,
  SEOSetup,
  StructuredData
};

export const SEOHooks = {
  useAnalytics,
  useScrollDepth,
  usePerformanceTracking,
  useGoogleAnalytics
};

export const SEOSchemas = {
  organizationSchema,
  financialServiceSchema,
  createArticleSchema,
  createFAQSchema,
  createBreadcrumbSchema
};
