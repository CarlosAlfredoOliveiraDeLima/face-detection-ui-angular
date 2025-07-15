# Face Detection UI Angular

Uma aplicação front-end desenvolvida em Angular para carregar imagens e exibir resultados de detecção facial, funcionando como interface para o serviço de detecção facial.

![Angular](https://img.shields.io/badge/angular-20.1.0-red.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.8.2-blue.svg)
![RxJS](https://img.shields.io/badge/rxjs-7.8.0-purple.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Descrição

Este projeto oferece uma interface amigável para fazer upload de imagens e visualizar os resultados da detecção de rostos. A aplicação se comunica com uma API de detecção facial, enviando imagens e recebendo de volta as imagens processadas com retângulos marcando os rostos detectados.

##  Funcionalidades

-  Interface intuitiva para upload de imagens
-  Visualização em tempo real da imagem selecionada
-  Processamento de detecção facial via API
-  Exibição do número de rostos detectados
-  Visualização da imagem processada com marcações
-  Validação de tipo de arquivo (apenas imagens)

## Tecnologias Utilizadas

- **[Angular 20.1.0](https://angular.io/)** - Framework front-end
- **[TypeScript 5.8.2](https://www.typescriptlang.org/)** - Linguagem de programação
- **[RxJS 7.8.0](https://rxjs.dev/)** - Biblioteca para programação reativa
- **[Angular Router](https://angular.io/api/router)** - Navegação da aplicação
- **[Angular Forms](https://angular.io/api/forms)** - Manipulação de formulários

## Pré-requisitos

- Node.js (versão LTS recomendada)
- npm (gerenciador de pacotes Node.js)
- API de detecção facial em execução (http://localhost:8080)

## Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/face-detection-ui-angular.git
   cd face-detection-ui-angular
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute a aplicação**
   ```bash
   ng serve
   ```

A aplicação estará disponível em `http://localhost:4200`

## Estrutura do Projeto

```
face-detection-ui-angular/
├── src/
│   ├── app/
│   │   ├── control-panel/           # Componente para controles de upload e análise
│   │   ├── image-panel/             # Componente para exibição de imagens
│   │   ├── face-detection.service.ts # Serviço para comunicação com a API
│   │   ├── app.ts                   # Componente principal
│   │   ├── app.html                 # Template principal
│   │   ├── app.scss                 # Estilos do componente principal
│   │   ├── app.config.ts            # Configurações da aplicação
│   │   └── app.routes.ts            # Rotas da aplicação
│   ├── assets/                      # Recursos estáticos
│   └── index.html                   # Página HTML principal
├── package.json                     # Dependências do projeto
└── README.md                        # Este arquivo
```

## Como Usar

1. **Iniciar a aplicação**
   ```bash
   ng serve
   ```

2. **Acessar no navegador**
   Acesse `http://localhost:4200` no seu navegador

3. **Upload de imagem**
   - Clique no botão "Choose Image" e selecione uma imagem do seu computador
   - A imagem será exibida no painel à direita

4. **Analisar faces**
   - Clique no botão "Analyze Faces"
   - A aplicação enviará a imagem para a API de detecção facial
   - Após o processamento, a imagem com os rostos detectados será exibida
   - O número de rostos detectados será mostrado abaixo dos botões

5. **Download da imagem processada** (funcionalidade em desenvolvimento)
   - Após a análise, clique em "Download Image" para salvar a imagem processada

## Comunicação com a API

A aplicação se comunica com uma API REST em `http://localhost:8080/api/faces/detect` através do serviço `FaceDetectionService`. O serviço envia a imagem como um arquivo binário usando `FormData` e recebe de volta:

- A imagem processada como um blob
- O número de rostos detectados via cabeçalho HTTP (`Faces-Count`)
- Informações sobre o sucesso da operação (`X-Success`)
- O formato da imagem processada (`X-Format`)

## Testando a Aplicação

### Pré-requisitos para testes

- API de detecção facial em execução
- Imagens de teste com rostos

### Passos para testar

1. Inicie a API de detecção facial (serviço separado)
2. Inicie a aplicação Angular (`ng serve`)
3. Acesse a aplicação no navegador
4. Faça upload de uma imagem com rostos
5. Clique em "Analyze Faces" para processar a imagem
6. Verifique se os rostos foram detectados corretamente

## Tratamento de Erros

A aplicação implementa tratamento de erros para os seguintes casos:

- Seleção de múltiplos arquivos
- Seleção de arquivos que não são imagens
- Falha na comunicação com a API
- Erro durante o processamento da imagem

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

- **Carlos Alfredo Oliveira de Lima** - [GitHub](https://github.com/CarlosAlfredoOliveiraDeLima)

## Links Relacionados

- [API middleware](https://github.com/CarlosAlfredoOliveiraDeLima/face-detection-api-spring) - API intermediária para integração com a API de detecção de faces
- [API de detecção de faces](https://github.com/CarlosAlfredoOliveiraDeLima/face-detection-core-python) - API de processamento de imagens para detecção de faces

---

 **Gostou do projeto? Deixe uma estrela!** 
