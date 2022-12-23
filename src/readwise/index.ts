import { readwiseAccessToken } from '../EnvironmentService';

const fetchFromExportApi = async (updatedAfter = null) => {
  let fullData = [];
  let nextPageCursor = null;

  while (true) {
    const queryParams = new URLSearchParams();
    if (nextPageCursor) {
      queryParams.append('pageCursor', nextPageCursor);
    }
    if (updatedAfter) {
      queryParams.append('updatedAfter', updatedAfter);
    }
    console.log(
      'Making export api request with params ' + queryParams.toString()
    );
    const response = await fetch(
      'https://readwise.io/api/v2/export/?' + queryParams.toString(),
      {
        method: 'GET',
        headers: {
          Authorization: `Token ${readwiseAccessToken}`,
        },
      }
    );
    const responseJson = await response.json();
    fullData.push(...responseJson['results']);
    nextPageCursor = responseJson['nextPageCursor'];
    if (!nextPageCursor) {
      break;
    }
  }
  return fullData;
};

async function main() {
  // Get all of a user's books/highlights from all time
  const allData = await fetchFromExportApi();

  const data = allData.map((d) => {
    if (d.highlights) {
      return d.highlights.map((h: { text: string }) => {
        return { body: h.text, title: d.title };
      });
    } else {
      return [];
    }
  });

  console.log(data);
  //   // Later, if you want to get new highlights updated since your last fetch of allData, do this.
  //   const lastFetchWasAt = new Date(Date.now() - 24 * 60 * 60 * 1000); // use your own stored date
  //   const newData = await fetchFromExportApi(lastFetchWasAt.toISOString());
}

main();
