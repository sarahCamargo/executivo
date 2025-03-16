import { useState } from "react";
import { useVeiculoService } from "../../../services/cadastros/veiculos/useVeiculoService";

function useVeiculos() {
  const [data, setData] = useState();
  const { findAll } = useVeiculoService();

  async function fetchList() {
    try {
      const res = await findAll();
      setData(res);
    } catch (e) {
      console.log(e);
    }
  }

  return { fetchList, data };
}

export default useVeiculos();
