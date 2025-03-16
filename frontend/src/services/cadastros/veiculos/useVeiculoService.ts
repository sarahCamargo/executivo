import axios from "axios";

export function useVeiculoService() {
  const axiosService = axios.create({
    baseURL: "localhost:8080",
  });

  async function findAll() {
    try {
      const res = await axiosService.get("/veiculo");
      console.log(res);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }

  return { findAll };
}
