#!/bin/bash
curl https://dumps.wikimedia.org/sqwiki/20160501/sqwiki-20160501-pages-articles-multistream.xml.bz2 |
  bunzip2 > articles.xml
