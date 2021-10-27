export const useProject = (data) => {
    let tab = [];
    for (const key in data) {
        tab.push(data[key])
    }
    return new Object({
        title: tab[0],
        url: tab[1],
        tech: tab[2],
        images: [
            {url: tab[3]?.sourceUrl},
            {url: tab[4]?.sourceUrl},
            {url: tab[5]?.sourceUrl},
        ],
        eng: {

            specsOne: {
                title: tab[6],
                p: tab[7],
            },
            specsTwo: {
                title: tab[8],
                p: tab[9]
            }
        },
        fr: {
            specsOne: {
                title: tab[10],
                p: tab[11],
            },

            specsTwo: {
                title: tab[12],
                p: tab[13],
            }
        },
    })
}