#!/usr/bin/env node
const axios = require("axios")
let onay;
module.exports = async (kelime) => {
    const query = encodeURI(kelime);
    const veri = await axios.get(`https://sozluk.gov.tr/gts?ara=${query}`)
    const kontrol = kelime.split(" ")
    if (kelime.length > 75) return { onay: "onaylanmadı", sebep: "kelime çok uzun", not: "Dilimizde kullanılmış en uzun kelime 75 harften oluşmaktadır." }
    if (query[0] === ".") return { onay: "onaylanmadı", sebep: "kelime '.' ile başlıyor"}
    if (kontrol.length > 1) return { onay: "onaylanmadı", sebep: "kelime boşluk içeriyor" }
    if (veri.data[0]) {
        const sayı = kelime.length - 1
        if (!veri.data[0].lisan) {
            onay = "onaylandı"
            if (kelime[sayı] === "ğ") {
                return {
                    onay: onay,
                    sonharf: "son harf ğ oyuncu kazandı",
                    win: 1,
                    kelime : kelime,
                    anlam : veri.data[0].anlamlarListe[0].anlam
                }
            } else {
                onay = "onaylandı"
                return {
                    onay: onay,
                    kelime: kelime,
                    anlam : veri.data[0].anlamlarListe[0].anlam
                };
            }
        }
        let newLisan = veri.data[0].lisan.indexOf("Türkçe")
        if (newLisan > -1) {
            onay = "onaylandı"
            if (kelime[sayı] === "ğ") {
                return {
                    onay: onay,
                    sonharf: "son harf ğ oyuncu kazandı",
                    win: 1,
                    kelime: kelime,
                    anlam : veri.data[0].anlamlarListe[0].anlam
                }
            } else {
                onay = "onaylandı lisan türkçe"
                return {
                    onay: onay,
                    kelime: kelime,
                    anlam : veri.data[0].anlamlarListe[0].anlam
                };
            }

        }
        if(newLisan === -1){
            onay = "onaylanmadı"
            return {
                onay: onay,
                kelime: kelime,
                sebep: "Kelimenin kökeni türkçce değil.",
                lisan : veri.data[0].lisan
            }
        }
    }
    if (veri.data.error) {
        onay = "onaylanmadı"
        return {
            onay: onay,
            kelime: kelime,
            sebep: "TDK' da böyle bir kelime yok."
        }

    }
};