import { Svg } from '@react-pdf/renderer';

import { FC } from 'react';

type Props = {
  children?: JSX.Element,
  width?: string | number,
  height?: string | number,
  viewBox?: string,
};

const SvgCustom: FC<Props> = ({ children, width = 16, height = 16, viewBox = "0 0 16 16" }) => {
  // @ts-ignore
  return <Svg width={width} height={height} viewBox={viewBox}>{children}</Svg>
}
export default SvgCustom;
