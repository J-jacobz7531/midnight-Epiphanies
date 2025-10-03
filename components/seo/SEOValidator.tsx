import React, { useEffect, useState } from 'react';

interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
}

interface SEOValidatorProps {
  enabled?: boolean;
}

const SEOValidator: React.FC<SEOValidatorProps> = ({ enabled = false }) => {
  const [issues, setIssues] = useState<SEOIssue[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled || process.env.NODE_ENV === 'production') return;

    const validateSEO = () => {
      const foundIssues: SEOIssue[] = [];

      // Check for title tag
      const title = document.querySelector('title');
      if (!title || !title.textContent) {
        foundIssues.push({
          type: 'error',
          message: 'Missing page title',
          element: '<title>'
        });
      } else if (title.textContent.length > 60) {
        foundIssues.push({
          type: 'warning',
          message: `Title too long (${title.textContent.length} chars). Recommended: 50-60 chars`,
          element: '<title>'
        });
      }

      // Check for meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc || !metaDesc.getAttribute('content')) {
        foundIssues.push({
          type: 'error',
          message: 'Missing meta description',
          element: '<meta name="description">'
        });
      } else {
        const descLength = metaDesc.getAttribute('content')?.length || 0;
        if (descLength > 160) {
          foundIssues.push({
            type: 'warning',
            message: `Meta description too long (${descLength} chars). Recommended: 150-160 chars`,
            element: '<meta name="description">'
          });
        }
      }

      // Check for canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        foundIssues.push({
          type: 'warning',
          message: 'Missing canonical URL',
          element: '<link rel="canonical">'
        });
      }

      // Check for Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      
      if (!ogTitle) {
        foundIssues.push({
          type: 'warning',
          message: 'Missing Open Graph title',
          element: '<meta property="og:title">'
        });
      }
      
      if (!ogDesc) {
        foundIssues.push({
          type: 'warning',
          message: 'Missing Open Graph description',
          element: '<meta property="og:description">'
        });
      }
      
      if (!ogImage) {
        foundIssues.push({
          type: 'warning',
          message: 'Missing Open Graph image',
          element: '<meta property="og:image">'
        });
      }

      // Check for H1 tags
      const h1Tags = document.querySelectorAll('h1');
      if (h1Tags.length === 0) {
        foundIssues.push({
          type: 'error',
          message: 'Missing H1 tag',
          element: '<h1>'
        });
      } else if (h1Tags.length > 1) {
        foundIssues.push({
          type: 'warning',
          message: `Multiple H1 tags found (${h1Tags.length}). Recommended: 1 per page`,
          element: '<h1>'
        });
      }

      // Check for images without alt text
      const images = document.querySelectorAll('img');
      let imagesWithoutAlt = 0;
      images.forEach(img => {
        if (!img.getAttribute('alt')) {
          imagesWithoutAlt++;
        }
      });
      
      if (imagesWithoutAlt > 0) {
        foundIssues.push({
          type: 'warning',
          message: `${imagesWithoutAlt} images missing alt text`,
          element: '<img>'
        });
      }

      // Check for structured data
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
      if (structuredData.length === 0) {
        foundIssues.push({
          type: 'info',
          message: 'No structured data found',
          element: '<script type="application/ld+json">'
        });
      } else {
        foundIssues.push({
          type: 'info',
          message: `${structuredData.length} structured data blocks found`,
          element: '<script type="application/ld+json">'
        });
      }

      setIssues(foundIssues);
    };

    // Run validation after a short delay to ensure DOM is ready
    const timer = setTimeout(validateSEO, 1000);
    return () => clearTimeout(timer);
  }, [enabled]);

  if (!enabled || process.env.NODE_ENV === 'production' || issues.length === 0) {
    return null;
  }

  const errorCount = issues.filter(issue => issue.type === 'error').length;
  const warningCount = issues.filter(issue => issue.type === 'warning').length;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`px-4 py-2 rounded-lg text-white font-medium shadow-lg ${
          errorCount > 0 ? 'bg-red-500 hover:bg-red-600' : 
          warningCount > 0 ? 'bg-yellow-500 hover:bg-yellow-600' : 
          'bg-green-500 hover:bg-green-600'
        }`}
      >
        SEO: {errorCount}E {warningCount}W
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 w-96 max-h-96 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-xl">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">SEO Validation</h3>
            <p className="text-sm text-gray-600">
              {errorCount} errors, {warningCount} warnings
            </p>
          </div>
          
          <div className="p-4 space-y-3">
            {issues.map((issue, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  issue.type === 'error' ? 'bg-red-500' :
                  issue.type === 'warning' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{issue.message}</p>
                  {issue.element && (
                    <code className="text-xs text-gray-600 bg-gray-100 px-1 rounded">
                      {issue.element}
                    </code>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-600">
              SEO validation is only shown in development mode
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOValidator;
