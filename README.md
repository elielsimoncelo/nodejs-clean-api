# nodejs-clean-api

Projeto para criação de API's RESTful com NodeJS e MongoDB utilizando Clean Architecture.

## Criando o arquivo .gitignore

```sh
curl -o .gitignore "https://www.toptal.com/developers/gitignore/api/node,macos,windows,linux,vs,visualstudiocode,jetbrains+all,eclipse,netbeans,vim,visualstudio,visualbasic,sublimetext,notepadpp,xcode,python,go,dotnetcore,powershell,zsh,git,nextjs,react,reactnative"
```

## Criando atalhos globais para o git

```sh
git config --global --list # Lista todos os atalhos globais
git config --global core.editor 'code --wait' # Editor padrão
git config --global alias.s '!git status -s' # Atalho para o status
git config --global alias.c '!git add --all && git commit -m' # Atalho para o commit
git config --global alias.ca '!git add --all && git commit --amend' # Atalho para o commit com amend
git config --global alias.a '!git add --all' # Atalho para o add
git config --global alias.d '!git diff' # Atalho para o diff
git config --global alias.l '!git --no-pager log --pretty=format:"%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr"' # Atalho para o log
git config --global alias.b '!git branch' # Atalho para as branches
git config --global alias.m '!git merge' # Atalho para o merge
git config --global alias.p '!git push' # Atalho para o push
git config --global alias.f '!git fetch' # Atalho para o fetch
git config --global alias.r '!git reset' # Atalho para o reset
git config --global alias.o '!git checkout' # Atalho para o checkout
git config --global --edit
```

## Criando o projeto e configurando o projeto
    
```sh
npm init -y # criando o projeto
npm install -D git-commit-msg-linter # adicionando o linter para commits semanticos
npm install -D typescript # adicionando o typescript para compilar o codigo typescript para javascript
npm install -D @types/node # adicionando o @types/node para a tipagem do node para o typescript
```

## Vamos utilizar o padrão do standardjs no nosso projeto

> Saiba mais sobre o standardjs aqui (https://standardjs.com/)
> Saiba mais sobre o eslint aqui (https://eslint.org/)
> Saiba mais sobre o eslint com standardjs aqui (https://github.com/standard/eslint-config-standard-with-typescript)

```sh
# Necessário para o eslint dar suporte ao typescript e ao standardjs
npm install -D \
  eslint@^7.12.1 \
  eslint-plugin-promise@^5.0.0 \
  eslint-plugin-import@^2.22.1 \
  eslint-plugin-node@^11.1.0 \
  @typescript-eslint/eslint-plugin@^4.0.1 \
  eslint-config-standard-with-typescript@latest
```

## Vamos utilizar o husky e o lint-staged para o gerenciamento de commits

```sh
npm install -D husky # gerenciador de hooks que executam comandos durante o processo de commits
npm install -D lint-staged # nos ajuda a executar comandos somente em arquivos da staged area do proximo commit
```

#### Configurando o husky e o lint-staged para executar no pre-commit

```sh
npm set-script prepare "husky install"
npm run prepare
npx husky add .husky/pre-commit "npx lint-staged"
```

## Configurando o Jest para executarmos os testes no projeto

### Instalando o Jest

```sh
npm install -D jest@27.0.0 # adicionando o jest, nossa bibliteca de testes
npm install -D ts-jest # adicionando o ts-jest para compilar os testes do jest em typescript para o javascript
npm install -D @types/jest # adicionando o @types/jest para a tipagem do jest para o typescript
```

### Configuranto o Jest

```sh
npx jest --init # criando o arquivo de configuração do jest
```

- Escolha as seguites opções:

  - Running test script in package.json: [ yes ]
  - Typesscript for the configuration file: [ yes ]
  - Choose the environment for testing : [ node ]
  - Jest to add coverage to the report: [ yes ]
  - Instrument code for code coverage: [ v8 ]
  - Automatically clear mock between every test: [ no ]

