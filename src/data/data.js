import color from '../styles/colors.module.scss';
import {svg} from './svg'
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

        //PAGE HOME ENGLISH
        eng: {

            header: {
                nav: {
                    button: 'GO FRANÇAIS',
                },
                title: {
                    h1: <>Web {y('Developer')}</>,
                    p: 'React JS, Next JS, GraphQL, REST API, Material UI',
                },
                ide: {
                    line1: 'Hi there, I\'m Cesar Martel and you are on my portfolio.',
                    line2: 'Please enjoy watching my experiences and works,',
                    line3: 'and don\'t forget to click on the contact button!',
                    com: 'click to see the page',
                    title: 'Web Developer'
                },
            },

            skills: {
                subtitle: <> My {o('Stack')} as a Full-Stack {o('Programmer')}</>,
                p: <>Software engineering gives us the freedom we want to see. I'm Cesar Martel and I'm specialized
                    in {a('React JS', svg.reactjs.href)}, the popular framework developed by facebook which make
                    possible a whole universe of complex user interfaces. And thanks to the
                    friendly {a('Next JS', svg.nextjs.href)}, new generations of websites has become faster and more
                    optimized than ever. I offer you my expertize on the most recent and robust technologies to give
                    life to your projects. Get in touch!</>,
            },

            profile: {
                subtitle: <>Let me {y('introduce')} myself</>,
                p: <>I come from the exciting live music and recording studios area, learning how to manage tight
                    deadlines as well as high stress environment. In 2019 I studied the power of coding and how it can
                    be a useful tool to product creation. Since then, I dedicate my days to developed an adaptive code
                    which fits the best with your project.</>,
                skillOne: {
                    keyPoint: "perseverance.",
                    p: <>Let's say it, a web project can hide problems as well as restrictions. My work does not only
                        consist of providing a {h('good quality product')} in a {h('pre-defined timing')}, it also has
                        to face numbers of problems that pops up along the side. And this is what I love in this job. I
                        guarantee you a {h('high quality code')} in ever technologies you need.</>,
                },

                skillTwo: {
                    keyPoint: "passionate.",
                    p: <>I feel lucky, I have passions, and guess what..., it also is my job. I put all my passion into
                        my code to {h('reach out your goals')}. From an {h('headless CMS')} app
                        with {h('Server-Side Rendering')} to the simple One-page, please feed my passion.</>,
                },

                skillThree: {
                    keyPoint: "easy to work with.",
                    p: <>{h('Team working')} is always an experience that I enjoy. {h('Git, Slack or live coding')} are
                        second nature to me. I make myself reachable anytime during the week. Feeling effective, useful
                        and {h('close to the customer')} is what I aim for all missions I accept.</>,
                },
            },

            portfolio: {
                subtitle: <>Let's {o('showcase')}</>,
                p: <>Have a look at what I can do. You can find below some projects made with various technologies and
                    complexities that I've been lucky to realised those last years.</>,
                keyPoint: <>Select a {o('website')}</>,
                project: {}
            },
            footer: {
                subtitle: <>let's work {y('together')}.</>,
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
                },
                ide: {
                    line1: "Bonjour, je suis Cesar Martel, et vous êtes sur mon portfolio.",
                    line2: 'Vous y trouverez mes compétences et une partie de mon travail.',
                    line3: 'Pour un nouveau projet, cliquez sur contact!',
                    com: 'clique pour voir la page',
                    title: 'Développeur Web'
                },
            },
            skills: {
                subtitle: <>Mon {o('Stack')} en tant que Full-Stack {o('Développeur')}</>,
                p: <>L'ingénieurie informatique nous offre la liberté de conçevoir le monde que l'on souhaite voir. Je
                    m'appelle Cesar Martel et je suis spécialisé en {a('React JS', 'https://fr.reactjs.org/')}, le très
                    populaire framework développé par facebook permettant de créer des interfaces utilisateurs
                    complexes. Couplé à la surcouche {a('Next JS', 'https://nextjs.org/')}, la performance du web n'aura
                    jamais été aussi aboutit. Je vous propose mon expertise sur un panel de technologies les plus
                    mordernes pour réaliser de facon optimal tous vos projets en ligne.</>,
            },
            profile: {
                subtitle: <>Petite {y('introduction')}</>,
                p: <>Mes compétences professionnelle se compose d'une carrière d'ingénieur du son dans le milieu très
                    excitant des concerts et des studios d'enregistrements. Par le biais de formations, c'est en 2019
                    que se rajoute à celles-ci le pouvoir du développeur informatique: "la maîtrise du digital"! Et c'est
                    depuis 2020 que mes journées sont aujourd'hui consacrées à développer vos idées numériques, dans l'entente, la
                    bonne humeur et la performance.</>,
                skillOne: {
                    keyPoint: "percévérance.",
                    p: <>Qu'on se le dise, un projet web peut etre parsemé d'embuches et de contraintes. Mon travail
                        n'est pas seulement de vous remettre une {h('livraison de qualité')} dans un temps pré-défini,
                        c'est aussi palier à {h('un certain nombre de defis')} qui naîtrons au fil du projets. Et ça,
                        c'est mon dada... Je garantis {h('tous mes efforts')} pour un résultat de qualité qui
                        vous comblera.</>,
                },
                skillTwo: {
                    keyPoint: "je suis passionné.",
                    p: <>J'ai de la chance, j'ai des passions, et devinez quoi..., j'en ai fait ma profession. Je vous
                        propose {h('un code soigné,')} efficace et facilement {h('manipulable')} dans le temps. De
                        l'application Next JS en {h('headless CMS')} avec un {h('Server-Side Rendering')}, au
                        simple One-Page, s'il vous plait, nourrissez ma passion! </>,
                },
                skillThree: {
                    keyPoint: "une bonne entente.",
                    p: <>Je maitrise les outils du {h('"team working"')}. Git, Slack et le live coding sont une deuxième
                        nature pour moi. Je suis disponible à tout moment de la semaine en visio ou par téléphone. Me
                        sentir {h('efficace')}, {h('utile')} et {h('proche du client')} sont des objectifs que
                        j'applique du début à la fin dans toutes mes missions.</>,
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
                    p: "I work well, I work fast and I love what I'm doing. Contact me to talk about your project."
                },
                mailButton: 'Send an em@il',
            },
            footer: {
                keyPoint: 'contact form.',
                subtitle: <>Let's work {y('together')}.</>,
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
