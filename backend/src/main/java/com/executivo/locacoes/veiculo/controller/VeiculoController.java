package com.executivo.locacoes.veiculo.controller;

import com.executivo.locacoes.veiculo.dto.VeiculoDto;
import com.executivo.locacoes.veiculo.service.VeiculoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/veiculo")
public class VeiculoController {

    VeiculoService service;

    @GetMapping
    public List<VeiculoDto> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<VeiculoDto> findById(@PathVariable Long id) {
        VeiculoDto veiculo = service.findById(id);
        if (veiculo == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(veiculo);
    }

    @PostMapping
    public ResponseEntity<VeiculoDto> save(@RequestBody VeiculoDto veiculoDto) {
        return ResponseEntity.ok(service.save(veiculoDto));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PutMapping
    public ResponseEntity<VeiculoDto> update(@RequestBody VeiculoDto newVeiculo) {
        if (newVeiculo == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(service.update(newVeiculo));
    }

}
