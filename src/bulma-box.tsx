import {ComponentChildren, JSX, h} from 'preact';

export interface BulmaBoxProps {
  readonly children: ComponentChildren;
}

/**
 * https://bulma.io/documentation/elements/box/
 */
export function BulmaBox(props: BulmaBoxProps): JSX.Element {
  return <div className="box">{props.children}</div>;
}
