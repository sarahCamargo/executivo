package com.executivo.locacoes.veiculo.dto;

import com.executivo.locacoes.veiculo.enums.EnumCondicao;
import com.executivo.locacoes.veiculo.enums.EnumStatus;
import com.executivo.locacoes.veiculo.enums.EnumTipoCombustivel;
import com.executivo.locacoes.veiculo.enums.EnumTipoTransmissao;
import com.executivo.locacoes.veiculo.model.Veiculo;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class VeiculoDto {

    private Long id;
    private String placa;
    private String modelo;
    private String marca;
    private String ano;
    private BigInteger renavam;
    private String cor;
    private EnumTipoCombustivel tipoCombustivel;
    private EnumTipoTransmissao tipoTransmissao;
    private EnumCondicao condicao;
    private String descricao;
    private String urlImagem;
    private String cpfProprietario;
    private LocalDateTime dataCriacao;
    private EnumStatus status;
    private BigDecimal valorLocacao;

    public static VeiculoDto of(Veiculo veiculo) {
        return VeiculoDto.builder()
                .id(veiculo.getId())
                .placa(veiculo.getPlaca())
                .modelo(veiculo.getModelo())
                .marca(veiculo.getMarca())
                .ano(veiculo.getAno())
                .renavam(veiculo.getRenavam())
                .cor(veiculo.getCor())
                .tipoCombustivel(veiculo.getTipoCombustivel())
                .tipoTransmissao(veiculo.getTipoTransmissao())
                .condicao(veiculo.getCondicao())
                .descricao(veiculo.getDescricao())
                .urlImagem(veiculo.getUrlImagem())
                .cpfProprietario(veiculo.getCpfProprietario())
                .dataCriacao(veiculo.getDataCriacao())
                .status(veiculo.getStatus())
                .valorLocacao(veiculo.getValorLocacao())
                .build();
    }

    public Veiculo toEntity() {
        return Veiculo.builder()
                .placa(this.getPlaca())
                .modelo(this.getModelo())
                .marca(this.getMarca())
                .ano(this.getAno())
                .renavam(this.getRenavam())
                .cor(this.getCor())
                .tipoCombustivel(this.getTipoCombustivel())
                .tipoTransmissao(this.getTipoTransmissao())
                .condicao(this.getCondicao())
                .descricao(this.getDescricao())
                .urlImagem(this.getUrlImagem())
                .cpfProprietario(this.getCpfProprietario())
                .dataCriacao(this.getDataCriacao())
                .status(this.getStatus())
                .valorLocacao(this.getValorLocacao())
                .build();
    }
}
