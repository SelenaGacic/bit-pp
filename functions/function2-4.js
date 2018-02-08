function brojPonavljanjaSlova(rec, trazenoSlovo) {

    var brojPonavljanja = 0;
    var duzinaReci = rec.length;
    for (var pozicijaSlova = 0; pozicijaSlova < duzinaReci;pozicijaSlova++) {

        var trenutnoSlovoIzReci = rec[pozicijaSlova];
        if (trenutnoSlovoIzReci === trazenoSlovo) {

            brojPonavljanja ++;

        }

    }
    return brojPonavljanja;
}

console.log(brojPonavljanjaSlova('mama mama m', 'm'));

