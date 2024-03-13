- Разделить ISBN в тестах на валидные и невалидные. Убрать комменты справа.


#

- убедиться, что Dependabot обновляет все пакеты в монорепе
- всё-таки ввести ^ в версии

##

- флажки стран

https://wiki.politika.su/wiki/ISBN_%D0%B7%D0%B0%D0%B4%D0%BD%D0%B8%D0%BC_%D1%87%D0%B8%D1%81%D0%BB%D0%BE%D0%BC

## Проект TUI

Annex F (informative) ISBN in the 10-digit format assigned prior to implementation of the fourth
edition of ISO 2108 (ISO 2108:2005).

--as-10
    Если 979, то НЕЛЬЗЯ. https://www.isbn-international.org/content/changes-united-states-isbn-prefixes
    Если 978, то удаляем 978, пересчитываем контрольную сумму.

--as-13
    Если ISBN-10, то добавляем 978, пересчитываем контрольную сумму.
    

## stdnum.code-workspace

    "editor.fontFamily": "monospace",
    "files.insertFinalNewline": true,
