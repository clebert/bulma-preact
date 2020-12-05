import {IconDefinition, icon} from '@fortawesome/fontawesome-svg-core';
import classnames from 'classnames';
import {ComponentChildren, Fragment, JSX, h} from 'preact';
import {useMemo} from 'preact/hooks';

export interface BulmaIconProps {
  readonly children?: ComponentChildren;
  readonly definition: IconDefinition;
  readonly size?: BulmaIconSize;
  readonly isRightAligned?: boolean;
}

export type BulmaIconSize = 'small' | 'medium' | 'large';

/**
 * https://bulma.io/documentation/elements/icon/
 */
export function BulmaIcon(props: BulmaIconProps): JSX.Element {
  const svgElement = useMemo(() => icon(props.definition).abstract[0], [
    props.definition,
  ]);

  return (
    <>
      {props.isRightAligned && props.children && <span>{props.children}</span>}

      <span
        className={classnames({
          icon: true,
          [`is-${props.size ?? 'size'}`]: props.size,
        })}
      >
        <svg {...svgElement?.attributes}>
          {svgElement?.children?.map((pathElement) => (
            <path {...pathElement.attributes} />
          ))}
        </svg>
      </span>

      {!props.isRightAligned && props.children && <span>{props.children}</span>}
    </>
  );
}
