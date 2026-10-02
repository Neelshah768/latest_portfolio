'use client';

import { useEffect } from 'react';
import { trackSectionView, trackEngagementMilestone } from '@/lib/analytics';

const SECTIONS_TO_TRACK: { id: string; name: string }[] = [
  { id: 'home', name: 'hero' },
  { id: 'profile', name: 'profile' },
  { id: 'experience', name: 'experience' },
  { id: 'engineering-impact', name: 'engineering_impact' },
  { id: 'case-studies', name: 'case_studies' },
  { id: 'capabilities', name: 'capabilities' },
  { id: 'playground', name: 'playground' },
  { id: 'skills', name: 'skills' },
  { id: 'contact', name: 'contact' },
];

export default function AnalyticsTracker() {
  useEffect(() => {
    // 1. SECTION VISIBILITY TRACKING via IntersectionObserver
    const seenSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const match = SECTIONS_TO_TRACK.find((s) => s.id === sectionId);
            if (match && !seenSections.has(match.name)) {
              seenSections.add(match.name);
              trackSectionView(match.name);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.35, // Trigger when ~35-50% of the section is visible
      }
    );

    SECTIONS_TO_TRACK.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    // 2. SCROLL ENGAGEMENT MILESTONES (30%, 60%, 90%)
    const milestonesReached = {
      '30_percent': false,
      '60_percent': false,
      '90_percent': false,
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const progress = (window.scrollY / scrollHeight) * 100;

      if (progress >= 30 && !milestonesReached['30_percent']) {
        milestonesReached['30_percent'] = true;
        trackEngagementMilestone('30_percent');
      }
      if (progress >= 60 && !milestonesReached['60_percent']) {
        milestonesReached['60_percent'] = true;
        trackEngagementMilestone('60_percent');
      }
      if (progress >= 90 && !milestonesReached['90_percent']) {
        milestonesReached['90_percent'] = true;
        trackEngagementMilestone('90_percent');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
