package com.executivo.locacoes.veiculo.service;

import com.executivo.locacoes.veiculo.dto.VeiculoDto;
import com.executivo.locacoes.veiculo.model.Veiculo;
import com.executivo.locacoes.veiculo.repository.VeiculoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class VeiculoService {

    VeiculoRepository repository;

    public List<VeiculoDto> findAll() {
        List<Veiculo> veiculos = repository.findAll();
        return veiculos.stream().map(VeiculoDto::of).collect(Collectors.toList());
    }

    public VeiculoDto findById(Long id) {
        Optional<Veiculo> veiculo = repository.findById(id);
        return veiculo.map(VeiculoDto::of).orElse(null);
    }

    public VeiculoDto save(VeiculoDto veiculoDto) {
        Veiculo veiculo = veiculoDto.toEntity();
        return VeiculoDto.of(repository.save(veiculo));
    }

    public VeiculoDto update(VeiculoDto newVeiculo) {
        VeiculoDto veiculo = findById(newVeiculo.getId());
        if (veiculo != null) {
            return VeiculoDto.of(repository.save(newVeiculo.toEntity()));
        }
        return null;
    }

    public void delete(Long id) {
        VeiculoDto veiculo = findById(id);
        if (veiculo != null) {
            repository.deleteById(id);
        }
    }
}
