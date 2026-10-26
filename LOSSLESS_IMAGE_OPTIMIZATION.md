# Lossless image optimization report

Only smaller images with identical decoded pixel data, color mode, dimensions and preserved image metadata were applied.
All original files remain available in branch `backup/images-before-optimization-20261026` and in Git history.

- Images evaluated: **85**
- Images optimized: **43**
- Total reduction: **4,122,822 bytes**

| Image | Original bytes | Optimized bytes | Savings |
|---|---:|---:|---:|
| `assets/jmsdesign-social-preview-1200x630.png` | 606,796 | 570,364 | 36,432 |
| `assets/signature/jms-logo-dark-email.png` | 4,176 | 3,452 | 724 |
| `assets/signature/jms-logo-dark.png` | 4,176 | 3,452 | 724 |
| `assets/signature/jms-logo-light-email.png` | 5,951 | 4,522 | 1,429 |
| `assets/signature/jms-logo-light.png` | 5,951 | 4,522 | 1,429 |
| `assets/work/archive/alt/bayer-ayango.jpg` | 411,965 | 403,547 | 8,418 |
| `assets/work/archive/alt/bmw-premium-selection.jpg` | 498,723 | 491,732 | 6,991 |
| `assets/work/archive/alt/wella-koleston.jpg` | 482,242 | 472,969 | 9,273 |
| `assets/work/archive/bayer-ayango_v1.jpg` | 417,648 | 409,059 | 8,589 |
| `assets/work/archive/bayer-ayango_v2.jpg` | 417,648 | 409,059 | 8,589 |
| `assets/work/archive/bmw-premium-selection_v1.jpg` | 635,534 | 616,694 | 18,840 |
| `assets/work/archive/miele-professional_v1.jpg` | 288,540 | 283,181 | 5,359 |
| `assets/work/archive/wella-koleston_v1.jpg` | 482,262 | 472,989 | 9,273 |
| `assets/work/audi/amc-2024.jpg` | 1,001,586 | 988,504 | 13,082 |
| `assets/work/audi/finance-overview.jpg` | 1,696,776 | 1,523,646 | 173,130 |
| `assets/work/audi/overview.jpg` | 677,752 | 627,408 | 50,344 |
| `assets/work/audi/q6-infographic.png` | 1,146,046 | 1,118,643 | 27,403 |
| `assets/work/audi.jpg` | 362,745 | 339,272 | 23,473 |
| `assets/work/cap-anamur/campaign-series.jpg` | 2,442,741 | 2,402,660 | 40,081 |
| `assets/work/cap-anamur/chancen-spenden.jpg` | 565,879 | 558,410 | 7,469 |
| `assets/work/cap-anamur/freude-spenden.jpg` | 636,764 | 629,165 | 7,599 |
| `assets/work/cap-anamur/hoffnung-spenden.jpg` | 8,347,968 | 8,250,253 | 97,715 |
| `assets/work/cap-anamur/leben-spenden.jpg` | 616,342 | 606,127 | 10,215 |
| `assets/work/cap-anamur/zukunft-spenden.jpg` | 508,393 | 502,646 | 5,747 |
| `assets/work/lanxess/car.jpg` | 4,190,135 | 4,012,254 | 177,881 |
| `assets/work/lanxess/city.jpg` | 4,696,479 | 4,476,879 | 219,600 |
| `assets/work/lanxess/davos.jpg` | 1,158,790 | 1,128,276 | 30,514 |
| `assets/work/lanxess/green-mobility-train.jpg` | 468,903 | 450,201 | 18,702 |
| `assets/work/lanxess/green-mobility-winter-sportscar.jpg` | 515,702 | 496,541 | 19,161 |
| `assets/work/lanxess/overview.jpg` | 1,249,801 | 1,221,957 | 27,844 |
| `assets/work/lanxess/train.jpg` | 1,874,817 | 1,830,733 | 44,084 |
| `assets/work/lanxess-preview.jpg` | 1,598,698 | 1,540,556 | 58,142 |
| `assets/work/metro/box.jpg` | 2,665,363 | 2,590,777 | 74,586 |
| `assets/work/metro/brochure.jpg` | 2,269,810 | 2,220,322 | 49,488 |
| `assets/work/metro/detail.jpg` | 2,542,391 | 2,468,645 | 73,746 |
| `assets/work/metro/horeca-chefs-choice-preview.jpg` | 362,282 | 350,371 | 11,911 |
| `assets/work/metro/open.jpg` | 2,688,982 | 2,606,817 | 82,165 |
| `assets/work/metro-preview.jpg` | 790,415 | 760,451 | 29,964 |
| `assets/work/mini/other-club.jpg` | 5,106,568 | 3,850,777 | 1,255,791 |
| `assets/work/mini/other-flexibility.jpg` | 4,721,019 | 3,415,464 | 1,305,555 |
| `assets/work/mini-home-v2.jpg` | 589,377 | 559,565 | 29,812 |
| `assets/work/qvest/qvest-numbers.png` | 236,794 | 210,813 | 25,981 |
| `assets/work/telekom.jpg` | 394,153 | 378,586 | 15,567 |

## Unmodified because verification failed or the lossless encoder did not support the file
- `assets/work/audi/deliveries-v2.png`: decoded pixels or metadata changed
- `assets/work/audi/doellner-color.png`: decoded pixels or metadata changed
- `assets/work/audi/financial-highlights.png`: decoded pixels or metadata changed
- `assets/work/audi/oled-02.png`: decoded pixels or metadata changed
- `assets/work/audi/oled-04.png`: decoded pixels or metadata changed
- `assets/work/audi/oled-05.png`: decoded pixels or metadata changed
- `assets/work/audi/q6-numbers.png`: decoded pixels or metadata changed
- `assets/work/audi/q6-sustainability-wide.png`: decoded pixels or metadata changed
- `assets/work/audi/rittersberger-color.png`: decoded pixels or metadata changed
- `assets/work/lanxess/green-mobility-sportscar.jpg`: Command '['jpegtran', '-copy', 'all', '-optimize', '-progressive', '-outfile', '/tmp/tmpjb71lxwc.jpg', 'assets/work/lanxess/green-mobility-sportscar.jpg']' retu
- `assets/work/lanxess/green-mobility-suv.jpg`: Command '['jpegtran', '-copy', 'all', '-optimize', '-progressive', '-outfile', '/tmp/tmp886d42n3.jpg', 'assets/work/lanxess/green-mobility-suv.jpg']' returned n
