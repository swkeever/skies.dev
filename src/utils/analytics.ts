import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

export enum AnalyticsCategory {
  Themes = 'Themes',
  Newsletter = 'Newsletter',
  Blogs = 'Blogs',
  Feedback = 'Feedback',
  Contact = 'Contact',
}

export enum AnalyticsAction {
  Click = 'Click',
  Subscribe = 'Subscribe',
  Switch = 'Switch',
  SendEmail = 'Send Email',
  Like = 'Liked',
  Dislike = 'Dislike',
  Dismiss = 'Dismiss',
}

export enum AnalyticsLabel {
  Light = 'Light',
  Dark = 'Dark',
}

export interface AnalyticsEvent {
  /**
   * The object that was interacted with (e.g.video)
   */
  category: AnalyticsCategory;

  /**
   * Type of interaction (e.g. 'play')
   */
  action: AnalyticsAction;

  /**
   * Useful for categorizing events (e.g. 'Spring Campaign')
   */
  label?: AnalyticsLabel | string;
}

// Thin wrapper to get TypeScript support
export function track(event: AnalyticsEvent) {
  trackCustomEvent(event);
}
