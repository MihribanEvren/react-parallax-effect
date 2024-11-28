import { motion } from 'framer-motion';

const crystalAnimations = {
  delay: 0.5,
  duration: 1,
  repeat: Infinity,
  repeatType: 'reverse',
};
const crystalInitialValues = { x: 0, y: 0 };

function CrystalAnimation() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <motion.svg
        width="300"
        height="400"
        viewBox="0 0 150 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex items-center justify-center w-1/2 stroke-stone-200 stroke-[0.5]"
        style={{
          filter: 'drop-shadow(0px 0px 5px rgba(145, 227, 255, 0.659))',
        }}
        animate={{
          filter: 'drop-shadow(0px 0px 10px 5px rgba(214, 116, 214, 0.741))',
        }}
        transition={crystalAnimations}
      >
        <motion.path
          id="left-front"
          d="M74.9989 229.533L24.4442 202.126L0.27623 162.013L36.5999 30.3049L74.999 52.5142L74.9989 229.533Z"
          fill="url(#paint0_linear_1_810)"
          initial={crystalInitialValues}
          animate={{ x: -10, y: 10 }}
          transition={crystalAnimations}
        />
        <motion.path
          opacity="0.8"
          d="M74.9996 229.533L74.999 138.57L30.3495 164.868L24.4448 202.126L74.9996 229.533Z"
          fill="url(#paint1_linear_1_810)"
          fillOpacity="0.7"
        />
        <g opacity="0.8">
          <motion.path
            id="right-front"
            d="M74.9997 229.532L125.563 202.12L149.722 162.013L113.399 30.3049L74.9996 52.5142L74.9997 229.532Z"
            fill="url(#paint2_linear_1_810)"
            fillOpacity="0.7"
            initial={crystalInitialValues}
            animate={{ x: 10, y: 10 }}
            transition={crystalAnimations}
          />
          <motion.path
            d="M74.9997 229.532L125.563 202.12L149.722 162.013L113.399 30.3049L74.9996 52.5142L74.9997 229.532Z"
            fill="url(#paint3_linear_1_810)"
            fillOpacity="0.5"
            initial={crystalInitialValues}
            animate={{ x: 10, y: 10 }}
            transition={crystalAnimations}
          />
        </g>
        <motion.path
          d="M36.598 30.3049L74.999 52.5136L74.999 8.09615L36.598 30.3049Z"
          fill="url(#paint4_linear_1_810)"
          initial={crystalInitialValues}
          animate={{ x: -10, y: -10 }}
          transition={crystalAnimations}
        />
        <path
          d="M74.9987 159.591L100.425 174.296L74.9987 189.002L49.572 174.296L74.9987 159.591Z"
          fill="url(#paint5_linear_1_810)"
          fillOpacity="0.5"
        />
        <motion.path
          d="M113.4 30.3049L74.9987 8.09615L74.9987 52.5136L113.4 30.3049Z"
          fill="url(#paint6_linear_1_810)"
          fillOpacity="0.8"
          initial={crystalInitialValues}
          animate={{ x: 10, y: -10 }}
          transition={crystalAnimations}
        />
        <path
          d="M74.9987 17.4564L95.5954 29.3683L74.9987 41.2801L54.4021 29.3683L74.9987 17.4564Z"
          fill="url(#paint7_linear_1_810)"
          fillOpacity="0.6"
        />
        <path
          opacity="0.8"
          d="M75.0001 229.532L75.0007 138.57L119.65 164.868L125.555 202.125L75.0001 229.532Z"
          fill="url(#paint8_linear_1_810)"
        />
        <path
          d="M149.722 162.012L125.555 202.126L119.65 164.868L149.722 162.012Z"
          fill="url(#paint9_linear_1_810)"
          fillOpacity="0.7"
        />
        <path
          d="M74.9987 124.937L116.381 148.87L74.9987 172.803L33.6169 148.87L74.9987 124.937Z"
          fill="url(#paint10_linear_1_810)"
          fillOpacity="0.7"
        />
        <path
          d="M74.9987 124.937L116.381 148.87L74.9987 172.803L33.6169 148.87L74.9987 124.937Z"
          fill="url(#paint11_linear_1_810)"
          fillOpacity="0.7"
        />
        <path
          d="M74.9982 172.802L116.379 148.87L100.424 174.297L74.9982 189.002V172.802Z"
          fill="url(#paint12_linear_1_810)"
          fillOpacity="0.9"
        />
        <path
          d="M74.4316 168.878L34.1844 145.601L54.4004 29.3684L74.4316 40.9541L74.4316 168.878Z"
          fill="url(#paint13_linear_1_810)"
          fillOpacity="0.6"
        />
        <path
          d="M74.9991 172.808L116.38 148.876L95.5947 29.3684L74.999 41.2805L74.9991 172.808Z"
          fill="url(#paint14_linear_1_810)"
          fillOpacity="0.9"
        />
        <path
          d="M74.9982 172.802L33.617 148.87L49.572 174.297L74.9982 189.002V172.802Z"
          fill="url(#paint15_linear_1_810)"
          fillOpacity="0.9"
        />
        <path
          d="M0.276775 162.012L24.4446 202.126L30.3492 164.868L0.276775 162.012Z"
          fill="url(#paint16_linear_1_810)"
          fillOpacity="0.7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_810"
            x1="222.078"
            y1="16.3659"
            x2="232.856"
            y2="165.298"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D79ED" />
            <stop offset="0.265625" stopColor="#3458C1" stopOpacity="0.7" />
            <stop offset="0.618879" stopColor="#3753B8" stopOpacity="0.7" />
            <stop offset="0.895833" stopColor="#5BB0FF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#5BB0FF" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_810"
            x1="69.0203"
            y1="217.528"
            x2="43.0128"
            y2="159.85"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.046875" stopColor="white" />
            <stop offset="0.427083" stopColor="#DFF4FF" />
            <stop offset="0.994792" stopColor="#0E42C8" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_810"
            x1="149.722"
            y1="235.021"
            x2="63.1701"
            y2="168.984"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.280479" stopColor="white" />
            <stop offset="0.469567" stopColor="#FF79DA" />
            <stop offset="0.692708" stopColor="#3D3AE3" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_810"
            x1="149.722"
            y1="225.789"
            x2="64.1613"
            y2="143.672"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.161458" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_810"
            x1="75.0939"
            y1="8.83447"
            x2="54.9291"
            y2="41.8756"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1AD6FF" />
            <stop offset="1" stopColor="#496BE4" stopOpacity="0.6" />
            <stop offset="1" stopColor="#1F3CA3" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1_810"
            x1="89.5927"
            y1="182.592"
            x2="54.6023"
            y2="174.296"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#81FF6C" />
            <stop offset="1" stopColor="#31F3FF" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1_810"
            x1="113.4"
            y1="28.0275"
            x2="76.7943"
            y2="24.6262"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF79C9" />
            <stop offset="1" stopColor="#1F3CA3" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_1_810"
            x1="91.6147"
            y1="32.1579"
            x2="67.3197"
            y2="29.3682"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#52FF6E" />
            <stop offset="1" stopColor="#31FFFF" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_1_810"
            x1="115.667"
            y1="215.099"
            x2="96.757"
            y2="147.985"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.103809" stopColor="white" />
            <stop offset="0.436548" stopColor="#FFAACE" stopOpacity="0.8" />
            <stop offset="0.71875" stopColor="#6F97FF" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_1_810"
            x1="134.686"
            y1="191.776"
            x2="119.65"
            y2="162.012"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.591466" stopColor="#FF94D4" />
            <stop offset="1" stopColor="#C994FF" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_1_810"
            x1="98.7503"
            y1="162.371"
            x2="41.8037"
            y2="148.87"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#81FF6C" />
            <stop offset="1" stopColor="#31F3FF" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_1_810"
            x1="74.9987"
            y1="171.084"
            x2="74.9987"
            y2="123.845"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_1_810"
            x1="118.398"
            y1="148.87"
            x2="76.0463"
            y2="187.11"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.149863" stopColor="white" />
            <stop offset="0.300261" stopColor="#8CFF31" />
            <stop offset="0.449118" stopColor="#45C3EB" />
            <stop offset="1" stopColor="#72E6FF" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_1_810"
            x1="56.4618"
            y1="168.878"
            x2="-7.38027"
            y2="124.142"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6CFFED" />
            <stop offset="1" stopColor="#197F9F" />
          </linearGradient>
          <linearGradient
            id="paint14_linear_1_810"
            x1="219.617"
            y1="119.03"
            x2="151.053"
            y2="47.2397"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.464598" stopColor="white" />
            <stop offset="0.790313" stopColor="#6DF390" />
            <stop offset="1" stopColor="#21CAFF" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient
            id="paint15_linear_1_810"
            x1="33.617"
            y1="148.87"
            x2="73.9515"
            y2="187.055"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.125" stopColor="white" />
            <stop offset="0.297772" stopColor="#8CFF31" />
            <stop offset="0.447917" stopColor="#5BF5FF" />
          </linearGradient>
          <linearGradient
            id="paint16_linear_1_810"
            x1="26.0179"
            y1="205.381"
            x2="20.1871"
            y2="162.012"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DFF4FF" />
            <stop offset="0.994792" stopColor="#0E42C8" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

export default CrystalAnimation;
