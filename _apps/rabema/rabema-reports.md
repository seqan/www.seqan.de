---
layout: page
title: Rabema Reports
permalink: apps/rabema/rabema-reports/
---

This page gives some examples for interpretations of Rabema reports. The read mapper result used as the input for all
of these reports is the same as on the “Getting Started” section of the Rabema main page.

## Report for Category “all”

The following report was generated in “all” mode. It is the same as on the “Getting Started” section of the Rabema main
page.
```
Intervals to find:              10839
Intervals found:                10839
Intervals found [%]             100
Invalid alignments:             312
Additional Hits:                0

Number of reads:                8840
Number of reads with intervals: 7723

Mapped reads:                   7723
Mapped reads [% of total]:      87.3643
Mapped reads [% of mappable]:   100

Normalized intervals found:     7723
Normalized intervals found [%]: 100

Found Intervals By Error Rate

  ERR       #max      #found      %found    norm max    norm found  norm found [%]
------------------------------------------------------------------------------------
    0       2780        2780      100.00     2095.80       2095.80      100.00
    1       4221        4221      100.00     3083.12       3083.12      100.00
    2       2721        2721      100.00     1849.09       1849.09      100.00
    3       1117        1117      100.00      694.99        694.99      100.00
```
In total, there were 10,839 intervals with up to 3% errors to be found and RazerS found all of them (the reads are very
long so there is fewer room for ambiguity). The number of invalid alignments is 312. These alignments are caused by the
defaults setting for allowed error rate of RazerS 3 being 8%. The term “incorrect” is fixed to the given error rate in
the benchmark. If we passed an error rate of 8% to the evaluation then there would be no invalid alignments. The number
of additional hits is 0. This is the number of hits in the read mapper output with a valid error rate (below 3% in this
case) that are not found in the gold standard. If this number is greater than zero then an error occured while building
the gold standard or in the evaluation program. If you get such a number then please contact the Rabema authors.
The total number of reads is 8,840, the number of reads having an alignment with less than or equal to 3% error is 7,723
which also is the largest number of “normalized intervals” to be found. Each read contributes at most one point to the
“normalized intervals score” achieved by a read mapper. Each interval for a read contributes 1/x points where x is the
number of alignments for the read. A total of 7,723 reads could be mapped, which is 100% of all mappable reads and 87.4%
of all reads.
The table below gives a further breakdown of the found intervals and normalized found intervals by error rate of the
alignment. The data is broken down by error rate of the given alignment. For example, there were 2,780 of 2,780
intervals found with error rate 0, which amounts to 100% of such reads. There were 2,095.8 normalized such intervals
of which all were found.

## Report for Category “any-best”

The following report was generated for the same data set in “any-best” mode. The maximal error rate was set to 3%.
```
Intervals to find:              7723
Intervals found:                7723
Intervals found [%]             100
Invalid alignments:             4408
Additional Hits:                0

Number of reads:                8840
Number of reads with intervals: 7723

Mapped reads:                   7723
Mapped reads [% of total]:      87.3643
Mapped reads [% of mappable]:   100

Normalized intervals found:     7723
Normalized intervals found [%]: 100

Found Intervals By Error Rate

  ERR       #max      #found      %found    norm max    norm found  norm found [%]
------------------------------------------------------------------------------------------------------
    0       2155        2155      100.00     2155.00       2155.00      100.00
    1       3092        3092      100.00     3092.00       3092.00      100.00
    2       1808        1808      100.00     1808.00       1808.00      100.00
    3        668         668      100.00      668.00        668.00      100.00
```
Note that the number of invalid alignments is higher than in category “all” above and equal to category “all-best”
below. The reason for this is that in “*-best” mode, we ignore the reads with an error rate higher than for the best
match of the read.
The gold standard contained 9,207 intervals that had the best distance for each read. All are hit by the alignments in
the SAM file. The statistics on the number of reads and reads with intervals is the same as in the “all” mode described
above.
The table shows a breakdown of the found and missed intervals by the error rate of the best distance for the read. There
were 2,155 (3,092/1,808/668) best intervals with an error rate of 0% (1/2/3%). Of these, all were found. The columns
starting with “norm” show the intervals, normalized by the number of intervals for each read.

## Report for Category “all-best”
```
Intervals to find:              9207
Intervals found:                9207
Intervals found [%]             100
Invalid alignments:             4408
Additional Hits:                0

Number of reads:                8840
Number of reads with intervals: 7723

Mapped reads:                   7723
Mapped reads [% of total]:      87.3643
Mapped reads [% of mappable]:   100

Normalized intervals found:     7723
Normalized intervals found [%]: 100

Found Intervals By Error Rate

  ERR       #max      #found      %found    norm max    norm found  norm found [%]
------------------------------------------------------------------------------------------------------
    0       2780        2780      100.00     2155.00       2155.00      100.00
    1       3671        3671      100.00     3092.00       3092.00      100.00
    2       1988        1988      100.00     1808.00       1808.00      100.00
    3        768         768      100.00      668.00        668.00      100.00
```
Note that the number of invalid alignments is higher than in category “all” and equal to category “any-best”. The reason
for this is that in “*-best” mode, we ignore the reads with an error rate higher than for the best match of the read.
The numbers here are similar to the ones in “any-best” mode. However, since only one interval has to be found for each
read, the number of intervals to be found is equal to the number of normalized intervals.
Report for Oracle Mode
The reports in Oracle mode are the same as in any-best mode. However, only the original interval is considered for each
read and the interval is labeled with the actual distance at this location, independently of any given error rate on the
command line.
