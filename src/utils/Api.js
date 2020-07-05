export const getCharacter = async (character) => {
  const API_URL = "https://rickandmortyapi.com/api/character/?name=";
  try {
    const response = await fetch(`${API_URL}${character}`);
    if (response.status === 404) {
      throw "No encontrado";
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
