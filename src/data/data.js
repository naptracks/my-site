import color from '../styles/colors.module.scss';
import {
    y,
    o,
    p,
    g,
    a,
    h
} from './tools'


//data object:
//-|<pages>
//---|<lang>
//------|<views>
//---------|<components>

export const data = {
    home: {

        //HOME ENGLISH
        eng: {
            header: {
                nav: {
                    button: 'GO FRANÇAIS',
                },
                title: {
                    h1: <>Web {y('Developer')}</>,
                    p: 'React JS, Next JS, GraphQL, REST API, Material UI',
                }
            },
            skills: {
                subtitle: <> My {o('Stack')} as a Full-Stack {o('Programmer')}</>,
                p: "Software engineering gives us the freedom to design the world we want to see. Working collaboratively with creative thinkers on innovative solutions that make the world better for people is how I thrive.",

            },
            profile: {
                subtitle: <>Let me {y('introduce')} myself</>,
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
                p: <>Having worked in the exciting live music environment, I developed a deep understanding of how to
                    manage
                    a tight deadline as well as high stress environment to approach to product creation.</>,
                keyPoint: <>Select a <span className={color.orange}> website</span></>,
                project: {}
            },
            footer: {
                subtitle: <>let's work <span className={color.yellow}>together</span>.</>,
            }
        },
        // HOME FRANCAIS
        fr: {
            header: {
                nav: {
                    button: 'GO ENGLISH',
                },
                title: {
                    h1: <>Développeur {y('Web')}</>,
                    p: 'React JS, Next JS, GraphQL, REST API, Material UI',
                }
            },
            skills: {
                subtitle: <>Mon {o('Stack')} en tant que Full-Stack {o('Développeur')}</>,
                p: <>Je suis spécialisé en {a('React JS', 'https://fr.reactjs.org/')}, le très populaire framework développé par facebook permettant de créer des interfaces utilisateurs complexes. Couplé à la surcouche {a('Next JS', 'https://nextjs.org/')}, la performance du web n'aura jamais été aussi aboutit. Je vous propose mon expertise sur un panel de technologies les plus mordernes pour réaliser de facon optimal tous vos projets en ligne.</>,
            },
            profile: {
                subtitle: <>Petite {y('introduction')}</>,
                p: <>Ma personalité professionnelle se compose d'une carrière d'ingénieur du son dans le milieu très excitant des concerts et des studios d'enregistrements. Par le biais de formations, c'est en 2018 que je découvre le pouvoir magique du développeur informatique: "Maitriser le Digital"! Et c'est depuis 2019 que mes journées sont aujourd'hui consacrées à développer vos idées, dans l'entente, la bonne humeur et la performance.</>,
                skillOne: {
                    keyPoint: "un résultat de qualité.",
                    p: <>Qu'on se le dise, un projet web peut etre parsemé d'embuches et de contraintes. Mon travail n'est pas seulement de vous remettre une {h('livraison de qualité')} dans un temps pré-défini, c'est aussi palier à {h('un certain nombre de defis')} qui naîtrons au fil du projets. Et ça, c'est mon dada... Je garantis {h('tous mes efforts')} pour un {h('résultats de qualité')} qui vous comblera.</>,
                },
                skillTwo: {
                    keyPoint: "je suis passionné.",
                    p: <>J'ai de la chance, j'ai des passions, et devinez quoi..., j'en ai fait ma profession. Je vous propose {h('un code soigné,')} efficace et facilement {h('manipulable')} dans le temps. De l'Application Next JS en {h('headless CMS')} avec un {h('Server-Side Rendering')}, au simple {h('One-Page')}, s'il vous plait, nourrissez ma passion! </>,
                },
                skillThree: {
                    keyPoint: "une bonne entente.",
                    p: <>Je maitrise les outils du {h('"team working"')}. Git, Slack et le live coding sont une deuxième nature pour moi. Je suis disponible à tout moment de la semaine en visio ou par téléphone. Me sentir {h('efficace')}, {h('utile')} et {h('proche du client')} sont des objectifs que j'applique du début à la fin dans toutes mes missions.</>,
                },
            },
            portfolio: {
                subtitle: <>Un petit {o('apperçu')}</>,
                p: "Je vous propose de jetter un oeil sur les differents projets que j'ai eu la chance de réaliser ces dernières années.",
                keyPoint: <>Selectionne un {o('site')}</>,
            },
            footer: {
                subtitle: <>Travaillons {y('ensemble')}.</>,
            }
        },
    },
    contact: {
        //CONTACT ENGLISH
        eng: {
            header: {
                nav: {
                    button: 'GO FRANCAIS'
                },
                subtitle: {
                    h1: <>And this is how {o('it started')}.</>,
                    p: "I work well, I work fast andI love what I'm doing. You can contact and we will talk about your project."
                },
                mailButton: 'Send an em@il',

            },
            footer: {
                keyPoint: 'contact form.',
                subtitle: <>Let's work <span className={color.yellow}>together</span>.</>,
                form: {
                    email: 'Email Adress',
                    name: 'First-name - Last-name',
                    message: 'Message',
                    button: 'Send'
                }
            },
        },
        //CONTACT FRANCAIS
        fr: {
            header: {
                nav: {
                    button: 'GO ENGLISH'
                },
                subtitle: {
                    h1: <>C'est ici que tout {o('commence')}.</>,
                    p: "Je suis disponible en semaine de 9h à 19h. J'essaie au mieux de vous répondre dans les plus bref délais."
                },
                mailButton: 'Envoyer un em@il',


            },
            footer: {
                subtitle: <>Travaillons {y('ensemble')}.</>,
                form: {
                    email: 'Adresse Email',
                    name: 'Nom - Prénom',
                    message: 'Message',
                    button: 'Envoyer'
                },
                keyPoint: 'formulaire de contact.',
            },
        },

    }

}


//edit status
export const ENG_AVAILABLE = 'ACTUALLY AVAILABLE'
export const ENG_BUSY = 'ACTUALLY BUSY'
export const FR_AVAILABLE = 'ACTUELLEMENT DISPONIBLE'
export const FR_BUSY = 'ACTUELLEMENT OCCUPÉ'

export const status = {
    available: {
        eng: ENG_AVAILABLE,
        fr: FR_AVAILABLE
    },
    busy: {
        eng: ENG_BUSY,
        fr: FR_BUSY
    }
}
