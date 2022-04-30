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

# Criando o projeto e configurando o projeto
    
```sh
npm init -y # criando o projeto
npm install -D git-commit-msg-linter # adicionando o linter para commits semanticos
npm install -D typescript # adicionando o typescript, um poderoso superset do javascript
npm install -D @types/node # adicionando o @types/node para a tipagem do node para o typescript
```

# Vamos utilizar o padrão do standardjs no nosso projeto

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
