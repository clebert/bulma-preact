import classnames from 'classnames';
import {ComponentChild, JSX, h} from 'preact';

export interface BulmaLevelProps {
  readonly items?: ComponentChild[];
  readonly rightItems?: ComponentChild[];
  readonly isMobile?: boolean;
}

/**
 * https://bulma.io/documentation/layout/level/
 */
export function BulmaLevel(props: BulmaLevelProps): JSX.Element {
  return (
    <nav className={classnames({'level': true, 'is-mobile': props.isMobile})}>
      {props.items && (
        <div className="level-left">
          {props.items.map((item, index) => (
            <div key={index} className="level-item">
              {item}
            </div>
          ))}
        </div>
      )}

      {props.rightItems && (
        <div className="level-right">
          {props.rightItems.map((item, index) => (
            <div key={index} className="level-item">
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
