/**
 * https://bulma.io/documentation/modifiers/responsive-helpers/#hide
 */
export type BulmaHiddenBreakpoint =
  | 'mobile'
  | 'tablet-only'
  | 'desktop-only'
  | 'widescreen-only'
  | 'touch'
  | 'tablet'
  | 'desktop'
  | 'widescreen'
  | 'fullHd';

export function isHidden(
  hiddenBreakpoint: BulmaHiddenBreakpoint | undefined
): object | undefined {
  return hiddenBreakpoint
    ? {[`is-hidden-${hiddenBreakpoint?.toLowerCase()}`]: hiddenBreakpoint}
    : undefined;
}
