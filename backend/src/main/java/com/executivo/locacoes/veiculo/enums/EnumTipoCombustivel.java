package com.executivo.locacoes.veiculo.enums;

import lombok.Getter;

@Getter
public enum EnumTipoCombustivel {
    GASOLINA("Gasolina"),
    DIESEL("Diesel"),
    ETANOL("Etanol"),
    GNV("GNV"),
    ELETRICO("Elétrico"),
    FLEX("Flex");

    private final String nome;

    EnumTipoCombustivel(String nome) {
        this.nome = nome;
    }
}
