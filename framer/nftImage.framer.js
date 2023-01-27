export const imageContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    duration: 0.2,
  },
};

export const tokenNameVariants = {
  hover: {
    scale: 1.5,
    y: [null, -5, 0],
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};
