# Next.js project base template

## Development environment

- IDE : [Vscode](https://code.visualstudio.com/)
  - [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
    - 💡 If you need format with keyboard shortcuts (Shift + Alt + F), add below config to VSCode's `keybindings.json`.
      ```javascript
      [
          {
              "key": "alt+shift+f",
              "command": "stylelint.executeAutofix",
              "when": "editorTextFocus && editorLangId == 'css'"
          },
          {
              "key": "alt+shift+f",
              "command": "stylelint.executeAutofix",
              "when": "editorTextFocus && editorLangId == 'scss'"
          },
          {
              "key": "alt+shift+f",
              "command": "stylelint.executeAutofix",
              "when": "editorTextFocus && editorLangId == 'less'"
          }
      ]
      ```
  - [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Vscode settings](.vscode\settings.json)
- Package Manager : [Yarn](https://yarnpkg.com/)

## Linter tools

- [ESLint](https://eslint.org/)
  - [Airbnb](https://github.com/airbnb/javascript)
  - [Next lint](https://nextjs.org/docs/basic-features/eslint)
- [Stylelint](https://stylelint.io/)
  - [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
  - [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss#readme)
- [lint-staged](https://github.com/okonet/lint-staged)
- [husky](https://typicode.github.io/husky/#/?id=features)

## Folder structure

```
- components
    | - Card
        | - index.module.scss
        | - CardHeader.js
        | - index.js
    | - HiComponent.js
    | - index.js
- pages
    | - api
        | - news.js
        | - users
            | - [id].js
            | - index.js
    | - news.js
    | - users/
        - | [id].js
        - | index.js
    | - index.js
- utils
    | - yourUtil.js
    | - index.js
- hooks
    | - yourHook.js
    | - index.js
```

## Versioning

- **Follow [Semantic Versioning](https://semver.org/).**
- Use [yarn version](https://classic.yarnpkg.com/en/docs/cli/version) to update the version of project via the command line e.g.,<br/>( 💡 Only the master branch is required. )
  - ```
    yarn version
    ```
  - ```
    yarn version --major
    ```
  - ```
    yarn version --minor
    ```
  - ```
    yarn version --patch
    ```

## GitHub / GitLab

- Branch `main` or `master` is the main branch, all updates need to be tagged with a [version](#versioning).
- Repositories and branches naming rules follow [Kebab case](https://en.wiktionary.org/wiki/kebab_case) e.g., `an-awesome-project`, `some-branch`.
- Commit, follow [How to Write a Git Commit Message](https://cbea.ms/git-commit/) in general.
  > 1. Separate subject from body with a blank line.
  > 2. Limit the subject line to 50 characters.
  > 3. Capitalize the subject line.
  > 4. Do not end the subject line with a period.
  > 5. Use the imperative mood in the subject line.
  > 6. Wrap the body at 72 characters.
  > 7. Use the body to explain what and why vs. how.
  >    <br/>--- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
