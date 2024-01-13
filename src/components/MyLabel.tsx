import { FC } from 'react';
import './MyLabel.css';

interface Props {
  /**
   * The label to display
   */
  label: string;

  /**
   * The size of the label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
    * The text is all caps
    */
  allCaps?: boolean;
  /**
  * The color of the label
  */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
  * The custom font color of the label
  */
  fontColor?: string;
}

export const MyLabel: FC<Props> = ( { label, size = 'normal', allCaps, color, fontColor } ) => {
  return (
    <span style={ { color: fontColor } } className={ `${ size } ${ color } label` }>{ allCaps ? label.toLocaleUpperCase() : label }</span>
  );
};