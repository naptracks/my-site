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

export async function getStatus(preview) {
    console.log(preview)
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



