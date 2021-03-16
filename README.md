# Playground - import-map

A playground to try out the [import-map feature](https://www.chromestatus.com/feature/5315286962012160) in Chrome.

See the Web Platform Incubator Community Group [specification](https://wicg.github.io/import-maps/) for more details.

One of the nice features is the ability to have bare imports (e.g. `import moment from 'momentjs'`) and then map these to their actual path for the browser to import from.

### Running

You can host the `dist/` folder in any web server.

The `package.json` includes a devDependency on `nano-server` and a `start` script to host this on port 3000.

```shell
npm install
npm start
```