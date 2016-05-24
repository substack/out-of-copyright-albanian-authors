# out-of-copyright-albanian-authors

Creative works enter the public domain 70 years after the death of the author.

This script scrapes the Albanian language wikipedia article dump for authors who
have died more than 70 years ago.

# instructions

First, install the pre-requisite dependencies:

```
$ npm install
```

Now download the albanian language article text from wikipedia:

```
$ ./download.sh
```

Next, run the script:

```
$ node parse.js | tee articles.csv
```

# results

From the data dump `sqwiki-20160501-pages-articles-multistream.xml`:

```
```

# license

public domain
