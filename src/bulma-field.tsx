import classnames from 'classnames';
import {ComponentChildren, JSX, h} from 'preact';

export interface BulmaFieldProps {
  readonly children: ComponentChildren;
  readonly alignment?: BulmaFieldAlignment;
  readonly hasAddons?: boolean;
  readonly isDisabled?: boolean;
  readonly isGrouped?: boolean | 'multiline';
}

export type BulmaFieldAlignment = 'centered' | 'right';

/**
 * https://bulma.io/documentation/form/general/#form-field
 */
export function BulmaField(props: BulmaFieldProps): JSX.Element {
  return (
    <fieldset
      disabled={props.isDisabled}
      className={classnames({
        'field': true,
        'has-addons': props.hasAddons,
        [`has-addons-${props.alignment ?? 'alignment'}`]:
          props.hasAddons && props.alignment,
        'is-grouped': props.isGrouped,
        [`is-grouped-${props.alignment ?? 'alignment'}`]:
          props.isGrouped && props.alignment,
        'is-grouped-multiline': props.isGrouped === 'multiline',
      })}
    >
      {props.children}
    </fieldset>
  );
}
