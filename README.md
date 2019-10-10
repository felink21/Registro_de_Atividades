# Registro de Atividades Incodde

Siga os passos abaixo para rodar a aplicação
### Antes de tudo:
- Criar localmente um arquivo .env onde tem o arquivo modelo Backend/env_file, e insira um código qualquer dentro dele em 'authSecret'
- Alterar seu localhost no arquivo \Frontend\projeto\src\services\api.js
## Instruções


1. Banco de Dados

- Pode instalar o Mysql
- Pode também logar no mysql pelo terminal (senha: 12345)

```bash
mysql u- felipemysql -p
show databases;
use felipemysql;
```

2. Backend (Server)

- Abrir o arquivo /Backend em sua IDE Node.js
- É possível testar com o Postman
- Use os comandos a seguir:

```bash
npm i
npm start
```
Deve ser possível ver "Backend executing..." no prompt

3. Frontend (Client)

- Abrir o Genymotion
- Iniciar uma emulação android
- Abrir o arquivo /Frontend/projeto em sua IDE React-Native
- Use os comandos a seguir:

```bash
npm i
npm start
```
Pode também usar:
```bash
react-native run-android
```

## Observações

- Caso queira dar acesso aos GETs e POSTs do Backend apenas à quem estiver logado, descomentar tudo no arquivo de Bakcend/config/routes.js
- Caso os migrations do Banco de Dados não apareçam, pode usar o comando:

```python
knex migrate:latest
```
### Bugs no Backend
- Sem bugs aparentes

### Bugs no Frontend
- Cadastro de atividades não implementado, pois não consegui pegar o id de quem logou para considerá-lo dono da atividade.
- Bug ao logar, voltar e tentar logar com email ou senha errados, ele ainda deixa logar pois só considera como critério o token gerado pelo login
- As atividades mostradas assim que se loga são estáticas e pertencem ao usuário com id = 1. Pois, como dito antes, não consegui pegar o id de quem logou para mostrar somente as atividades dele
