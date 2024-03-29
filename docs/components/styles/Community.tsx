import Link from "next/link";
import React from "react";

export const Community = () => {
  return (
    <section className="flex flex-col gap-10   px-4 py-28 md:gap-20 xl:px-0">
      <h2 className="text-center text-3xl font-semibold md:text-4xl">
        Community Support
      </h2>
      <div className="mx-auto flex  w-full flex-row flex-wrap justify-center  gap-4">
        <Link
          aria-label="RippleUI Discord"
          href={"https://discord.gg/b9ZqWsmqsj"}
          className="card cursor-pointer p-8 shadow-md transition-colors hover:bg-gray-4"
          target={"_blank"}
        >
          <div className="bg-discordIcon flex h-fit w-fit flex-col items-center justify-center rounded-full p-3.5">
            <svg
              width="30"
              height="30"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.2993 7.55086C25.4151 6.67252 23.3751 6.03502 21.2501 5.66669C21.2315 5.6661 21.2129 5.66959 21.1958 5.67693C21.1787 5.68428 21.1633 5.69529 21.1509 5.70919C20.8959 6.17669 20.5984 6.78586 20.4001 7.25336C18.1462 6.91336 15.854 6.91336 13.6001 7.25336C13.4018 6.77169 13.1043 6.17669 12.8351 5.70919C12.8209 5.68086 12.7784 5.66669 12.7359 5.66669C10.6109 6.03502 8.58508 6.67252 6.68675 7.55086C6.67258 7.55086 6.65842 7.56502 6.64425 7.57919C2.79092 13.345 1.72842 18.955 2.25258 24.5084C2.25258 24.5367 2.26675 24.565 2.29508 24.5792C4.84508 26.4492 7.29592 27.5825 9.71842 28.3334C9.76092 28.3475 9.80342 28.3334 9.81758 28.305C10.3843 27.5259 10.8943 26.7042 11.3334 25.84C11.3618 25.7834 11.3334 25.7267 11.2768 25.7125C10.4693 25.4009 9.70425 25.0325 8.95342 24.6075C8.89675 24.5792 8.89675 24.4942 8.93925 24.4517C9.09508 24.3384 9.25092 24.2109 9.40675 24.0975C9.43508 24.0692 9.47758 24.0692 9.50592 24.0834C14.3793 26.3075 19.6351 26.3075 24.4518 24.0834C24.4801 24.0692 24.5226 24.0692 24.5509 24.0975C24.7068 24.225 24.8626 24.3384 25.0184 24.4659C25.0751 24.5084 25.0751 24.5934 25.0042 24.6217C24.2676 25.0609 23.4884 25.415 22.6809 25.7267C22.6243 25.7409 22.6101 25.8117 22.6243 25.8542C23.0776 26.7184 23.5876 27.54 24.1401 28.3192C24.1826 28.3334 24.2251 28.3475 24.2676 28.3334C26.7042 27.5825 29.1551 26.4492 31.7051 24.5792C31.7334 24.565 31.7476 24.5367 31.7476 24.5084C32.3709 18.0909 30.7134 12.5234 27.3559 7.57919C27.3417 7.56502 27.3276 7.55086 27.2993 7.55086V7.55086ZM12.0701 21.1225C10.6109 21.1225 9.39258 19.7767 9.39258 18.1192C9.39258 16.4617 10.5826 15.1159 12.0701 15.1159C13.5718 15.1159 14.7618 16.4759 14.7476 18.1192C14.7476 19.7767 13.5576 21.1225 12.0701 21.1225ZM21.9443 21.1225C20.4851 21.1225 19.2668 19.7767 19.2668 18.1192C19.2668 16.4617 20.4568 15.1159 21.9443 15.1159C23.4459 15.1159 24.6359 16.4759 24.6217 18.1192C24.6217 19.7767 23.4459 21.1225 21.9443 21.1225Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold">Discord</span>
              <p className="text-content2">
                For ask to the comunity and solve all your questions
              </p>
            </div>
          </div>
        </Link>
        <Link
          aria-label="RippleUI Github"
          href={"https://github.com/Siumauricio/rippleui"}
          target="_blank"
          className="card cursor-pointer p-8  shadow-md transition-colors hover:bg-gray-4"
        >
          <div className="flex h-fit w-fit flex-col items-center justify-center rounded-full bg-gray-6 p-3.5">
            <svg
              width="30"
              height="30"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3C16.0302 3 14.0796 3.38799 12.2597 4.14181C10.4399 4.89563 8.78628 6.00052 7.3934 7.3934C4.58035 10.2064 3 14.0218 3 18C3 24.63 7.305 30.255 13.26 32.25C14.01 32.37 14.25 31.905 14.25 31.5V28.965C10.095 29.865 9.21 26.955 9.21 26.955C8.52 25.215 7.545 24.75 7.545 24.75C6.18 23.82 7.65 23.85 7.65 23.85C9.15 23.955 9.945 25.395 9.945 25.395C11.25 27.675 13.455 27 14.31 26.64C14.445 25.665 14.835 25.005 15.255 24.63C11.925 24.255 8.43 22.965 8.43 17.25C8.43 15.585 9 14.25 9.975 13.185C9.825 12.81 9.3 11.25 10.125 9.225C10.125 9.225 11.385 8.82 14.25 10.755C15.435 10.425 16.725 10.26 18 10.26C19.275 10.26 20.565 10.425 21.75 10.755C24.615 8.82 25.875 9.225 25.875 9.225C26.7 11.25 26.175 12.81 26.025 13.185C27 14.25 27.57 15.585 27.57 17.25C27.57 22.98 24.06 24.24 20.715 24.615C21.255 25.08 21.75 25.995 21.75 27.39V31.5C21.75 31.905 21.99 32.385 22.755 32.25C28.71 30.24 33 24.63 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3V3Z"
                className="fill-content1"
              />
            </svg>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold">Github</span>
              <p className="text-content2">
                For report bugs and suggest new features to the project
              </p>
            </div>
          </div>
        </Link>
        <Link
          aria-label="Creator of RippleUI"
          href={"https://twitter.com/Siumauricio"}
          className="card cursor-pointer p-8 shadow-md  transition-colors hover:bg-gray-4"
          target={"_blank"}
        >
          <div className="flex h-fit w-fit flex-col items-center justify-center rounded-full bg-blue-9 p-3.5">
            <svg
              width="30"
              height="30"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.8183 8.49996C30.7275 8.99579 29.5516 9.32163 28.3333 9.47746C29.58 8.72663 30.5433 7.53663 30.9966 6.10579C29.8208 6.81413 28.5175 7.30996 27.1433 7.59329C26.0241 6.37496 24.4516 5.66663 22.6666 5.66663C19.3375 5.66663 16.6175 8.38663 16.6175 11.7441C16.6175 12.2258 16.6741 12.6933 16.7733 13.1325C11.73 12.8775 7.23914 10.455 4.24997 6.78579C3.72581 7.67829 3.42831 8.72663 3.42831 9.83163C3.42831 11.9425 4.49081 13.8125 6.13414 14.875C5.12831 14.875 4.19331 14.5916 3.37164 14.1666V14.2091C3.37164 17.1558 5.46831 19.6208 8.24497 20.1733C7.3535 20.4173 6.41761 20.4512 5.51081 20.2725C5.89558 21.4801 6.64915 22.5369 7.66558 23.2941C8.68201 24.0514 9.91019 24.471 11.1775 24.4941C9.02928 26.1947 6.36647 27.114 3.62664 27.1008C3.14497 27.1008 2.66331 27.0725 2.18164 27.0158C4.87331 28.7441 8.07497 29.75 11.5033 29.75C22.6666 29.75 28.8008 20.485 28.8008 12.4525C28.8008 12.1833 28.8008 11.9283 28.7866 11.6591C29.9766 10.8091 30.9966 9.73246 31.8183 8.49996V8.49996Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold">Twitter</span>
              <p className="text-content2">
                Follow us on Twitter to get the latest news and updates
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

// M5B 2H1
