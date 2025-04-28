# Enigma Virtualbox Action

[![GitHub Super-Linter](https://github.com/insco-inc/enigma-virtualbox-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/insco-inc/enigma-virtualbox-action/actions/workflows/ci.yml/badge.svg)
[![Check dist/](https://github.com/insco-inc/enigma-virtualbox-action/actions/workflows/check-dist.yml/badge.svg)](https://github.com/insco-inc/enigma-virtualbox-action/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/insco-inc/enigma-virtualbox-action/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/insco-inc/enigma-virtualbox-action/actions/workflows/codeql-analysis.yml)
[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)

## Usage

```yaml
steps:
  - name: Checkout
    id: checkout
    uses: actions/checkout@v4

  - name: Test Local Action
    id: test-action
    uses: insco-inc/enigma-virtualbox-action@v1 # Commit with the `v1` tag
    with:
      milliseconds: 1000

  - name: Print Output
    id: output
    run: echo "${{ steps.test-action.outputs.time }}"
```

## Tests

```yaml
steps:
  - name: Checkout
    id: checkout
    uses: actions/checkout@v4

  - name: Test Local Action
    id: test-action
    uses: ./
    with:
      milliseconds: 1000

  - name: Print Output
    id: output
    run: echo "${{ steps.test-action.outputs.time }}"
```

## License

[MIT](./LICENSE)
