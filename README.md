A single-page application boilerplate primarly intended for my personal use.
I've made a modest effort to make it approachable for others.

Originally based off of Dan Abramov's [React Transform Boilerplate](https://github.com/gaearon/react-transform-boilerplate).

Basics:
* [React](https://facebook.github.io/react/)
* [React Router](https://github.com/reactjs/react-router)
* [Redux](https://github.com/reactjs/redux)
* [Webpack](https://webpack.github.io/)
* [Express](https://expressjs.com/), eventually to be swapped with [Koa@2](https://github.com/koajs/koa#koa-v2)
* [Karma](https://karma-runner.github.io/1.0/index.html), [Mocha](https://mochajs.org/), [Expect](https://github.com/mjackson/expect)

Built-in development tools:
* [React Hot Module Reloading](https://github.com/gaearon/react-transform-hmr)
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools)

Environment configuration is available through schema-validation JSON files.
If you have no need for this, you can delete the entire `/environment` directory and `/server/environment.js`.

### Development
```
npm start
```

### Production
```
npm run prod
```

### Linting
```
npm run lint
```

### Testing
```
npm run test // Also runs linting
```
