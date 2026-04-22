# Hello world JavaScript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `greeting`

The greeting text.

## Example usage

```yaml
uses: gh-actions-training-org-thanh/hello-world-javascript-action@v1
with:
  who-to-greet: My friend
```
