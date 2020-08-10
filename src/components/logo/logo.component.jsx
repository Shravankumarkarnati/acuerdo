import React from "react";
import styled from "styled-components";

const LogoStyled = styled.div`
  cursor: pointer;
  width: 15rem;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.15s;
  & svg {
    width: 100%;
    height: 100%;
    & #logo-text {
      fill: ${(props) => props.logoColor || props.theme.colorBlack};
    }
  }

  &:hover {
    background: ${(props) => props.logoColor || props.theme.colorBlack};
    & svg #logo-text {
      fill: ${(props) => props.logoColor || props.theme.colorBlue};
    }
  }
`;

const LogoMain = ({ logoColor }) => {
  return (
    <LogoStyled logoColor={logoColor}>
      <svg
        width="243"
        height="76"
        viewBox="0 0 243 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="logo-text"
          d="M11.509 75.395C8.24367 75.395 5.63667 74.21 3.688 71.84C1.73933 69.47 0.765 66.3627 0.765 62.518C0.765 58.3047 1.73933 54.3283 3.688 50.589C5.63667 46.797 8.21733 43.7687 11.43 41.504C14.6953 39.1867 18.145 38.028 21.779 38.028C22.9377 38.028 23.7013 38.265 24.07 38.739C24.4913 39.1603 24.8337 39.9503 25.097 41.109C26.203 40.8983 27.3617 40.793 28.573 40.793C31.1537 40.793 32.444 41.7147 32.444 43.558C32.444 44.664 32.049 47.2973 31.259 51.458C30.0477 57.5147 29.442 61.728 29.442 64.098C29.442 64.888 29.6263 65.52 29.995 65.994C30.4163 66.468 30.943 66.705 31.575 66.705C32.5757 66.705 33.787 66.073 35.209 64.809C36.631 63.4923 38.5533 61.3857 40.976 58.489C41.608 57.7517 42.319 57.383 43.109 57.383C43.7937 57.383 44.3203 57.699 44.689 58.331C45.1103 58.963 45.321 59.832 45.321 60.938C45.321 63.0447 44.8207 64.6773 43.82 65.836C41.6607 68.522 39.3697 70.7867 36.947 72.63C34.5243 74.4733 32.1807 75.395 29.916 75.395C28.178 75.395 26.5717 74.8157 25.097 73.657C23.675 72.4457 22.5953 70.813 21.858 68.759C19.1193 73.183 15.6697 75.395 11.509 75.395ZM14.353 67.416C15.5117 67.416 16.6177 66.7313 17.671 65.362C18.7243 63.9927 19.488 62.1757 19.962 59.911L22.885 45.375C20.673 45.4277 18.619 46.2703 16.723 47.903C14.8797 49.483 13.405 51.5897 12.299 54.223C11.193 56.8563 10.64 59.6477 10.64 62.597C10.64 64.2297 10.956 65.441 11.588 66.231C12.2727 67.021 13.1943 67.416 14.353 67.416ZM53.9894 75.395C48.8281 75.395 44.7991 73.9467 41.9024 71.05C39.0584 68.1007 37.6364 64.2297 37.6364 59.437C37.6364 55.171 38.4791 51.4317 40.1644 48.219C41.8497 45.0063 44.0354 42.531 46.7214 40.793C49.4074 39.055 52.2251 38.186 55.1744 38.186C58.0711 38.186 60.3094 39.055 61.8894 40.793C63.5221 42.4783 64.3384 44.664 64.3384 47.35C64.3384 49.562 63.8381 51.4317 62.8374 52.959C61.8894 54.4863 60.6254 55.25 59.0454 55.25C58.0447 55.25 57.2284 55.013 56.5964 54.539C56.0171 54.065 55.7274 53.4067 55.7274 52.564C55.7274 52.1953 55.7801 51.774 55.8854 51.3C55.9907 50.826 56.0697 50.4837 56.1224 50.273C56.3857 49.483 56.5174 48.7457 56.5174 48.061C56.5174 47.3763 56.3331 46.8497 55.9644 46.481C55.6484 46.1123 55.1744 45.928 54.5424 45.928C53.3311 45.928 52.1987 46.481 51.1454 47.587C50.0921 48.6403 49.2494 50.0887 48.6174 51.932C47.9854 53.7753 47.6694 55.803 47.6694 58.015C47.6694 64.1243 50.3291 67.179 55.6484 67.179C57.8077 67.179 60.1251 66.468 62.6004 65.046C65.1284 63.5713 67.6037 61.3857 70.0264 58.489C70.6584 57.7517 71.3694 57.383 72.1594 57.383C72.8441 57.383 73.3707 57.699 73.7394 58.331C74.1607 58.963 74.3714 59.832 74.3714 60.938C74.3714 62.9393 73.8711 64.572 72.8704 65.836C70.3951 68.8907 67.4194 71.2607 63.9434 72.946C60.5201 74.5787 57.2021 75.395 53.9894 75.395ZM76.0434 75.395C73.6734 75.395 71.7247 74.3153 70.1974 72.156C68.7227 69.944 67.9854 67.2053 67.9854 63.94C67.9854 59.99 68.2487 56.3823 68.7754 53.117C69.302 49.799 70.171 46.2967 71.3824 42.61C71.909 41.03 72.6464 39.8977 73.5944 39.213C74.5424 38.5283 76.0434 38.186 78.0974 38.186C79.256 38.186 80.046 38.3703 80.4674 38.739C80.9414 39.1077 81.1784 39.6607 81.1784 40.398C81.1784 40.8193 80.8887 42.2413 80.3094 44.664C79.7827 46.6127 79.3614 48.377 79.0454 49.957C77.992 55.487 77.4654 59.1737 77.4654 61.017C77.4654 62.123 77.597 62.913 77.8604 63.387C78.1237 63.8083 78.545 64.019 79.1244 64.019C79.9144 64.019 80.8887 63.229 82.0474 61.649C83.2587 60.069 84.5227 57.6727 85.8394 54.46C87.2087 51.2473 88.5254 47.2973 89.7894 42.61C90.2107 41.03 90.8427 39.8977 91.6854 39.213C92.5807 38.5283 93.8974 38.186 95.6354 38.186C96.8467 38.186 97.6894 38.344 98.1634 38.66C98.6374 38.9233 98.8744 39.45 98.8744 40.24C98.8744 41.5567 98.216 45.1643 96.8994 51.063C95.4247 57.8043 94.6874 61.965 94.6874 63.545C94.6874 64.5457 94.898 65.3357 95.3194 65.915C95.7407 66.4417 96.2937 66.705 96.9784 66.705C98.0317 66.705 99.2694 66.073 100.691 64.809C102.166 63.4923 104.115 61.3857 106.537 58.489C107.169 57.7517 107.88 57.383 108.67 57.383C109.355 57.383 109.882 57.699 110.25 58.331C110.672 58.963 110.882 59.832 110.882 60.938C110.882 63.0447 110.382 64.6773 109.381 65.836C107.117 68.6273 104.668 70.9183 102.034 72.709C99.4537 74.4997 96.5044 75.395 93.1864 75.395C90.6584 75.395 88.7887 74.4207 87.5774 72.472C86.4187 70.5233 85.8394 67.7847 85.8394 64.256C84.944 67.8373 83.601 70.6023 81.8104 72.551C80.0197 74.447 78.0974 75.395 76.0434 75.395ZM139.711 57.383C140.395 57.383 140.922 57.699 141.291 58.331C141.712 58.963 141.923 59.832 141.923 60.938C141.923 63.0447 141.422 64.6773 140.422 65.836C138.473 68.206 135.708 70.3917 132.127 72.393C128.598 74.3943 124.806 75.395 120.751 75.395C115.221 75.395 110.928 73.894 107.874 70.892C104.819 67.89 103.292 63.782 103.292 58.568C103.292 54.934 104.055 51.5633 105.583 48.456C107.11 45.296 109.217 42.7943 111.903 40.951C114.641 39.1077 117.722 38.186 121.146 38.186C124.2 38.186 126.649 39.1077 128.493 40.951C130.336 42.7417 131.258 45.1907 131.258 48.298C131.258 51.932 129.941 55.0657 127.308 57.699C124.727 60.2797 120.329 62.3337 114.115 63.861C115.431 66.2837 117.933 67.495 121.62 67.495C123.99 67.495 126.676 66.6787 129.678 65.046C132.732 63.3607 135.366 61.175 137.578 58.489C138.21 57.7517 138.921 57.383 139.711 57.383ZM119.803 45.928C117.854 45.928 116.195 47.0603 114.826 49.325C113.509 51.5897 112.851 54.3283 112.851 57.541V57.699C115.958 56.9617 118.407 55.8557 120.198 54.381C121.988 52.9063 122.884 51.1947 122.884 49.246C122.884 48.2453 122.594 47.4553 122.015 46.876C121.488 46.244 120.751 45.928 119.803 45.928ZM141.099 75.395C139.098 75.395 137.676 74.3417 136.833 72.235C136.043 70.1283 135.648 66.7577 135.648 62.123C135.648 55.2763 136.623 48.772 138.571 42.61C139.045 41.0827 139.809 39.9767 140.862 39.292C141.968 38.5547 143.496 38.186 145.444 38.186C146.498 38.186 147.235 38.3177 147.656 38.581C148.078 38.8443 148.288 39.3447 148.288 40.082C148.288 40.9247 147.893 42.8207 147.103 45.77C146.577 47.8767 146.155 49.72 145.839 51.3C145.523 52.88 145.26 54.8287 145.049 57.146C146.787 52.6167 148.736 48.93 150.895 46.086C153.055 43.242 155.161 41.2143 157.215 40.003C159.322 38.7917 161.244 38.186 162.982 38.186C166.406 38.186 168.117 39.8977 168.117 43.321C168.117 44.0057 167.88 45.6647 167.406 48.298C166.985 50.4047 166.774 51.7213 166.774 52.248C166.774 54.0913 167.433 55.013 168.749 55.013C170.224 55.013 172.12 53.8543 174.437 51.537C175.122 50.8523 175.833 50.51 176.57 50.51C177.255 50.51 177.782 50.826 178.15 51.458C178.572 52.0373 178.782 52.8273 178.782 53.828C178.782 55.7767 178.256 57.304 177.202 58.41C175.728 59.9373 173.99 61.254 171.988 62.36C170.04 63.4133 167.959 63.94 165.747 63.94C162.956 63.94 160.823 63.229 159.348 61.807C157.926 60.385 157.215 58.4627 157.215 56.04C157.215 55.25 157.294 54.46 157.452 53.67C157.558 52.6167 157.61 51.9057 157.61 51.537C157.61 50.6943 157.321 50.273 156.741 50.273C155.951 50.273 154.898 51.1683 153.581 52.959C152.317 54.697 151.053 57.0143 149.789 59.911C148.525 62.8077 147.498 65.8623 146.708 69.075C146.129 71.5503 145.444 73.2357 144.654 74.131C143.917 74.9737 142.732 75.395 141.099 75.395ZM216.313 57.383C216.998 57.383 217.525 57.699 217.893 58.331C218.315 58.963 218.525 59.832 218.525 60.938C218.525 63.0447 218.025 64.6773 217.024 65.836C214.865 68.4693 212.495 70.734 209.914 72.63C207.334 74.4733 204.779 75.395 202.251 75.395C198.249 75.395 195.194 73.0513 193.087 68.364C190.875 71.1553 188.927 73.025 187.241 73.973C185.609 74.921 183.686 75.395 181.474 75.395C178.262 75.395 175.602 74.21 173.495 71.84C171.441 69.4173 170.414 66.2837 170.414 62.439C170.414 58.2257 171.31 54.3283 173.1 50.747C174.891 47.113 177.34 44.1637 180.447 41.899C183.607 39.5817 187.136 38.2123 191.033 37.791C192.034 27.5737 193.93 18.8573 196.721 11.642C199.565 4.374 203.278 0.739995 207.86 0.739995C210.125 0.739995 211.995 1.767 213.469 3.821C214.997 5.875 215.76 8.98233 215.76 13.143C215.76 19.0417 214.312 25.941 211.415 33.841C208.519 41.741 204.648 49.8517 199.802 58.173C200.013 61.2277 200.461 63.4133 201.145 64.73C201.883 66.0467 202.804 66.705 203.91 66.705C205.332 66.705 206.781 66.073 208.255 64.809C209.73 63.545 211.705 61.4383 214.18 58.489C214.812 57.7517 215.523 57.383 216.313 57.383ZM206.991 8.48199C205.991 8.48199 204.99 10.2727 203.989 13.854C202.989 17.3827 202.12 22.0173 201.382 27.758C200.698 33.4987 200.197 39.5027 199.881 45.77C205.78 32.9193 208.729 22.5967 208.729 14.802C208.729 12.8007 208.545 11.247 208.176 10.141C207.86 9.035 207.465 8.48199 206.991 8.48199ZM184.239 67.416C185.24 67.416 186.241 67.021 187.241 66.231C188.242 65.3883 189.506 63.861 191.033 61.649C190.507 58.805 190.243 55.6187 190.243 52.09C190.243 50.826 190.296 48.772 190.401 45.928C187.505 46.8233 185.082 48.772 183.133 51.774C181.237 54.7233 180.289 58.015 180.289 61.649C180.289 65.4937 181.606 67.416 184.239 67.416ZM225.45 75.395C222.342 75.395 219.683 74.6313 217.471 73.104C215.311 71.524 213.679 69.47 212.573 66.942C211.467 64.414 210.914 61.7017 210.914 58.805C210.914 54.8023 211.651 51.2473 213.126 48.14C214.653 44.98 216.707 42.531 219.288 40.793C221.868 39.0023 224.765 38.107 227.978 38.107C231.085 38.107 233.745 38.897 235.957 40.477C238.169 42.0043 239.828 44.032 240.934 46.56C242.04 49.088 242.593 51.8003 242.593 54.697C242.593 58.6997 241.829 62.281 240.302 65.441C238.774 68.5483 236.694 70.9973 234.061 72.788C231.48 74.526 228.61 75.395 225.45 75.395ZM226.319 66.863C228.109 66.863 229.61 65.8887 230.822 63.94C232.086 61.9913 232.718 59.1473 232.718 55.408C232.718 52.5113 232.191 50.3257 231.138 48.851C230.084 47.3763 228.82 46.639 227.346 46.639C225.45 46.639 223.87 47.6133 222.606 49.562C221.394 51.458 220.789 54.302 220.789 58.094C220.789 61.096 221.315 63.308 222.369 64.73C223.422 66.152 224.739 66.863 226.319 66.863Z"
          fill="#191125"
        />
      </svg>
    </LogoStyled>
  );
};

export default LogoMain;