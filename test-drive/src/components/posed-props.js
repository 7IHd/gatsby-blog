const articleProps = {
  hoverable: true,
  hover: {
    y: -8,
    opacity: 0.8
  },
  enter: {
    x: 0,
    y: 0,
    opacity: 1,
    delayChildren: 0,
    staggerChildren: 0,
    staggerDirection: 1
  },
  exit: {
    x: 300,
    y: 200,
    opacity: 0
  }
};

const navButtonBarProps = {
  visible: {
    rotate: 90,
    width: "20%",
    height: "4px",
    "border-radius": "50px"
  },
  hidden: {
    rotate: 0,
    height: "2px",
    width: "100%"
  }
};

const navButtonProps = {
  visible: {
    delayChildren: 0,
    staggerChildren: 100,
    staggerDirection: -1
  },
  hidden: {
    delayChildren: 0,
    staggerChildren: 50,
    staggerDirection: -1
  }
};

const navItemProps = {
  hoverable: true,
  hover: {
    x: 2,
    opacity: 0.6
  },
  visible: {
    opacity: 1,
    applyAtStart: {
      y: 0
    }
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      y: -300
    }
  }
};

const navListProps = {
  visible: {
    opacity: 1,
    delayChildren: 0,
    staggerChildren: 300,
    staggerDirection: -1
  },
  hidden: {
    opacity: 0,
    delayChildren: 0,
    staggerChildren: 150,
    staggerDirection: 1
  }
};

export {
  articleProps,
  navButtonBarProps,
  navButtonProps,
  navItemProps,
  navListProps
};
