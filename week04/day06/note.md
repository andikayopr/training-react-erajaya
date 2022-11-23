// kalo level component -> diusahan minimalisir stateless 

Hati hati olah object array dan object pada javascript
object belum tentu sama dengan object. tergatung wadahnya
{} === {} hasilnya false


Use Effect => high order function
Terima function dari function lain

use effect dijalankan ketika render ulang atau ketika di return
use effect terima 2 parameter (function, array)
dimana parameter array jika kosong maka hanya sekali

use memo langsung dijalankan tanpa perlu function di invoke / ()
use memo = return hasil function
use callback = return functionnya jadi perlu di invoke / ()
use callback bagus untuk fetching karena ga create function terus. jadi tinggal panggil function yang ada dimemoize
use callback bagus dicombine dengan use effect jadi ketika ada komponen di render ulang dan supaya ga create function berulang