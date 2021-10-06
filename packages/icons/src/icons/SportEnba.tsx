import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.422 15.204a.5.5 0 10-1 0h1zm-10.44-8.782v-.5h-.02l.02.5zM5.62 15.783l-.5-.02v.02h.5zm8.916-8.805a.5.5 0 00-.846-.533l.846.533zm-1.002 3.69l.447-.223a.593.593 0 00-.01-.02l-.437.243zm.579.58l.305-.397a.5.5 0 00-.082-.051l-.223.447zm1.895 14.92a.5.5 0 10.456-.89l-.456.89zm-3.729-6.718h-.5a.43.43 0 000 .023l.5-.023zm-1.351-4.15l.353-.353-.353.354zm-.869-.675l.278-.416a.6.6 0 00-.026-.016l-.252.432zm-4.672-.056a.5.5 0 10.466.884l-.466-.884zm16.672 8.42a.5.5 0 10.707-.707l-.707.707zM9.159 8.674a.5.5 0 10-.708.707l.707-.707zm5.82 1.944l.22.45.011-.006-.231-.444zM6.595 21.356a.5.5 0 00.99.147l-.99-.147zm9.964-14.35a.5.5 0 00.132-.991l-.132.991zm.238 3.355a.5.5 0 00-.343-.939l.343.94zm-.024 2.214a.5.5 0 10.023-1l-.023 1zm9.607-4.64v.5a.5.5 0 00.5-.5h-.5zm.249 2.215a.5.5 0 10-.78-.625l.78.625zM15.27 5.922h-.002-.001-.001-.004-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.003-.001-.002-.001-.001-.004-.004-.001-.002-.001-.001-.004-.004-.001-.002-.001-.001-.004-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.003-.001-.002-.001-.001-.004-.004-.001-.002-.001-.001-.004-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.002-.001-.001-.002-.001-.001-.004-.001-.003-.001-.002-.001-.001-.004-.001-.003-.001-.002-.001-.001-.004H15h-.001-.002-.001-.001-.004-.004-.001-.002-.001-.001v1H15.27v-1zm-.309 0c-2.627.101-5.065 1.113-6.897 2.945l.707.707c1.643-1.643 3.837-2.56 6.229-2.653l-.039-.999zM8.065 8.867c-1.832 1.832-2.844 4.27-2.945 6.897l1 .038c.092-2.391 1.01-4.585 2.652-6.228l-.707-.707zM5.12 15.783V16.073h1v-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.002-.001-.001-.001-.001-.001V16 16v-.002-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.001-.002-.001-.001-.002-.001-.001-.001-.001-.001-.001-.001-.001h-1zm0 .29c0 2.733 1.014 5.274 2.945 7.205l.707-.707c-1.736-1.736-2.652-4.02-2.652-6.498h-1zm2.945 7.205c1.931 1.931 4.472 2.946 7.206 2.946v-1c-2.478 0-4.762-.916-6.499-2.653l-.707.707zm7.206 2.946c2.733 0 5.275-1.015 7.206-2.946l-.708-.707c-1.736 1.737-4.02 2.652-6.498 2.652v1zm7.206-2.946c1.93-1.93 2.945-4.472 2.945-7.205h-1c0 2.478-.916 4.762-2.653 6.498l.708.707zm2.945-7.205v-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002V16v-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.001-.002-.002-.002-.001-.002-.002-.001-.002h-1V16.073h1zM13.69 6.445c-.557.885-.909 1.649-1.015 2.377-.11.752.05 1.42.422 2.09l.874-.487c-.284-.51-.379-.959-.306-1.459.076-.523.342-1.147.871-1.988l-.846-.533zm-.156 4.223l-.447.224v.002l.002.003a.206.206 0 00.004.008l.012.022c.01.017.022.04.039.066.033.054.08.125.144.205.124.154.322.357.601.496l.447-.894a.837.837 0 01-.267-.227 1.027 1.027 0 01-.088-.13v.001l-.447.224zm2.93 14.61c-1.81-.928-2.682-1.895-3.13-2.834-.457-.957-.507-1.942-.556-3.016l-.998.045c.047 1.05.094 2.235.651 3.402.565 1.184 1.624 2.292 3.577 3.293l.456-.89zM12.78 19.45c0-1.462-.09-3.096-1.498-4.503l-.707.707c1.102 1.102 1.205 2.364 1.205 3.796h1zm-1.851-4.15l.353-.353v-.001l-.004-.003-.012-.013-.044-.043-.133-.133-.707.707.133.133.044.043.012.013.003.003h.001v.001l.354-.354zm.16-.546a1.944 1.944 0 00-.204-.166 10.967 10.967 0 00-.453-.315l-.068-.047-.02-.012-.004-.004h-.002v-.001l-.278.416-.277.416h.001l.005.004.018.012a12.801 12.801 0 01.27.184c.077.053.154.108.217.154.075.055.096.074.088.066l.707-.707zm-.777-.561c-1.369-.798-3.014-.63-4.924.376l.466.884c1.757-.925 3.007-.949 3.954-.396l.504-.864zm12.455 8.089L9.158 8.674l-.707.707L22.06 22.989l.707-.707zM14.76 10.169c-4.536 2.218-7.459 6.453-8.164 11.187l.99.147c.658-4.421 3.384-8.368 7.613-10.435l-.439-.899zm1.932-4.154a10.76 10.76 0 00-1.42-.093v1c.436 0 .866.028 1.288.084l.132-.991zm-.237 3.407c-.578.211-1.148.462-1.707.753l.463.887c.52-.271 1.05-.504 1.587-.7l-.343-.94zm-2.646 2.221c.934.719 1.954.91 2.965.932l.023-1c-.898-.02-1.678-.185-2.378-.724l-.61.792zm9.57-.996c-.79 0-1.39-.28-1.797-.731-.413-.457-.665-1.132-.665-1.981h-1c0 1.044.312 1.975.922 2.651.616.682 1.497 1.061 2.54 1.061v-1zm-2.462-2.712c0-.849.252-1.518.663-1.969.406-.446 1.007-.722 1.8-.722v-1c-1.042 0-1.922.372-2.539 1.048-.612.672-.924 1.598-.924 2.643h1zm2.463-2.691c.793 0 1.405.277 1.822.726.42.452.68 1.12.68 1.965h1c0-1.049-.325-1.976-.947-2.646-.626-.674-1.514-1.045-2.555-1.045v1zm2.47 4.281c-.4.498-.8.77-1.192.922-.4.156-.82.2-1.278.2v1c.518 0 1.078-.049 1.64-.268.57-.221 1.11-.605 1.61-1.23l-.78-.624zm.531-2.09h-5.964v1h5.964v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportEnba =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default SportEnba;
