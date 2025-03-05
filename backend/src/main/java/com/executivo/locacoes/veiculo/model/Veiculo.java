package com.executivo.locacoes.veiculo.model;

import com.executivo.locacoes.veiculo.enums.EnumCondicao;
import com.executivo.locacoes.veiculo.enums.EnumTipoCombustivel;
import com.executivo.locacoes.veiculo.enums.EnumTipoTransmissao;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.time.LocalDateTime;

@Builder
@Getter
@Setter
@Entity
@Table(name = "veiculos")
public class Veiculo {

    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "placa")
    private String placa;

    @Column(name = "modelo")
    private String modelo;

    @Column(name = "marca")
    private String marca;

    @Column(name = "ano")
    private String ano;

    @Column(name = "renavam")
    private BigInteger renavam;

    @Column(name = "cor")
    private String cor;

    @Column(name = "tipo_combustivel")
    @Enumerated(EnumType.STRING)
    private EnumTipoCombustivel tipoCombustivel;

    @Column(name = "tipo_transmissao")
    @Enumerated(EnumType.STRING)
    private EnumTipoTransmissao tipoTransmissao;

    @Column(name = "condicao")
    @Enumerated(EnumType.STRING)
    private EnumCondicao condicao;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "url_imagem")
    private String urlImagem;

    @Column(name = "proprietario")
    private String cpfProprietario;

    @Column(name = "data_criacao")
    private LocalDateTime dataCriacao;
}
