const ghostProps = {
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

export {
    ghostProps
};
