package com.executivo.locacoes.veiculo.enums;

import lombok.Getter;

@Getter
public enum EnumTipoTransmissao {
    
    MANUAL("Manual"),
    AUTOMATICO("Automático");

    private final String nome;

    EnumTipoTransmissao(String nome) {
        this.nome = nome;
    }

}
