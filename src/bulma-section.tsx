import classnames from 'classnames';
import {ComponentChildren, JSX, h} from 'preact';

export interface BulmaSectionProps {
  readonly children: ComponentChildren;
  readonly spacing?: BulmaSectionSpacing;
}

export type BulmaSectionSpacing = 'medium' | 'large';

/**
 * https://bulma.io/documentation/layout/section/
 */
export function BulmaSection(props: BulmaSectionProps): JSX.Element {
  return (
    <section
      className={classnames({
        section: true,
        [`is-${props.spacing ?? 'spacing'}`]: props.spacing,
      })}
    >
      {props.children}
    </section>
  );
}
