import classnames from 'classnames';
import {ComponentChildren, JSX, h} from 'preact';

export interface BulmaDropdownItemProps {
  readonly children: ComponentChildren;
  readonly href?: string;
  readonly isActive?: boolean;
  readonly onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
}

/**
 * https://bulma.io/documentation/components/dropdown/
 */
export function BulmaDropdownItem(props: BulmaDropdownItemProps): JSX.Element {
  const className = classnames({
    'dropdown-item': true,
    'is-active': props.isActive,
  });

  return (
    <a className={className} href={props.href} onClick={props.onClick}>
      {props.children}
    </a>
  );
}
