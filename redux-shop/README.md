1. Został dodany nowy middleware `redux-thunk` zapoznaj się w jaki sposób poprzez zmiany w pliku `src/store`
2. Został dodany nowy typ `Dispatch`, który będzie wykorzystywany w kodzie w pliku `src/modules/types`
3. komponent App został przeniesiony do `src/components/App` i zamiast niego jest opakowaywany przez kontener w `src/containers/AppContainer`. `App` teraz ładuje produkty i wyświetla wiadomość kiedy nie udało się ich załadować
4. Zaimplmentuj asynchroniczną akcję ładowania produktów i zapisywania ich w stanie:
- `src/modules/products/actions.js`
- `src/modules/products/constants.js`
- `src/modules/products/reducer.js`
- `src/modules/categories/reducer.js`

Nie zapomnij dodać obsługi wyciągania kategorii z produktów po załadowaniu.

W przypadku typów akcji wywoływanych przez thunki można stosować konwencję `XXX_STARTED`, `XXX_SUCCESS`, `XXX_FAILURE` (np. `LOAD_PRODUCTS_STARTED`)