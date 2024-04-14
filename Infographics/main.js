function showContent(index) {
    var contentDiv = document.getElementById("content");
    switch(index) {
        case 1:
            contentDiv.innerHTML = `
                <h2> Základy HTML </h2>
                <p> Základy HTML tvoří fundament webového vývoje. HTML (HyperText Markup Language) je základní stavební kámen webových stránek. 
                Pomocí HTML můžete vytvářet obsah, strukturovat informace a definovat vztahy mezi jednotlivými částmi. 
                Základními prvky HTML jsou tagy, které definují různé části dokumentu, jako jsou nadpisy, odstavce, odkazy a obrázky.
                Další důležitou součástí jsou atributy, které poskytují dodatečné informace o prvcích. 
                Správné používání HTML je klíčové pro vytváření přístupných, dobře strukturovaných a optimalizovaných webových stránek.
                </p>
                <h2> Důležité základy </h2>
                <ul> 
                <li> Základní struktura HTML jako je deklarace typu dokumentu, kořenový element, hlavička pro meta informace a hlavní obsah stránky </li>
                <li> Znalost základních HTML značek jako jsou nadpisy h1 - h6, odstavce, značky pro odkazy, značky pro vkládání multimediálního obsahu </li>
                <li> Znalost struktury a hierarchie - správné vnořování prvků, rozlišení block-level a inline elementů </li>
                <li> Základní HTML atributy - id, class - atributy pro identifikaci prvků nebo značky src, href a alt pro odkazy na zdroje a alternativní popis </li>
                <li> Kompatibilita a validace - validní HTML zajištuje správné zobrazení a chování na různých prohlížečích </li>
                </ul>
            `;
            break;
        case 2:
            contentDiv.innerHTML = `
                <h2> Formuláře a vstupní prvky </h2>
                <p> 
                Formuláře umožňují uživatelům zadávat a odesílat data, jako jsou textová pole, zaškrtávací políčka, rozbalovací seznamy a tlačítka. 
                HTML nabízí širokou škálu vstupních prvků, které lze použít k vytvoření různých typů formulářů, od jednoduchých kontaktních formulářů až po složité registrační formuláře. 
                Správné používání formulářů a vstupních prvků je klíčové pro zajištění přívětivého uživatelského rozhraní a efektivní interakce s uživateli.
                </p>
                <h2> Příklady vstupních prvků </h2>
                <ul> 
                <li> Vytváření formulářů - značka form </li>
                <li> Textová pole - značka input type="text" - vytvoření jednořádkového pole pro zadání textu </li>
                <li> Heslová pole - input type="password" - vytvoření pole pro heslo kde se zadaný text zobrazí jako hvězdičky </li>
                <li> Tlačítka submit nebo reset - vytvoří tlačítko pro odeslání formuláře (submit) nebo pro resetování formuláře na původní hodnoty (reset)</li>
                </ul>
            `;
            break;
        case 3:
            contentDiv.innerHTML = `
                <h2> Semantika a SEO </h2>
                <p>
                Semantika v HTML se zabývá správným používáním značek a atributů k označení významu jednotlivých prvků na stránce. 
                Používání semanticky správných značek jako  header, nav, article a footer pomáhá vyhledávačům lépe porozumět obsahu stránky a zlepšuje celkovou přístupnost a SEO. </br>
                SEO (Search Engine Optimization) se zaměřuje na optimalizaci webových stránek pro vyhledávače, což zahrnuje používání relevantních klíčových slov ve značkách, nadpisech a obsahu, vytváření strukturovaných dat pomocí mikrodat a zajištění, aby stránky byly rychlé a snadno indexovatelné vyhledávači. 
                Správné používání semantiky a SEO může výrazně zlepšit viditelnost a dostupnost vašich webových stránek ve vyhledávačích.
                </p>
                <h2> Dobré praktiky </h2>
                <ul> 
                <li> Používání klíčových slov pro lepší indexaci stránky vyhledávači </li>
                <li> Vytvoření strukturovaných dat </li>
                <li> Používání nadpisu h1 a h2 pro hierarchické organizování obsahu </li>
                <li> Minimalizace HTTP požadavků, optimalizace obrázků a stylů </li>
                </ul>
                
                
            `;
            break;
        case 4:
            contentDiv.innerHTML = `
                <h2> CSS a HTML </h2>
                <p> CSS (Cascading Style Sheets) je jazyk určený k definování vzhledu webových stránek napsaných v HTML. 
                CSS umožňuje oddělit obsah stránky od jejího vizuálního designu, což zjednodušuje úpravy a údržbu. 
                Pomocí CSS můžete nastavovat barvy, velikosti písma, rozložení, pozadí a další vlastnosti elementů na stránce. 
                Propojení CSS s HTML umožňuje vytvářet esteticky přitažlivé a dobře uspořádané webové stránky, které jsou přizpůsobitelné různým zařízením a obrazovkám.
                </p>
                <h2> Příklady některých vlastností </h2>
                <ul> 
                <li> color - nastavení barvy textu </li>
                <li> font-family / font-size - nastavení fontu pro text a velikosti písma </li>
                <li> background-color - nastavení barvy pozadí </li>
                <li> margin - určení vnějšího okraje prvku </li>
                <li> padding - určení vnitřního okraje prvku </li>
                <li> display - určení zobrazení prvku například block, flex, grid.. </li>
                <li> position - určení typu umístění prvku na stránce </li>
                </ul>
            `;
            break;
        case 5:
            contentDiv.innerHTML = `
                <h2> Pokročilé techniky a trendy </h2>
                <p> Pokročilé techniky a trendy v HTML otevírají cestu k vytváření moderních a interaktivních webových stránek. 
                Mezi ně patří technologie jako flexbox a grid layout, které umožňují snadné a efektivní uspořádání prvků na stránce. 
                Responzivní design se stal standardem, a proto je důležité porozumět technikám, jak vytvářet webové stránky, které se přizpůsobují různým zařízením a velikostem obrazovek. 
                HTML5 nabízí nové prvky jako video a audio, které umožňují snadné vkládání multimediálního obsahu. 
                Dalším trendem je zvyšování důrazu na přístupnost a SEO optimalizaci, které jsou klíčové pro dosažení úspěchu online. 
                S pokročilými technikami a trendy je možné vytvářet atraktivní, funkční a konkurenceschopné webové stránky, které odpovídají nejnovějším požadavkům a očekáváním uživatelů.
                </p>
                <h2> Příklady technik a trendů </h2>
                <ul> 
                <li> Flexbox a Grid Layout - moderní metody uspořádání prvků na stránkách </li>
                <li> Responzivita - trend, který se zaměřuje na přizpůsobení různým zařízením a velikostem obrazovek </li>
                <li> Multimediální obsah - vložení fotek, videí nebo audia přímo na stránku </li>
                <li> Přístupnost - zvýšený důraz na použitelnost stránek pro všechny typy uživatelů </li>
                <li> SEO / Optimalizace - zlepšení viditelnosti webových stránek ve vyhledávačích </li>
                </ul>
            `;
            break;
        default:
            contentDiv.innerHTML = `
                <h2> Vítejte! </h2>
                <p> Vyberte téma z navigace výše pro zobrazení obsahu. </p>
            `;
    }
}