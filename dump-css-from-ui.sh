# Dumps normalize.css and ui-repos project styles into timestamped local css file, to be commited and used,
# where the styles generated by ui-repo are not localy available.

path=assets/css/styles-`date +%Y-%m-%d-%H-%M-%S`.css

curl -sS https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css > $path
curl -sS http://oerworldmap.local/assets/styles.css | sed -n -e '/begin-of-project-styles/,$p' >> $path

echo $path created
