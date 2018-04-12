# oerworldmap-static
Static content, such as pages and images, for https://oerworldmap.org

Start Jekyll via Docker:
```
$ docker-compose up
```

For local development (oerworldmap-ui)[https://github.com/hbz/oerworldmap-ui] needs to run on oerworldmap.local to provide `styles.css`. Launch it in static mode:

```
$ npm run server:static
```

If changes are made to the css, dump them before commiting to master:
```
$ sh dump-css-from-ui.sh
```
... and update the css filename to the timestamp of the new dump in the page templates!.
