import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    {...props}
  />
);

export const MenuToggle = (props: { className?: string }) => (
  <button className={props.className}>
    <svg width="100%" height="100%" viewBox="0 0 42 42">
      <Path
        variants={{
          closed: { d: "M 2 16 L 40 16", stroke: "currentColor" },
          open: { d: "M 8 34 L 34 8", stroke: "currentColor" }
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 25 L 40 25", stroke: "currentColor" },
          open: { d: "M 8 8 L 34 34", stroke: "currentColor" }
        }}
      />
    </svg>
  </button>
);
