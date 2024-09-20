# Inicializar o Front-end com Vite e Yarn

<img align="center" alt="vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img align="center" alt="react" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img align="center" alt="vscode" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/>

## Requisitos

- **Node.js**: Verifique se o Node.js está instalado em seu sistema. Se não estiver, você pode baixá-lo de [nodejs.org](https://nodejs.org/).
- **Yarn**: Verifique se o Yarn está instalado. Caso não esteja, siga as instruções de instalação em [yarnpkg.com](https://yarnpkg.com/).

## Instalação e configuração

## Passos para Iniciar a Aplicação

### Navegar para o Diretório do Cliente

Se o seu projeto tiver uma estrutura com subdiretórios, como um diretório separado para o cliente, navegue até o diretório do cliente. Normalmente, esse diretório pode ser chamado de client ou algo semelhante:

```bash
cd client
```

### Instalar Dependências

```bash
yarn install
```

### Inicializar e Rodar o Projeto

```bash
yarn dev
```

### Builde a imagem separademnte e suba um container (esteja no diretório da imagem)

```
docker build -t <nome_da_imagem>:<tag> .
docker run -d -p 3000:3000 --name <nome_do_container> -v <caminho_do_volume> <nome_da_imagem>:<tag>
```
