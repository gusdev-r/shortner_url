# Inicializar o Backend com Python e Django

<div style="display: inline_block">
    <img align="center" alt="python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
    <img align="center" alt="django" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"/>
    <img align="center" alt="vscode" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/>
</div>

## Requisitos

Possuir tecnologias baixadas e configurar ambiente como: Python, IDE, ambiente virtual, dependências do requirements.txt, etc.

# Configuração de Ambiente Python e Django

Este guia fornece instruções para configurar um ambiente Python, criar um ambiente virtual, instalar dependências a partir de um arquivo `requirements.txt`, e executar as migrações para um projeto Django.

## 1. Instalar o Python

**Windows, macOS e Linux:**

1. **Baixe o Python:**

   - **Windows:** Acesse o [site oficial do Python](https://www.python.org/downloads/) e baixe o instalador para Windows.
   - **macOS:** Acesse o [site oficial do Python](https://www.python.org/downloads/) e baixe o instalador para macOS.
   - **Linux:** O Python geralmente já está instalado. Caso contrário, você pode instalá-lo usando o gerenciador de pacotes da sua distribuição.

2. **Instale o Python:**

   - Execute o instalador e siga as instruções. No Windows, certifique-se de marcar a opção "Add Python to PATH" durante a instalação.

3. **Verifique a Instalação:**
   - Abra um terminal ou prompt de comando e execute:
     ```bash
     python --version
     ```
   - Deve retornar a versão do Python instalada.

## 2. Criar e Ativar um Ambiente Virtual

1. **Crie um Ambiente Virtual:**

   - Navegue até o diretório onde deseja criar o ambiente virtual.
   - Execute o comando:
     ```bash
     python -m venv nome_do_ambiente
     ```
   - Substitua `nome_do_ambiente` pelo nome desejado para o ambiente virtual.

2. **Ative o Ambiente Virtual:**

   - **Windows:**
     ```bash
     nome_do_ambiente\Scripts\activate
     ```
   - **macOS e Linux:**

     ```bash
     source nome_do_ambiente/bin/activate
     ```

   - Você verá o nome do ambiente virtual na linha de comando, indicando que está ativado.

## 3. Instalar Dependências do `requirements.txt`

1. **Certifique-se de que o `requirements.txt` está no diretório do projeto.**

2. **Instale as Dependências:**

   - Execute o comando:

     ```bash
     pip install -r requirements.txt
     ```

   - Isso instalará todas as bibliotecas listadas no arquivo `requirements.txt`.

## 4. Fazer as Migrações (Se estiver usando Django)

1. **Navegue até o Diretório do Projeto:**

   - Certifique-se de que está no diretório onde está o arquivo `manage.py` do seu projeto Django.

2. **Faça as Migrações:**

   - Execute o comando:
     ```bash
     python manage.py makemigrations
     ```
   - Esse comando cria arquivos de migração para qualquer mudança feita no modelo.

3. **Aplique as Migrações:**
   - Execute o comando:
     ```bash
     python manage.py migrate
     ```
   - Isso aplica as migrações ao banco de dados.

## 5. Rodar o Servidor (Se estiver usando Django)

1. **Inicie o Servidor de Desenvolvimento:**
   - Execute o comando:
     ```bash
     python manage.py runserver
     ```
   - O servidor será iniciado e você poderá acessar a aplicação no seu navegador em `http://127.0.0.1:8000/`.

## 6. Desativar o Ambiente Virtual

- Quando terminar de trabalhar no projeto, você pode desativar o ambiente virtual executando:
  ```bash
  deactivate
  ```

## Configuração do Arquivo `.env`

O arquivo `.env` é usado para armazenar variáveis de ambiente que configuram sua aplicação. Abaixo estão as variáveis que você deve preencher e suas finalidades:

### Variáveis de Ambiente

- **`SITE_URL`**

  - **Descrição**: Define a URL base do site.
  - **Uso**: Utilizado para configurar links absolutos e referências em sua aplicação.
  - **Exemplo de Preenchimento**:
    ```ini
    SITE_URL=http://localhost:8000
    ```

- **`DEVELOPMENT`**
  - **Descrição**: Indica se a aplicação está em modo de desenvolvimento ou produção.
  - **Uso**: Controla configurações específicas para desenvolvimento, como depuração.
  - **Exemplo de Preenchimento**:
    ```ini
    DEVELOPMENT=True
    ```

### Como Usar

1. **Crie um arquivo `.env`** na raiz do seu projeto.
2. **Preencha as variáveis** conforme necessário.
3. **Carregue as variáveis** no seu código usando a biblioteca `python-dotenv`
