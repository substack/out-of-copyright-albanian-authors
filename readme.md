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

``` csv
Ismail Strazimiri,1943
Ndre Mjeda,1937
Isa Boletini,1913
Naim Frashëri,1900
Ali Pashë Gucia,1885
Pashko Vasa,1872
Sulejman Vokshi,1890
Jeronim de Rada,1903
Hasan Tahsini,1881
Naum Veqilharxhi,1846
Ali Pashë Tepelena,1822
Pjetër Bogdani,1689
Marin Barleti,1512
Ali Kelmendi,1939
Asim Vokshi,1937
Migjeni,1926
Shote Galica,1927
Azem Galica,1924
Faik Konica,1942
Dhimitër Shuteriqi,1800
Filip Shiroka,1935
Pal Engjëlli,1470
Mehmet Ali Pasha,1849
Ismet Toto,1937
Kristo Frashëri,1941
Stathi Melani,1917
Carl Ritter von Ghega,1860
Mati Logoreci,1941
Hasan Aliu,1891
Kolë Idromeno,1939
Zef Skiroi,1927
Halit Vokrri,1880
Risto Siliqi,1936
Prenk Doçi,1917
Xhemail Koniqani,1944
Idriz Guri,1937
Qamil Bala,1933
Ferat Draga,1921
Petro Poga,1944
Kastriot Dervishi,1944
Jaho Mato,1923
Thimi Mitko,1890
Visar Dodani,1939
Ismail Ndroqi,1944
Pandeli Cale,1923
Nikollë Filja,1769
Esat Berisha,1944
Nikolla Jorga,1940
Kadri Bajri,1913
Josif Bageri,1916
Nikollë Kaçorri,1917
Babë Dudë Karbunara,1917
Dhimitër Zografi,1945
Daut Boriçi,1844
Bardhosh Gaçe,1912
Dhimitër Tutulani,1937
Salih Gjuka,1925
Qazim Kokoshi,1945
Abaz Çelkupa,1926
Xhelal Deliallisi,1941
Elmaz Boçe,1925
Zyhdi Ohri,1931
Xhelal Koprencka,1919
Dhimitër Mborja,1945
Haxhi Vehbi Agolli,1937
Bahri Omari,1945
Abdullah Krashnica Presheva,1945
Myrteza Aliu,1937
Safet Butka,1943
Martin Gjoka,1940
Nebi Sefa,1942
Ymer Deliallisi,1944
Ibrahim Deva,1938
Xhemal Deliallisi,1941
Llazar Fundo,1944
Gjergj Junki,1787
Rexhep Krasniqi,1908
Enis Sulstarova,1939
Abdi bej Toptani,1942
Myfid bej Libohova,1927
Murad bej Toptani,1918
Jani Kasneci,1814
Siko Naqe,1944
Jani Kosta,1944
Faslli Zoga,1944
Lito Godo,1943
Veli Gerraj,1944
Syrja bej Vlora,1940
Jakup Ferri (luftëtar),1880
Mehmet Sejko,1935
Sheh Ahmet Pazari,1931
Mihal Turtulli,1936
Kostandin Shpataraku,1767
Kostandin dhe Athanas Zografi,1783
Urani Rumbo,1936
Nikollë Mekajshi,1615
Konstantin Xhehani,1800
Lazër Lumezi,1941
Xhemail Abria,1908
Grigor Voskopojari,1772
```

# license

public domain
