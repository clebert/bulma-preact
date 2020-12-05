import classnames from 'classnames';
import {JSX, h} from 'preact';

export interface BulmaDeleteProps {
  readonly size?: BulmaDeleteSize;
  readonly onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
}

export type BulmaDeleteSize = 'small' | 'medium' | 'large';

/**
 * https://bulma.io/documentation/elements/delete/
 */
export function BulmaDelete(props: BulmaDeleteProps): JSX.Element {
  return (
    <a
      className={classnames({
        delete: true,
        [`is-${props.size ?? 'size'}`]: props.size,
      })}
      onClick={props.onClick}
    />
  );
}
