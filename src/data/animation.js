export const animationOverlay =
{
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
    transition: {
        duration: .12, type: 'tween'
    }
}

export const animationModal = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: 20
    },
    transition: {
        duration: .24, type: 'tween'
    }
}

export const animationFooter = {

    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: 100
    },
    transition: {
        duration: .24, type: 'tween'
    }

}