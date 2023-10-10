# Jellyfin End-To-End (E2E) Test Suite

## TODO

* [ ] Add template/script for adding new apps
* [ ] Add linting
* [ ] Add CI for running all app tests
* [ ] Don't use demo server for tests

## Running a test suite

```sh
npm run wdio:jellyfin-web
```

## Adding a new app

1. Initialize a new workspace.

   ```sh
   npm init -w apps/$APP_NAME
   ```

2. Initialize a new Webdriver.IO project in the workspace.

   ```sh
   npm init -w apps/$APP_NAME wdio
   ```
