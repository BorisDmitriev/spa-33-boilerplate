# `01` Hallo JSX

JSX erlaubt es dir einfach JavaScript-Variablen in dein HTML einzufügen.

-   Deklariere die Variablen `name` und `age` in der `src/index.js`.
-   Setze den Variablen-Wert wie du möchtest, z.B.:
    ```js
    const age = DEIN ALTER;
    const name = DEIN NAME;
    ```
-   Erstelle eine weitere Variable `output`, die später die Werte von `age` und `name` dynamisch in deinen *HTML*-Code einfügen soll. Z.B.:
    ```jsx
    const output = <span>Mein Name ist {name} und ich bin {age} Jahre alt.</span>
    ```
    __Beachte die Schreibweise mit geschweiften Klammern (curly brackets) `{` und `}` um die Variablen.__
    
-   Render (Male/Zeichne/Erzeuge/Stelle dar) deinen Script-Quellcode mit Hilfe von `ReactDOM.render`, z.B.:
    ```jsx
    // benutze react-dom um neue Elemente im DOM einzufügen
    import ReactDOM from 'react-dom';
    // 1. Parameter = WAS soll hinzugefügt werden, 2. Parameter = WO soll es hinzugefügt werden
    ReactDOM.render(output, document.querySelector('#myDiv'));
    ```

Die fertige HTML-Webseite wird dann so aussehen:
```html
<div id="myDiv">
    <span>Mein Name ist James und ich bin 24 Jahre alt.</span>
</div>
```

Wir sind jetzt also in der Lage HTML und JS zu mixen und gleichzeitig in einer Datei zu verwenden. Ohne Aneinanderkettung (concatenate), oder Stringverarbeitung! Echt toll, oder? :smiley:
