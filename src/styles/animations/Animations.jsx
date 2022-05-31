export const cardVariant = {
    hidden: {
        opacity: 0,
        scale: 0.7
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            default: {
                duration: 0.5,
            },
            type: "spring",
            mass: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2,
        }
    },
    
}

export const childrenVariant = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            default: {  
                duration: 0.2, 
            },
        staggerChildren: 0.1,   
       }
    },

}

export const itemVariant = {
    hidden: {
        scale: 0,
        opacity: 0,
        x: 30,
    },
    visible: {
        scale: 1,
        opacity: 1,
        x: 0,
        transition: {
            default: {  
                duration: 0.1, 
            },
       }
    }
}