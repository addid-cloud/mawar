export const fetchNews = async (data) => {
  let url = `https://berita-indo-api.vercel.app/v1/cnn-news/${data}`;
  try {
    let response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error('Fetch failed', error);
    throw error; // re-throw the error after logging or handle it as needed
  }
};
