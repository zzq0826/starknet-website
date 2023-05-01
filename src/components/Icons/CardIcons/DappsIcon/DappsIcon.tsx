import React, { useId } from 'react';
import { CardIconProps } from "../IconInterface";

const DappsIcon: React.FC<CardIconProps> = ({ gradientColor1, gradientColor2, filter, borderRadius }) => {
  const id = useId();
  const gradientIdPrefix = `gradient-${id}`;
  return (
    <svg filter={filter} border-radius={borderRadius} width="86" height="97" viewBox="0 0 86 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M43 20.5586C45.7614 20.5586 48 18.32 48 15.5586C48 12.7972 45.7614 10.5586 43 10.5586C40.2386 10.5586 38 12.7972 38 15.5586C38 18.32 40.2386 20.5586 43 20.5586Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M43 53.5586C45.7614 53.5586 48 51.32 48 48.5586C48 45.7972 45.7614 43.5586 43 43.5586C40.2386 43.5586 38 45.7972 38 48.5586C38 51.32 40.2386 53.5586 43 53.5586Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M48 81.5586C48 84.32 45.7614 86.5586 43 86.5586C40.2386 86.5586 38 84.32 38 81.5586C38 78.7972 40.2386 76.5586 43 76.5586C45.7614 76.5586 48 78.7972 48 81.5586Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M72 69.5586C74.7614 69.5586 77 67.32 77 64.5586C77 61.7972 74.7614 59.5586 72 59.5586C69.2386 59.5586 67 61.7972 67 64.5586C67 67.32 69.2386 69.5586 72 69.5586Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M77 31.5586C77 34.32 74.7614 36.5586 72 36.5586C69.2386 36.5586 67 34.32 67 31.5586C67 28.7972 69.2386 26.5586 72 26.5586C74.7614 26.5586 77 28.7972 77 31.5586Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M14 69.5586C16.7614 69.5586 19 67.32 19 64.5586C19 61.7972 16.7614 59.5586 14 59.5586C11.2386 59.5586 9 61.7972 9 64.5586C9 67.32 11.2386 69.5586 14 69.5586Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path d="M19 31.5586C19 34.32 16.7614 36.5586 14 36.5586C11.2386 36.5586 9 34.32 9 31.5586C9 28.7972 11.2386 26.5586 14 26.5586C16.7614 26.5586 19 28.7972 19 31.5586Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M53.9329 4.78908L45.5263 0.585759C43.9248 -0.214961 42.0354 -0.193667 40.4524 0.642945L31.9559 5.1334C30.1376 6.09436 29 7.98225 29 10.0388V20.5206C29 22.494 30.0482 24.3188 31.7527 25.3132L40.2043 30.2433C40.7688 30.5725 41.3768 30.7942 42 30.9083V33.0992C41.4664 33.2015 40.9446 33.3828 40.4524 33.6429L31.9559 38.1334C31.2366 38.5135 30.6239 39.0387 30.146 39.6619L27.72 38.2613C27.903 37.7076 28 37.121 28 36.5206V25.7517C28 23.6501 26.8126 21.7289 24.9329 20.7891L16.5263 16.5858C14.9248 15.785 13.0354 15.8063 11.4524 16.6429L2.95585 21.1334C1.13758 22.0944 0 23.9822 0 26.0388V36.5206C0 38.494 1.04815 40.3189 2.75271 41.3132L11.2043 46.2433C12.9319 47.251 15.0681 47.251 16.7957 46.2433L25.2473 41.3132C25.835 40.9704 26.3446 40.5288 26.7602 40.0165L29.2338 41.4447C29.0808 41.9545 29 42.4907 29 43.0388V53.5206C29 54.0974 29.0895 54.6614 29.2588 55.1958L27.4105 56.2629C26.8829 55.2119 26.0247 54.335 24.9329 53.7891L16.5263 49.5858C14.9248 48.785 13.0354 48.8063 11.4524 49.6429L2.95585 54.1334C1.13758 55.0944 0 56.9822 0 59.0388V69.5206C0 71.494 1.04815 73.3188 2.75271 74.3132L11.2043 79.2433C12.9319 80.251 15.0681 80.251 16.7957 79.2433L25.2473 74.3132C26.9518 73.3188 28 71.494 28 69.5206V58.7517C28 58.5816 27.9922 58.4127 27.9769 58.2453L30.1973 56.9634C30.6204 57.4983 31.1448 57.9586 31.7527 58.3132L40.2043 63.2433C40.7688 63.5725 41.3768 63.7942 42 63.9083V66.0992C41.4664 66.2015 40.9446 66.3828 40.4524 66.6429L31.9559 71.1334C30.1376 72.0944 29 73.9822 29 76.0388V86.5206C29 88.494 30.0482 90.3188 31.7527 91.3132L40.2043 96.2433C41.9319 97.251 44.0681 97.251 45.7957 96.2433L54.2473 91.3132C55.9518 90.3188 57 88.494 57 86.5206V75.7517C57 73.6501 55.8126 71.7289 53.9329 70.7891L45.5263 66.5858C45.0386 66.3419 44.5243 66.1743 44 66.0828V63.9083C44.6232 63.7942 45.2312 63.5725 45.7957 63.2433L54.2473 58.3132C54.8552 57.9586 55.3796 57.4983 55.8027 56.9634L58.0543 58.2634C58.0184 58.5181 58 58.7771 58 59.0388V69.5206C58 71.494 59.0481 73.3188 60.7527 74.3132L69.2043 79.2433C70.9319 80.251 73.0681 80.251 74.7957 79.2433L83.2473 74.3132C84.9518 73.3188 86 71.494 86 69.5206V58.7517C86 56.6501 84.8126 54.7289 82.9329 53.7891L74.5263 49.5858C72.9248 48.785 71.0354 48.8063 69.4524 49.6429L60.9559 54.1334C59.9919 54.6428 59.2193 55.4128 58.7061 56.3302L56.7412 55.1958C56.9105 54.6614 57 54.0974 57 53.5206V42.7517C57 42.3555 56.9578 41.9658 56.8767 41.5878L59.3567 40.1559C59.7497 40.6091 60.219 41.0019 60.7527 41.3132L69.2043 46.2433C70.9319 47.251 73.0681 47.251 74.7957 46.2433L83.2473 41.3132C84.9518 40.3189 86 38.494 86 36.5206V25.7517C86 23.6501 84.8126 21.7289 82.9329 20.7891L74.5263 16.5858C72.9248 15.785 71.0354 15.8063 69.4524 16.6429L60.9559 21.1334C59.1376 22.0944 58 23.9822 58 26.0388V36.5206C58 37.1836 58.1183 37.8299 58.3401 38.4335L56.1021 39.7256C55.5739 38.9138 54.8327 38.239 53.9329 37.7891L45.5263 33.5858C45.0386 33.3419 44.5243 33.1743 44 33.0828V30.9083C44.6232 30.7942 45.2312 30.5725 45.7957 30.2433L54.2473 25.3132C55.9518 24.3188 57 22.494 57 20.5206V9.75171C57 7.65014 55.8126 5.72894 53.9329 4.78908ZM41.387 2.41119C42.3993 1.87614 43.6077 1.86252 44.6319 2.37461L53.0385 6.57794C54.2406 7.17901 55 8.40768 55 9.75171V20.5206C55 21.7826 54.3297 22.9497 53.2395 23.5856L44.7879 28.5157C43.6831 29.1602 42.3169 29.1602 41.2121 28.5157L32.7605 23.5856C31.6703 22.9497 31 21.7826 31 20.5206V10.0388C31 8.72358 31.7275 7.51621 32.8904 6.90164L41.387 2.41119ZM41.387 35.4112C42.3993 34.8761 43.6077 34.8625 44.6319 35.3746L53.0385 39.5779C54.2406 40.179 55 41.4077 55 42.7517V53.5206C55 54.7826 54.3297 55.9497 53.2395 56.5856L44.7879 61.5157C43.6831 62.1602 42.3169 62.1602 41.2121 61.5157L32.7605 56.5856C31.6703 55.9497 31 54.7826 31 53.5206V43.0388C31 41.7236 31.7275 40.5162 32.8904 39.9016L41.387 35.4112ZM44.6319 68.3746C43.6077 67.8625 42.3993 67.8761 41.387 68.4112L32.8904 72.9016C31.7275 73.5162 31 74.7236 31 76.0388V86.5206C31 87.7826 31.6703 88.9497 32.7605 89.5856L41.2121 94.5157C42.3169 95.1602 43.6831 95.1602 44.7879 94.5157L53.2395 89.5856C54.3297 88.9497 55 87.7826 55 86.5206V75.7517C55 74.4077 54.2406 73.179 53.0385 72.5779L44.6319 68.3746ZM70.3869 51.4112C71.3993 50.8761 72.6077 50.8625 73.6319 51.3746L82.0385 55.5779C83.2406 56.179 84 57.4077 84 58.7517V69.5206C84 70.7826 83.3297 71.9497 82.2395 72.5856L73.7879 77.5157C72.6831 78.1602 71.3169 78.1602 70.2121 77.5157L61.7605 72.5856C60.6703 71.9497 60 70.7826 60 69.5206V59.0388C60 57.7236 60.7275 56.5162 61.8904 55.9016L70.3869 51.4112ZM73.6319 18.3746C72.6077 17.8625 71.3993 17.8761 70.3869 18.4112L61.8904 22.9016C60.7275 23.5162 60 24.7236 60 26.0388V36.5206C60 37.7826 60.6703 38.9497 61.7605 39.5856L70.2121 44.5157C71.3169 45.1602 72.6831 45.1602 73.7879 44.5157L82.2395 39.5856C83.3297 38.9497 84 37.7826 84 36.5206V25.7517C84 24.4077 83.2406 23.179 82.0385 22.5779L73.6319 18.3746ZM12.387 51.4112C13.3993 50.8761 14.6077 50.8625 15.6319 51.3746L24.0385 55.5779C25.2406 56.179 26 57.4077 26 58.7517V69.5206C26 70.7826 25.3297 71.9497 24.2395 72.5856L15.7879 77.5157C14.6831 78.1602 13.3169 78.1602 12.2121 77.5157L3.76046 72.5856C2.67033 71.9497 2 70.7826 2 69.5206V59.0388C2 57.7236 2.72752 56.5162 3.89037 55.9016L12.387 51.4112ZM15.6319 18.3746C14.6077 17.8625 13.3993 17.8761 12.387 18.4112L3.89037 22.9016C2.72752 23.5162 2 24.7236 2 26.0388V36.5206C2 37.7826 2.67033 38.9497 3.76046 39.5856L12.2121 44.5157C13.3169 45.1602 14.6831 45.1602 15.7879 44.5157L24.2395 39.5856C25.3297 38.9497 26 37.7826 26 36.5206V25.7517C26 24.4077 25.2406 23.179 24.0385 22.5779L15.6319 18.3746Z" fill={`url(#${`${gradientIdPrefix}-paint0_linear`})`}/>
      <defs>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86" y1="-31.1129" x2="-41.741" y2="-3.46853" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86" y1="-31.1129" x2="-41.741" y2="-3.46853" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86" y1="-31.1129" x2="-41.741" y2="-3.46853" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86" y1="-31.1129" x2="-41.741" y2="-3.46853" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86" y1="-31.1129" x2="-41.741" y2="-3.46853" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86" y1="-31.1129" x2="-41.741" y2="-3.46853" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86" y1="-31.1129" x2="-41.741" y2="-3.46853" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      <linearGradient id={`${gradientIdPrefix}-paint0_linear`} x1="86" y1="-31.1129" x2="-41.741" y2="-3.46853" gradientUnits="userSpaceOnUse">
        <stop stop-color={gradientColor1}/>
        <stop offset="0.963542" stop-color={gradientColor2}/>
      </linearGradient>
      </defs>
    </svg>
  )
};

export default DappsIcon;