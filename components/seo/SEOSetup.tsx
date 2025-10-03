import React from 'react';
import GoogleAnalytics from './GoogleAnalytics';
import SearchConsole from './SearchConsole';
import SEOValidator from './SEOValidator';
import { usePerformanceTracking, useScrollDepth } from './useAnalytics';

interface SEOSetupProps {
  googleAnalyticsId?: string;
  searchConsoleCode?: string;
  enableValidator?: boolean;
}

const SEOSetup: React.FC<SEOSetupProps> = ({
  googleAnalyticsId = 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  searchConsoleCode = 'YOUR-SEARCH-CONSOLE-CODE', // Replace with actual verification code
  enableValidator = process.env.NODE_ENV === 'development'
}) => {
  // Enable performance tracking
  usePerformanceTracking();
  
  // Enable scroll depth tracking
  useScrollDepth();

  return (
    <>
      {/* Google Analytics 4 */}
      {googleAnalyticsId && googleAnalyticsId !== 'G-XXXXXXXXXX' && (
        <GoogleAnalytics measurementId={googleAnalyticsId} />
      )}
      
      {/* Google Search Console Verification */}
      {searchConsoleCode && searchConsoleCode !== 'YOUR-SEARCH-CONSOLE-CODE' && (
        <SearchConsole verificationCode={searchConsoleCode} />
      )}
      
      {/* SEO Validator (development only) */}
      <SEOValidator enabled={enableValidator} />
    </>
  );
};

export default SEOSetup;
