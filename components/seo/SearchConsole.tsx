import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SearchConsoleProps {
  verificationCode: string;
}

const SearchConsole: React.FC<SearchConsoleProps> = ({ verificationCode }) => {
  return (
    <Helmet>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content={verificationCode} />
      
      {/* Bing Webmaster Tools Verification (optional) */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
    </Helmet>
  );
};

export default SearchConsole;
