import classnames from 'classnames';
import {JSX, h} from 'preact';
import {forwardRef} from 'preact/compat';

export interface BulmaInputProps {
  readonly type?: BulmaInputType;
  readonly color?: BulmaInputColor;
  readonly size?: BulmaInputSize;
  readonly placeholder?: string;
  readonly value?: string;
  readonly isAutoCompleted?: boolean;
  readonly isAutoCorrected?: boolean;
  readonly isAutoFocused?: boolean;
  readonly isDisabled?: boolean;
  readonly isExpanded?: boolean;
  readonly isLoading?: boolean;
  readonly isReadOnly?: boolean;
  readonly isRequired?: boolean;
  readonly isRounded?: boolean;
  readonly isSpellChecked?: boolean;
  readonly isStatic?: boolean;
  readonly onChange?: JSX.GenericEventHandler<HTMLInputElement>;
  readonly onKeyUp?: JSX.KeyboardEventHandler<HTMLInputElement>;
}

export type BulmaInputType = 'text' | 'password' | 'email' | 'tel' | 'url';

export type BulmaInputColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

export type BulmaInputSize = 'small' | 'medium' | 'large';

/**
 * https://bulma.io/documentation/form/input/
 */
export const BulmaInput = forwardRef<HTMLInputElement, BulmaInputProps>(
  (props, ref): JSX.Element => {
    return (
      <div
        className={classnames({
          'control': true,
          'is-loading': props.isLoading,
          [`is-${props.size ?? 'size'}`]: props.isLoading && props.size,
          'is-expanded': props.isExpanded,
        })}
      >
        <input
          ref={ref}
          className={classnames({
            'input': true,
            [`is-${props.color ?? 'color'}`]: props.color,
            [`is-${props.size ?? 'size'}`]: props.size,
            'is-rounded': props.isRounded,
            'is-static': props.isStatic,
          })}
          type={props.type ?? 'text'}
          placeholder={props.placeholder}
          value={props.value}
          autoComplete={props.isAutoCompleted ? 'on' : 'off'}
          autoCorrect={props.isAutoCorrected ? 'on' : 'off'}
          autoFocus={props.isAutoFocused}
          disabled={props.isDisabled}
          readOnly={props.isReadOnly}
          required={props.isRequired}
          spellcheck={props.isSpellChecked}
          onChange={props.onChange}
          onKeyUp={props.onKeyUp}
        />
      </div>
    );
  }
);
