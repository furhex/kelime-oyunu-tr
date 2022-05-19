#### Kelime oyunu yapmanızı kolaylaştıran bir modül. Discord botu vb alanlarda kullanabilirsiniz.
## Kurulum
```sh
npm i kelime-oyunu-tr
```
## Kullanım
```js
const kotr = require("kelime-oyunu-tr")
kotr("yem")
.then((veri)=>{
    console.log(veri)
}) 
```
### Örnek -1
```js
const kotr = require("kelime-oyunu-tr")
kotr("yağ")
.then((veri)=>{
    console.log(veri)
}) 
```
![N|Solid](https://github.com/furhex/kelime-oyunu-tr/blob/main/images/yag.png?raw=true)
### Örnek -2
```js
const kotr = require("kelime-oyunu-tr")
kotr("yağ")
.then((veri)=>{
    console.log(veri)
}) 
```
![N|Solid](https://github.com/furhex/kelime-oyunu-tr/blob/main/images/kelam.png?raw=true)
### Örnek -3
```js
const kotr = require("./index")
kotr("asdkdhjdsahjlksk")
.then((veri)=>{
    console.log(veri)
}) 
```
![N|Solid](https://github.com/furhex/kelime-oyunu-tr/blob/main/images/random.png?raw=true)
