import color from '../styles/colors.module.scss';


export const data = {
    eng: {
        header: {
            nav: {
                button: 'GO FRANÇAIS',
            },
            title: {
                h1: <>Web<span className={color.yellow}> Developer</span></>,
                p: 'React JS, Next JS, GraphQL, REST API, Material UI',
            }
        },
        skills: {
            subtitle: <> My <span className={color.orange}>Stack</span> as a Full-Stack <span
                className={color.orange}>Programmer</span></>,
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
            subtitle: <>Here is <span className={color.orange}>what</span> I <span
                className={color.orange}>do</span></>,
            p: <>Having worked in the exciting live music environment, I developed a deep understanding of how to manage
                a tight deadline as well as high stress environment to approach to product creation.</>,
            keyPoint: <>Select a <span className={color.orange}> website</span></>,
            project: {}
        },
        footer: {
            subtitle: <>let's work <span className={color.yellow}>together</span>.</>,
        }
    },

    fr: {
        header: {
            nav: {
                button: 'GO ENGLISH',
            },
            title: {
                h1: <>Développeur<span className={color.yellow}> Web</span></>,
                p: 'React JS, Next JS, GraphQL, REST API, Material UI',
            }
        },
        skills: {
            subtitle: <> Mon <span className={color.orange}>Stack</span> en tant que Full-Stack <span
                className={color.orange}>Programeur</span></>,
            p: "La programmation informatique nous ouvre sur la liberté de designer le monde que l'on souhaite voir. Travailler en collaboration avec des esprits créatifs sur des solutions innovantes qui permettent un monde meilleur est un de mes principes.",

        },
        profile: {
            subtitle: <>Laissez-moi me <span className={color.yellow}>présenter</span></>,
            p: "Ayant travaillé dans le domaine excitant de la musique live et le studio d'enregistrement, j'ai développé une forte capacité à manager des deadlines dans un environement stressant pour aboutir à des créations",
            skillOne: {
                keyPoint: "strong skills.",
                p: "Mes points forts, j'en ai beaucoup!",
            },
            skillTwo: {
                keyPoint: "passionate.",
                p: "Wouala je suis passionné!",
            },
            skillThree: {
                keyPoint: "easy to work with.",
                p: "J'ai de la weed",
            },
        },
        portfolio: {
            subtitle: <>Voici ce que <span className={color.orange}>je fais</span></>,
            p: "Petite presentation de ce que fais, c'est beau",
            keyPoint: <>Selectionne un <span className={color.orange}> site</span></>,
        },
        footer: {
            subtitle: <>Travaillons <span className={color.yellow}>ensemble</span>.</>,
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