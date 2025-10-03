import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Enhanced analytics hook for tracking page views and events
export const useAnalytics = () => {
  const location = useLocation();

  // Track page views automatically on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location]);

  // Track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: location.pathname,
        ...parameters,
      });
    }
  };

  // Track contact form submissions
  const trackContactForm = (formType: string) => {
    trackEvent('contact_form_submit', {
      event_category: 'lead_generation',
      form_type: formType,
      page_path: location.pathname,
    });
  };

  // Track investment interest
  const trackInvestmentInterest = (investmentType: string) => {
    trackEvent('investment_interest', {
      event_category: 'business_objective',
      investment_type: investmentType,
      page_path: location.pathname,
    });
  };

  // Track document downloads
  const trackDocumentDownload = (documentName: string) => {
    trackEvent('document_download', {
      event_category: 'engagement',
      document_name: documentName,
      page_path: location.pathname,
    });
  };

  // Track external link clicks
  const trackExternalLink = (linkUrl: string, linkText: string) => {
    trackEvent('external_link_click', {
      event_category: 'engagement',
      link_url: linkUrl,
      link_text: linkText,
      page_path: location.pathname,
    });
  };

  // Track video engagement
  const trackVideoPlay = (videoTitle: string, videoProgress?: number) => {
    trackEvent('video_play', {
      event_category: 'engagement',
      video_title: videoTitle,
      video_progress: videoProgress || 0,
      page_path: location.pathname,
    });
  };

  // Track scroll depth
  const trackScrollDepth = (scrollPercentage: number) => {
    trackEvent('scroll_depth', {
      event_category: 'engagement',
      scroll_percentage: scrollPercentage,
      page_path: location.pathname,
    });
  };

  return {
    trackEvent,
    trackContactForm,
    trackInvestmentInterest,
    trackDocumentDownload,
    trackExternalLink,
    trackVideoPlay,
    trackScrollDepth,
  };
};

// Hook for scroll depth tracking
export const useScrollDepth = () => {
  const { trackScrollDepth } = useAnalytics();

  useEffect(() => {
    let maxScroll = 0;
    const milestones = [25, 50, 75, 90, 100];
    const trackedMilestones = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestone achievements
        milestones.forEach(milestone => {
          if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
            trackedMilestones.add(milestone);
            trackScrollDepth(milestone);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth]);
};

// Performance tracking hook
export const usePerformanceTracking = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Track Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            
            // Track page load time
            window.gtag('event', 'page_load_time', {
              event_category: 'performance',
              value: Math.round(navEntry.loadEventEnd - navEntry.loadEventStart),
              custom_parameter: 'load_time_ms',
            });
          }
          
          if (entry.entryType === 'largest-contentful-paint') {
            // Track LCP
            window.gtag('event', 'largest_contentful_paint', {
              event_category: 'performance',
              value: Math.round(entry.startTime),
              custom_parameter: 'lcp_ms',
            });
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint'] });
      
      return () => observer.disconnect();
    }
  }, []);
};
