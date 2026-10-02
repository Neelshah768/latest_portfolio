/**
 * Google Analytics 4 (GA4) Analytics Helper
 *
 * Implements privacy-compliant, zero-PII tracking for Neel Shah's engineering portfolio.
 * Safely no-ops when NEXT_PUBLIC_GA_MEASUREMENT_ID is not configured.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

/**
 * Checks whether Google Analytics is active in the current browser environment.
 */
export function isGAEnabled(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.gtag === 'function' &&
    Boolean(GA_MEASUREMENT_ID)
  );
}

/**
 * Low-level event dispatcher. Safely discards any PII.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean | undefined> = {}
): void {
  if (!isGAEnabled()) return;

  // Filter out any accidental undefined or null values
  const cleanParams: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      cleanParams[key] = value;
    }
  }

  try {
    window.gtag!('event', eventName, cleanParams);
  } catch (error) {
    // Fail silently in development/production
    if (process.env.NODE_ENV === 'development') {
      console.warn('[GA4] Event dispatch failed:', error);
    }
  }
}

/**
 * Track major section visibility (triggered once per section per page visit)
 */
export function trackSectionView(sectionName: string): void {
  trackEvent('section_view', {
    section_name: sectionName,
  });
}

/**
 * Track Hero CTA button clicks
 */
export function trackHeroCTA(
  ctaName: 'view_work' | 'download_cv' | 'github' | 'linkedin' | 'lets_talk'
): void {
  trackEvent('hero_cta_click', {
    cta_name: ctaName,
  });
}

/**
 * Track Navbar CTA ("Let's Talk")
 */
export function trackNavbarCTA(ctaName: 'lets_talk'): void {
  trackEvent('navbar_cta_click', {
    cta_name: ctaName,
  });
}

/**
 * Track CV / Resume download clicks
 */
export function trackCVDownload(
  source: 'navbar' | 'hero' | 'contact' | 'footer' | 'resume_section' | 'modal' | 'other',
  fileName: string = 'NeelShah_CV.pdf'
): void {
  trackEvent('cv_download', {
    source,
    file_name: fileName,
  });
}

/**
 * Track when a visitor views a flagship project case study
 */
export function trackCaseStudyView(projectName: string): void {
  trackEvent('case_study_view', {
    project_name: projectName,
  });
}

/**
 * Track interactions inside case studies (tabs, architecture inspection, live links)
 */
export function trackCaseStudyClick(projectName: string, action: string): void {
  trackEvent('case_study_click', {
    project_name: projectName,
    action,
  });
}

/**
 * Track interactions inside the Engineering Playground
 */
export function trackPlaygroundInteraction(demoName: string, action: string): void {
  trackEvent('playground_interaction', {
    demo_name: demoName,
    action,
  });
}

/**
 * Track hiring/contact intent CTA clicks
 */
export function trackContactCTAClick(
  source: 'navbar' | 'hero' | 'case_study' | 'contact' | 'footer'
): void {
  trackEvent('contact_cta_click', {
    source,
  });
}

/**
 * Track contact form submissions (strictly zero PII)
 */
export function trackContactFormSubmit(formType: string = 'contact_form'): void {
  trackEvent('contact_form_submit', {
    form_type: formType,
  });
}

/**
 * Track external outbound professional links
 */
export function trackOutboundLink(
  linkType: 'linkedin' | 'github' | 'email' | 'other'
): void {
  trackEvent('outbound_link_click', {
    link_type: linkType,
  });
}

/**
 * Track navigation clicks to section anchors
 */
export function trackNavigationClick(destination: string): void {
  trackEvent('navigation_click', {
    destination,
  });
}

/**
 * Track scroll engagement milestones (30%, 60%, 90% depth)
 */
export function trackEngagementMilestone(
  milestone: '30_percent' | '60_percent' | '90_percent'
): void {
  trackEvent('portfolio_engagement', {
    milestone,
  });
}
