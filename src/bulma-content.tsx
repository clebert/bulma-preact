import classnames from 'classnames';
import {ComponentChildren, JSX, h} from 'preact';
import {BulmaHiddenBreakpoint, isHidden} from './is-hidden';

export interface BulmaContentProps {
  readonly children: ComponentChildren;
  readonly size?: BulmaContentSize;
  readonly isHidden?: BulmaHiddenBreakpoint;
}

export type BulmaContentSize = 'small' | 'medium' | 'large';

/**
 * https://bulma.io/documentation/elements/content/
 */
export function BulmaContent(props: BulmaContentProps): JSX.Element {
  return (
    <div
      className={classnames({
        content: true,
        [`is-${props.size ?? 'size'}`]: props.size,
        ...isHidden(props.isHidden),
      })}
    >
      {props.children}
    </div>
  );
}
