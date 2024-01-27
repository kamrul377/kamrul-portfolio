import React, { useState } from 'react'
import Heading from '../utils/Heading'
import { data } from '../data'
import FilterButton from '../utils/Filterbutton'
import { AnimatePresence, motion } from 'framer-motion'

const Works = () => {


  const [displayData, setDisplayData] = useState(data.items);
  const [active, setActive] = useState("all");

  const handleCategoryClick = (category) => {
    if (category === active) return;
    setActive(category);
    setDisplayData([]);

    if (category === "all") {
      setDisplayData(data.items);
      return;
    }

    const filteredData = data.items.filter(
      (item) => item.category === category
    );

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 400);
  };

  return (
    <div className='bg-[#0f1a27] px-10 pb-10' id="works">

      <Heading heading="My Works" inner="works" />


      <div className="gallery">
        <FilterButton active={active} handleClick={handleCategoryClick} />

        <div className="grid grid-col-3 gap-2">
          <AnimatePresence>
            {displayData.map(({ img, category }, i) => (
              <motion.div
                style={{ overflow: "hidden" }}
                key={i}
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                exit={{ transform: "scale(0)" }}
              >
                <motion.img
                  src={img}
                  className="rounded"
                  alt="nothing"
                  width="100%"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>


      </div>

    </div>
  )
}

export default Works