import {ComponentChild, ComponentChildren, JSX, h} from 'preact';

export interface BulmaModalCardProps {
  readonly children: ComponentChildren;
  readonly title: ComponentChild;
  readonly header?: ComponentChild;
  readonly footer?: ComponentChild;
  readonly onBackgroundClick?: JSX.MouseEventHandler<HTMLDivElement>;
}

/**
 * https://bulma.io/documentation/components/modal/
 */
export function BulmaModalCard(props: BulmaModalCardProps): JSX.Element {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={props.onBackgroundClick} />

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.title}</p>
          {props.header}
        </header>

        <section className="modal-card-body">{props.children}</section>
        <footer className="modal-card-foot">{props.footer}</footer>
      </div>
    </div>
  );
}
