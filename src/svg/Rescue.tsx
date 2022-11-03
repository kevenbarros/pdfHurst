import { FC } from 'react';
import { Path } from '@react-pdf/renderer';
type Props = {
  color: string
};
const Rescue: FC<Props> = ({ color = "#B5BFC9" }) => (
  <>
    <Path d="M7.94264 4.05733C8.46331 4.578 8.46331 5.422 7.94264 5.94267C7.42198 6.46333 6.57798 6.46333 6.05731 5.94267C5.53664 5.422 5.53664 4.578 6.05731 4.05733C6.57798 3.53667 7.42198 3.53667 7.94264 4.05733" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M3.33333 3.66667V6.33333" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M10.6666 3.66667V6.33333" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M7.00002 9.66667V13" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M7 13L8.33333 11.6667" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M5.66669 11.6667L7.00002 13" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M4.33333 9H2.33333C1.59667 9 1 8.40333 1 7.66667V2.33333C1 1.59667 1.59667 1 2.33333 1H11.6667C12.4033 1 13 1.59667 13 2.33333V7.66667C13 8.40333 12.4033 9 11.6667 9H9.66667" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
  </>
);
export default Rescue;
