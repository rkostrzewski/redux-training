1. Został dodany nowy middleware `redux-saga` zapoznaj się w jaki sposób poprzez zmiany w pliku `src/store`
2. Ładowanie produktów zostało zmienione i teraz odbywa się przy użyciu sagi, zapoznaj się ze zmianami w plikach `src/store/products/actions` i `src/store/products/saga`
3. Zaimplementuj nową funkcjonalność, która pozwala na przypominanie użytkownikowi na skończenie zakupów.
- Zostałą dodana nowa akcja `Checkout` do pliku `src/store/cart/actions`, która jest wywoływana kiedy użytkownik naciśnie przycisk `Checkout` na stronie koszyka
- Dodaj nową logikę: kiedy użytkownik doda conajmniej trzy różne produkty do koszyka i po 30 sekundach nie naciśnie przycisku Checkout wyświetl notyfikację
- napisz sagę, która realizuje powyższe w pliku `src/store/cart/saga` przy użyciu funkcji `notifyProductsAddedToCartWithoutCheckout` do wyświetlania notyfikacji
- Podpowiedź: możesz użyć `take`, `race`, `delay