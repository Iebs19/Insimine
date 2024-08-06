import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Particles from "@/components/magicui/particles";
import Layout from './Layout';
import logo from "../src/assets/favicon_insimine.png";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import {motion} from 'framer-motion';
import { BorderBeam } from "@/components/magicui/border-beam";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <div className=''>
        <div className='relative flex flex-col justify-center text-left'>
            <div className='font-nas text-center font-bold pointer-events-none bg-gradient-to-b from-green to-lightBlue bg-clip-text text-9xl font-semibold leading-none text-transparent dark:from-green dark:to-lightBlue'>InsiMine</div>
            <GradualSpacing className='font-nas text-4xl text-left' text='Mining Insights for Data Driven Success.' />
        </div>
          {/* <BorderBeam size={250} duration={12} delay={9} colorFrom='darkBlue' colorTo='green' borderWidth={2.5} /> */}
        </div>

          {/* <div className='flex-shrink-0'> */}
            {/* <img src={logo} alt="Insimine-logo" /> */}
            {/* <motion.img
              // id={classes["floater"]}
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
              }}
              src={logo}
              alt="floater"
            /> */}
          {/* </div> */}
      </Layout>
    </>
  );
}

export default App;
