import tw from "tailwind-styled-components";

const CustomStyles = {
  Animations: {
    BorderStyles: tw.p`no-underline bg-gradient-to-r from-[#d99a5a] to-[#d99a5a] bg-[length:0%_0.1em] bg-[0%_100%] bg-no-repeat transition-slide-underline hover:bg-[length:100%_0.1em] cursor-pointer`,
    ButtonStyles: tw.button`bg-linear-gradient transition-transition-slide delay-slide-delay bg-[length:200%] hover:bg-[-100%_100%] hover:text-white cursor-pointer`,
  },
};
export { CustomStyles };
