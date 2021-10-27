const API_URL = process.env.WP_API_URL

async function fetchAPI(query, {variables} = {}) {
    const headers = {'Content-Type': 'application/json'};
    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({query, variables})
    });

    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        console.log('error details', query, variables);
        throw new Error('Failed to fetch API');
    }
    return json.data
}


//Status query
export async function getStatus(preview) {
    const data = await fetchAPI(
        `
        query Status {
          pages {
            nodes {
              isAvailableStatus {
                isAvailable
              }
            }
          }
        }
        `
    );
    return data?.pages.nodes[0].isAvailableStatus.isAvailable;
}

//ProjectOne query
export async function getProjectOne(preview) {
    const data = await fetchAPI(
        `
        query ProjectOne {
          pages {
            nodes {
              projectOne {
              
                titleOfProjectOne
                urlOfProjectOne
                technicalSpecsOfProjectOne
                
                imageOneOfProjectOne {
                  sourceUrl
                }              
                imageTwoOfProjectOne {
                  sourceUrl
                }
                imageThreeOfProjectOne {
                  sourceUrl
                }
                
                
                engSpecsOneTitleOfProjectOne
                engSpecsOneOfProjectOne
                
                engSpecsTwoTitleOfProjectOne
                engSpecsTwoOfProjectOne
                
                frSpecsOneTitleOfProjectOne
                frSpecsOneOfProjectOne
               
                frSpecsTwoTitleOfProjectOne
                frSpecsTwoOfProjectOne                                                             
              }
            }
          }
        }

                `
    );
    return data?.pages.nodes[0].projectOne
}


//ProjectTwo query
export async function getProjectTwo(preview) {

    const data = await fetchAPI(
        `
        query ProjectTwo {
          pages {
            nodes {
              projectTwo {
                
                titleOfProjectTwo
                urlOfProjectTwo
                technicalSpecsOfProjectTwo
                
                imageOneOfProjectTwo {
                  sourceUrl
                }
                imageTwoOfProjectTwo {
                  sourceUrl
                }
                imageThreeOfProjectTwo {
                  sourceUrl
                }
                
                
                engSpecsOneTitleOfProjectTwo
                engSpecsOneOfProjectTwo
                
                engSpecsTwoTitleOfProjectTwo
                engSpecsTwoOfProjectTwo
                    
                frSpecsOneTitleOfProjectTwo           
                frSpecsOneOfProjectTwo
                
                frSpecsTwoTitleOfProjectTwo
                frSpecsTwoOfProjectTwo
              }
            }
          }
        }

        `
    )
    return data?.pages.nodes[0].projectTwo
}

//ProjectThree query
export async function getProjectThree(preview) {

    const data = await fetchAPI(
        `
        query ProjectThree {
          pages {
            nodes {
              projectThree {
                
                titleOfProjectThree
                urlOfProjectThree
                technicalSpecsOfProjectThree
                
                imageOneOfProjectThree {
                  sourceUrl
                }
                imageTwoOfProjectThree {
                  sourceUrl
                }
                imageThreeOfProjectThree {
                  sourceUrl
                }
                
                
                engSpecsOneTitleOfProjectThree
                engSpecsOneOfProjectThree
                
                engSpecsTwoTitleOfProjectThree
                engSpecsTwoOfProjectThree
                    
                frSpecsOneTitleOfProjectThree           
                frSpecsOneOfProjectThree
                
                frSpecsTwoTitleOfProjectThree
                frSpecsTwoOfProjectThree
              }
            }
          }
        }

        `
    )
    return data?.pages.nodes[0].projectThree
}


//ProjectFour query
export async function getProjectFour(preview) {

    const data = await fetchAPI(
        `
        query ProjectFour {
          pages {
            nodes {
              projectFour {
                
                titleOfProjectFour
                urlOfProjectFour
                technicalSpecsOfProjectFour
                
                imageOneOfProjectFour {
                  sourceUrl
                }
                imageTwoOfProjectFour {
                  sourceUrl
                }
                imageThreeOfProjectFour {
                  sourceUrl
                }
                
                
                engSpecsOneTitleOfProjectFour
                engSpecsOneOfProjectFour
                
                engSpecsTwoTitleOfProjectFour
                engSpecsTwoOfProjectFour
                    
                frSpecsOneTitleOfProjectFour           
                frSpecsOneOfProjectFour
                
                frSpecsTwoTitleOfProjectFour
                frSpecsTwoOfProjectFour
              }
            }
          }
        }

        `
    )
    return data?.pages.nodes[0].projectFour
}


//ProjectFive query
export async function getProjectFive(preview) {

    const data = await fetchAPI(
        `
        query ProjectFive {
          pages {
            nodes {
              projectFive {
                
                titleOfProjectFive
                urlOfProjectFive
                technicalSpecsOfProjectFive
                
                imageOneOfProjectFive {
                  sourceUrl
                }
                imageTwoOfProjectFive {
                  sourceUrl
                }
                imageThreeOfProjectFive {
                  sourceUrl
                }
                
                
                engSpecsOneTitleOfProjectFive
                engSpecsOneOfProjectFive
                
                engSpecsTwoTitleOfProjectFive
                engSpecsTwoOfProjectFive
                    
                frSpecsOneTitleOfProjectFive           
                frSpecsOneOfProjectFive
                
                frSpecsTwoTitleOfProjectFive
                frSpecsTwoOfProjectFive
              }
            }
          }
        }

        `
    )
    return data?.pages.nodes[0].projectFive
}






