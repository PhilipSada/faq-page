const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchFaqData = async (start: number, limit: number): Promise<any[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts?_start=${start}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};