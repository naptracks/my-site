import color from '../styles/colors.module.scss';


export const data = {
    eng: {
        header: {
            nav: {
                button: 'FRANÇAIS',
            },
            title: {
                h1:  <>Web<span className={color.yellow}> Developer</span></>,
                p: 'React JS, Next JS, GraphQL, REST API, Material UI',
            }
        },
        skills: {
            subtitle: <> My <span className={color.orange}>Stack</span>  as a Full-Stack <span className={color.orange}>Programmer</span> </>,
            p: "Software engineering gives us the freedom to design the world we want to see. Working collaboratively with creative thinkers on innovative solutions that make the world better for people is how I thrive.",

        },
        profile: {
            subtitle: <>Let me <span className={color.yellow}>introduce</span> myself</>,
            p: "Having worked in the exciting live music environment, I developped a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation.",
            skillOne: {
                keyPoint: "strong skills.",
                p: "Having worked in the exciting live music environment, I developped a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation.",
            },
            skillTwo: {
                keyPoint: "passionate.",
                p: "Having worked in the exciting live music environment, I developped a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation.",
            },
            skillThree: {
                keyPoint: "easy to work with.",
                p: "Having worked in the exciting live music environment, I developped a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation.",
            },
        },
        portfolio: {
            subtitle: <>Here is <span className={color.orange}>what</span> I <span className={color.orange}>do</span></>,
            p: <>Having worked in the exciting  live music environment, I developed a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation.</>,
            keyPoint: <>Select a <span className={color.orange}> website</span></>,
            project: {

            }
        },
        footer: {
            subtitle: <>let's work <span className={color.yellow}>together</span>.</>,
            status: {
                available: 'ACTUALLY AVAILABLE',
                busy: 'ACTUALLY BUSY'
            }
        }
    },

    fr: {
        header: {
            nav: {
                button: 'ENGLISH',
            },
            title: {
                h1:  <>Développeur<span className={color.yellow}> Web</span></>,
                p: 'React JS, Next JS, GraphQL, REST API, Material UI',
            }
        },
        skills: {
            subtitle: <> Mon <span className={color.orange}>Stack</span>  en tant que Full-Stack <span className={color.orange}>Programeur</span> </>,
            p: "Etre développeur Web c'est vraiment trop cool!",

        },
        profile: {
            subtitle: <>Let me <span className={color.yellow}>introduce</span> myself</>,
            p: "Having worked in the exciting live music environment, I developped a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation.",
            skillOne: {
                keyPoint: "strong skills.",
                p: "Having worked in the exciting live music environment, I developped a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation.",
            },
            skillTwo: {
                keyPoint: "passionate.",
                p: "Having worked in the exciting live music environment, I developped a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation.",
            },
            skillThree: {
                keyPoint: "easy to work with.",
                p: "Having worked in the exciting live music environment, I developped a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation.",
            },
        },
        portfolio: {
            subtitle: <>Here is <span className={color.orange}>what</span> I <span className={color.orange}>do</span></>,
            p: <><p>Having worked in the exciting live music environment, I developed a deep understanding of how to manage a tight deadline as well as high stress environment to approach to product creation.</p></>,
            keyPoint: <>Select a <span className={color.orange}> website</span></>,
        },
        footer: {
            subtitle: <>let's work <span className={color.yellow}>together</span>.</>,
            status: {
                available: 'ACTUALLY AVAILABLE',
                busy: 'ACTUALLY BUSY'
            }
        }
    },

}

export const status = {
    available: {
        eng: 'ACTUALLY AVAILABLE',
        fr: 'ACTUELLEMENT DISPONIBLE'
    },
    busy: {
        eng: 'ACTUALLY BUSY',
        fr: 'ACTUELLEMENT OCCUPÉ'
    }
}
