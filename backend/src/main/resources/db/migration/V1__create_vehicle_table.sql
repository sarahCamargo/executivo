CREATE TABLE veiculos (
    id SERIAL PRIMARY KEY,
    placa VARCHAR(20) NOT NULL UNIQUE,
    modelo VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    ano VARCHAR(10) NOT NULL,
    renavam BIGINT UNIQUE NOT NULL,
    cor VARCHAR(50),
    tipo_combustivel VARCHAR(50),
    tipo_transmissao VARCHAR(50),
    condicao VARCHAR(50),
    descricao TEXT,
    url_imagem VARCHAR(255),
    proprietario VARCHAR(100),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
