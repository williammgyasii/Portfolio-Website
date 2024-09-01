import { motion } from "framer-motion";
const OpacityReveal = ({
  children,
  width = "fit-content",
  overflow = "hidden",
}) => {
  return (
    <div style={{ position: "relative", width, }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default OpacityReveal;
