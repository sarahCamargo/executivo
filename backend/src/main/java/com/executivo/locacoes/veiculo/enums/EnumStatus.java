package com.executivo.locacoes.veiculo.enums;

import lombok.Getter;

@Getter
public enum EnumStatus {

    DISPONIVEL("Disponível"),
    LOCADO("Locado"),
    EM_MANUTENCAO("Em Manutenção");

    private final String nome;

    EnumStatus(String nome) {
        this.nome = nome;
    }

}
