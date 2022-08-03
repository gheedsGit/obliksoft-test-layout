import React from "react";

const SVGPicker = ({ id }) => {
  switch (id) {
    case "home":
      return (
        <svg
          width="26"
          height="22"
          viewBox="0 0 26 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.25 11.625H0.5L13 0.375L25.5 11.625H21.75V21.625H14.25V14.125H11.75V21.625H4.25V11.625ZM19.25 9.3625L13 3.7375L6.75 9.3625V19.125H9.25V11.625H16.75V19.125H19.25V9.3625Z"
            fill="#9EC5FE"
          />
        </svg>
      );

    case "robot":
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.7493 15.5887C29.2819 15.06 28.648 14.7112 27.9553 14.6018C27.2626 14.4923 26.5538 14.6289 25.9494 14.9882C25.6527 14.4802 25.356 13.9952 25.0479 13.5102C24.7398 13.0252 24.4773 12.263 23.9067 11.8935C23.6265 11.6866 23.324 11.5123 23.0052 11.3739C22.9702 11.1021 22.8407 10.8518 22.64 10.6678C22.4393 10.4837 22.1805 10.3779 21.9097 10.3692H8.2161C7.94258 10.3657 7.67689 10.4617 7.46744 10.6397C7.25799 10.8177 7.1187 11.066 7.07496 11.3392C6.75614 11.4777 6.45373 11.652 6.17346 11.8589C5.6143 12.2284 5.4089 12.9212 5.03232 13.4755C4.65575 14.0298 4.42752 14.4455 4.13083 14.9536C3.5251 14.5956 2.81553 14.4609 2.12276 14.5725C1.42999 14.6841 0.796797 15.035 0.33084 15.5656C0.221774 15.6769 0.136243 15.8095 0.0794556 15.9554C0.0226682 16.1012 -0.00418616 16.2572 0.000528834 16.4139C0.00524383 16.5705 0.0414294 16.7246 0.106881 16.8667C0.172332 17.0087 0.26568 17.1358 0.381236 17.2402C0.496792 17.3446 0.632137 17.424 0.779027 17.4738C0.925917 17.5235 1.08128 17.5425 1.23564 17.5295C1.39 17.5165 1.54014 17.4719 1.6769 17.3983C1.81366 17.3247 1.93419 17.2237 2.03113 17.1014C2.15597 16.9619 2.32683 16.8731 2.51169 16.8519C2.69655 16.8306 2.88273 16.8783 3.03533 16.986C3.03533 16.986 3.03533 17.0553 3.03533 17.0784C3.05571 17.0918 3.07949 17.0989 3.1038 17.0989C3.12811 17.0989 3.1519 17.0918 3.17227 17.0784C3.28658 17.2012 3.35516 17.3604 3.36626 17.5287C3.37678 17.7357 3.30719 17.9386 3.17227 18.0945C3.02753 18.2613 2.93333 18.4666 2.90094 18.6861C2.86856 18.9056 2.89935 19.1299 2.98964 19.3321C3.07994 19.5344 3.2259 19.706 3.41008 19.8265C3.59425 19.9469 3.80882 20.0111 4.02812 20.0114C4.18736 20.011 4.34476 19.9769 4.49019 19.9113C4.63562 19.8457 4.76587 19.75 4.87256 19.6304C5.34099 19.1021 5.61495 18.4264 5.64821 17.7175C5.68148 17.0085 5.472 16.3096 5.05515 15.7388C5.5116 15.3924 5.95664 15.0344 6.39028 14.6649C6.59568 14.5033 6.8125 14.3531 7.02931 14.203V23.0715C7.02931 23.3778 7.14954 23.6715 7.36354 23.8881C7.57755 24.1046 7.8678 24.2263 8.17045 24.2263H9.43711V27.6905H8.47856C8.17591 27.6905 7.88566 27.8122 7.67165 28.0288C7.45765 28.2453 7.33742 28.539 7.33742 28.8453C7.33742 29.1515 7.45765 29.4453 7.67165 29.6618C7.88566 29.8784 8.17591 30 8.47856 30H12.7806C13.0833 30 13.3735 29.8784 13.5875 29.6618C13.8016 29.4453 13.9218 29.1515 13.9218 28.8453C13.9218 28.539 13.8016 28.2453 13.5875 28.0288C13.3735 27.8122 13.0833 27.6905 12.7806 27.6905H11.8107V24.2263H18.4064V27.6905H17.3452C17.0425 27.6905 16.7523 27.8122 16.5383 28.0288C16.3243 28.2453 16.2041 28.539 16.2041 28.8453C16.2041 29.1515 16.3243 29.4453 16.5383 29.6618C16.7523 29.8784 17.0425 30 17.3452 30H21.556C21.8586 30 22.1489 29.8784 22.3629 29.6618C22.5769 29.4453 22.6971 29.1515 22.6971 28.8453C22.6971 28.539 22.5769 28.2453 22.3629 28.0288C22.1489 27.8122 21.8586 27.6905 21.556 27.6905H20.5974V24.2263H21.9097C22.2124 24.2263 22.5026 24.1046 22.7166 23.8881C22.9306 23.6715 23.0509 23.3778 23.0509 23.0715V14.2723C23.2677 14.4224 23.4845 14.5725 23.6899 14.7342C24.1235 15.1037 24.5686 15.4617 25.025 15.8081C24.6082 16.3789 24.3987 17.0778 24.432 17.7868C24.4652 18.4957 24.7392 19.1714 25.2076 19.6996C25.3143 19.8193 25.4446 19.915 25.59 19.9806C25.7354 20.0462 25.8928 20.0803 26.0521 20.0807C26.2714 20.0804 26.4859 20.0162 26.6701 19.8957C26.8543 19.7753 27.0002 19.6036 27.0905 19.4014C27.1808 19.1992 27.2116 18.9749 27.1792 18.7554C27.1469 18.5359 27.0527 18.3305 26.9079 18.1638C26.7812 18.0234 26.711 17.8401 26.711 17.65C26.711 17.4598 26.7812 17.2765 26.9079 17.1361C26.9373 17.1477 26.9699 17.1477 26.9992 17.1361C27.022 17.1221 27.0399 17.1012 27.0501 17.0762C27.0604 17.0513 27.0625 17.0238 27.0563 16.9975C27.2079 16.893 27.3916 16.8472 27.5739 16.8684C27.7561 16.8896 27.9248 16.9764 28.0491 17.113C28.2549 17.323 28.5325 17.4451 28.8246 17.4541C29.1168 17.4631 29.4012 17.3583 29.6193 17.1614C29.8373 16.9644 29.9724 16.6903 29.9966 16.3955C30.0208 16.1008 29.9323 15.8079 29.7493 15.5772V15.5887ZM20.7686 21.9168H9.35723V12.6787H20.7686V21.9168Z"
            fill="#9EC5FE"
          />
          <path
            d="M8.14736 9.30731H21.9779C22.2806 9.30731 22.5708 9.18565 22.7848 8.96909C22.9989 8.75253 23.1191 8.45882 23.1191 8.15256C23.1191 5.99037 22.2703 3.91673 20.7594 2.38783C19.2485 0.858928 17.1993 0 15.0627 0C12.926 0 10.8768 0.858928 9.3659 2.38783C7.85503 3.91673 7.00623 5.99037 7.00623 8.15256C7.00623 8.45882 7.12645 8.75253 7.34046 8.96909C7.55446 9.18565 7.84471 9.30731 8.14736 9.30731ZM15.0627 2.28641C16.4037 2.27575 17.7067 2.73781 18.7478 3.5933C19.7889 4.44878 20.5033 5.64433 20.7683 6.97471H9.35697C9.62197 5.64433 10.3364 4.44878 11.3775 3.5933C12.4186 2.73781 13.7216 2.27575 15.0627 2.28641Z"
            fill="#9EC5FE"
          />
        </svg>
      );

    case "contacts":
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.5 3.75H27.5C28.875 3.75 30 4.875 30 6.25L29.9875 23.75C29.9875 25.125 28.875 26.25 27.5 26.25H2.5C1.125 26.25 0 25.125 0 23.75V6.25C0 4.875 1.125 3.75 2.5 3.75ZM2.5 23.75H27.5V6.25H2.5V23.75ZM26.25 7.5H17.5V13.75H26.25V7.5ZM21.875 12.1875L25 10V8.75L21.875 10.9375L18.75 8.75V10L21.875 12.1875ZM11.25 15C13.3125 15 15 13.3125 15 11.25C15 9.1875 13.3125 7.5 11.25 7.5C9.1875 7.5 7.5 9.1875 7.5 11.25C7.5 13.3125 9.1875 15 11.25 15ZM12.5 11.25C12.5 10.5625 11.9375 10 11.25 10C10.5625 10 10 10.5625 10 11.25C10 11.9375 10.5625 12.5 11.25 12.5C11.9375 12.5 12.5 11.9375 12.5 11.25ZM18.75 20.7375C18.75 17.6125 13.7875 16.2625 11.25 16.2625C8.7125 16.2625 3.75 17.6125 3.75 20.7375V22.5H18.75V20.7375ZM11.25 18.75C9.625 18.75 7.775 19.375 6.85 20H15.65C14.7125 19.3625 12.875 18.75 11.25 18.75Z"
            fill="#9EC5FE"
          />
        </svg>
      );

    case "people":
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.25 15C13.6625 15 15.625 13.0375 15.625 10.625C15.625 8.2125 13.6625 6.25 11.25 6.25C8.8375 6.25 6.875 8.2125 6.875 10.625C6.875 13.0375 8.8375 15 11.25 15ZM2.5 21.5625C2.5 18.65 8.325 17.1875 11.25 17.1875C14.175 17.1875 20 18.65 20 21.5625V23.75H2.5V21.5625ZM11.25 19.6875C9.0125 19.6875 6.475 20.525 5.425 21.25H17.075C16.025 20.525 13.4875 19.6875 11.25 19.6875ZM13.125 10.625C13.125 9.5875 12.2875 8.75 11.25 8.75C10.2125 8.75 9.375 9.5875 9.375 10.625C9.375 11.6625 10.2125 12.5 11.25 12.5C12.2875 12.5 13.125 11.6625 13.125 10.625ZM20.05 17.2625C21.5 18.3125 22.5 19.7125 22.5 21.5625V23.75H27.5V21.5625C27.5 19.0375 23.125 17.6 20.05 17.2625ZM23.125 10.625C23.125 13.0375 21.1625 15 18.75 15C18.075 15 17.45 14.8375 16.875 14.5625C17.6625 13.45 18.125 12.0875 18.125 10.625C18.125 9.1625 17.6625 7.8 16.875 6.6875C17.45 6.4125 18.075 6.25 18.75 6.25C21.1625 6.25 23.125 8.2125 23.125 10.625Z"
            fill="#9EC5FE"
          />
        </svg>
      );

    case "place":
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 2.5C10.1625 2.5 6.25 6.4125 6.25 11.25C6.25 17.8125 15 27.5 15 27.5C15 27.5 23.75 17.8125 23.75 11.25C23.75 6.4125 19.8375 2.5 15 2.5ZM8.75 11.25C8.75 7.8 11.55 5 15 5C18.45 5 21.25 7.8 21.25 11.25C21.25 14.85 17.65 20.2375 15 23.6C12.4 20.2625 8.75 14.8125 8.75 11.25ZM11.875 11.25C11.875 9.52411 13.2741 8.125 15 8.125C16.1165 8.125 17.1481 8.72062 17.7063 9.6875C18.2646 10.6544 18.2646 11.8456 17.7063 12.8125C17.1481 13.7794 16.1165 14.375 15 14.375C13.2741 14.375 11.875 12.9759 11.875 11.25Z"
            fill="#9EC5FE"
          />
        </svg>
      );

    case "settings":
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.3777 15C24.3777 15.425 24.3402 15.825 24.2902 16.225L26.9277 18.2875C27.1652 18.475 27.2277 18.8125 27.0777 19.0875L24.5777 23.4125C24.4652 23.6125 24.2527 23.725 24.0402 23.725C23.9652 23.725 23.8902 23.7125 23.8152 23.6875L20.7027 22.4375C20.0527 22.925 19.3527 23.35 18.5902 23.6625L18.1152 26.975C18.0777 27.275 17.8152 27.5 17.5027 27.5H12.5027C12.1902 27.5 11.9277 27.275 11.8902 26.975L11.4152 23.6625C10.6527 23.35 9.95273 22.9375 9.30273 22.4375L6.19023 23.6875C6.12773 23.7125 6.05273 23.725 5.97773 23.725C5.75273 23.725 5.54023 23.6125 5.42773 23.4125L2.92773 19.0875C2.77773 18.8125 2.84023 18.475 3.07773 18.2875L5.71523 16.225C5.66523 15.825 5.62773 15.4125 5.62773 15C5.62773 14.5875 5.66523 14.175 5.71523 13.775L3.07773 11.7125C2.84023 11.525 2.76523 11.1875 2.92773 10.9125L5.42773 6.5875C5.54023 6.3875 5.75273 6.275 5.96523 6.275C6.04023 6.275 6.11523 6.2875 6.19023 6.3125L9.30273 7.5625C9.95273 7.075 10.6527 6.65 11.4152 6.3375L11.8902 3.025C11.9277 2.725 12.1902 2.5 12.5027 2.5H17.5027C17.8152 2.5 18.0777 2.725 18.1152 3.025L18.5902 6.3375C19.3527 6.65 20.0527 7.0625 20.7027 7.5625L23.8152 6.3125C23.8777 6.2875 23.9527 6.275 24.0277 6.275C24.2527 6.275 24.4652 6.3875 24.5777 6.5875L27.0777 10.9125C27.2277 11.1875 27.1652 11.525 26.9277 11.7125L24.2902 13.775C24.3402 14.175 24.3777 14.575 24.3777 15ZM21.8777 15C21.8777 14.7375 21.8652 14.475 21.8152 14.0875L21.6402 12.675L22.7527 11.8L24.0902 10.7375L23.2152 9.225L21.6277 9.8625L20.3027 10.4L19.1652 9.525C18.6652 9.15 18.1652 8.8625 17.6277 8.6375L16.3027 8.1L16.1027 6.6875L15.8652 5H14.1277L13.8777 6.6875L13.6777 8.1L12.3527 8.6375C11.8402 8.85 11.3277 9.15 10.7902 9.55L9.66523 10.4L8.36523 9.875L6.77773 9.2375L5.90273 10.75L7.25273 11.8L8.36523 12.675L8.19023 14.0875C8.15273 14.4625 8.12773 14.75 8.12773 15C8.12773 15.25 8.15273 15.5375 8.19023 15.925L8.36523 17.3375L7.25273 18.2125L5.90273 19.2625L6.77773 20.775L8.36523 20.1375L9.69023 19.6L10.8277 20.475C11.3277 20.85 11.8277 21.1375 12.3652 21.3625L13.6902 21.9L13.8902 23.3125L14.1277 25H15.8777L16.1277 23.3125L16.3277 21.9L17.6527 21.3625C18.1652 21.15 18.6777 20.85 19.2152 20.45L20.3402 19.6L21.6402 20.125L23.2277 20.7625L24.1027 19.25L22.7527 18.2L21.6402 17.325L21.8152 15.9125C21.8527 15.5375 21.8777 15.2625 21.8777 15ZM15.0027 10C12.2402 10 10.0027 12.2375 10.0027 15C10.0027 17.7625 12.2402 20 15.0027 20C17.7652 20 20.0027 17.7625 20.0027 15C20.0027 12.2375 17.7652 10 15.0027 10ZM12.5027 15C12.5027 16.375 13.6277 17.5 15.0027 17.5C16.3777 17.5 17.5027 16.375 17.5027 15C17.5027 13.625 16.3777 12.5 15.0027 12.5C13.6277 12.5 12.5027 13.625 12.5027 15Z"
            fill="#9EC5FE"
          />
        </svg>
      );

    case "account_circle":
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM8.8375 22.85C9.375 21.725 12.65 20.625 15 20.625C17.35 20.625 20.6375 21.725 21.1625 22.85C19.4625 24.2 17.325 25 15 25C12.675 25 10.5375 24.2 8.8375 22.85ZM15 18.125C16.825 18.125 21.1625 18.8625 22.95 21.0375C24.225 19.3625 25 17.275 25 15C25 9.4875 20.5125 5 15 5C9.4875 5 5 9.4875 5 15C5 17.275 5.775 19.3625 7.05 21.0375C8.8375 18.8625 13.175 18.125 15 18.125ZM15 7.5C12.575 7.5 10.625 9.45 10.625 11.875C10.625 14.3 12.575 16.25 15 16.25C17.425 16.25 19.375 14.3 19.375 11.875C19.375 9.45 17.425 7.5 15 7.5ZM13.125 11.875C13.125 12.9125 13.9625 13.75 15 13.75C16.0375 13.75 16.875 12.9125 16.875 11.875C16.875 10.8375 16.0375 10 15 10C13.9625 10 13.125 10.8375 13.125 11.875Z"
            fill="#9EC5FE"
          />
        </svg>
      );
    case "language":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM15.97 8H18.92C17.96 6.35 16.43 5.07 14.59 4.44C15.19 5.55 15.65 6.75 15.97 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4 12C4 12.69 4.1 13.36 4.26 14H7.64C7.56 13.34 7.5 12.68 7.5 12C7.5 11.32 7.56 10.66 7.64 10H4.26C4.1 10.64 4 11.31 4 12ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM5.08 8H8.03C8.35 6.75 8.81 5.55 9.41 4.44C7.57 5.07 6.04 6.34 5.08 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM9.5 12C9.5 12.68 9.57 13.34 9.66 14H14.34C14.43 13.34 14.5 12.68 14.5 12C14.5 11.32 14.43 10.65 14.34 10H9.66C9.57 10.65 9.5 11.32 9.5 12ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.5 12C16.5 12.68 16.44 13.34 16.36 14H19.74C19.9 13.36 20 12.69 20 12C20 11.31 19.9 10.64 19.74 10H16.36C16.44 10.66 16.5 11.32 16.5 12Z"
            fill="#ADB5BD"
          />
        </svg>
      );

    default:
      return <svg></svg>;
  }
};

export default SVGPicker;
