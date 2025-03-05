package com.executivo.locacoes.veiculo.enums;

import lombok.Getter;

@Getter
public enum EnumCondicao {
    NOVO("Novo"),
    USADO("Usado"),
    SEMINOVO("Seminovo");

    private final String nome;

    EnumCondicao(String nome) {
        this.nome = nome;
    }
}
