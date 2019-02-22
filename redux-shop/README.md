1. Struktura danych przechowywanych w aplikacji została znormalizowana.
  ShopState został rozdzielony na dwa mniejsze - ProductsState, CategoriesState
2. Zaimplementuj normalizację danych ładowanych z pliku json w reducerach:
  - `src/modules/products/reducer`
  - `src/modules/categories/reducer`
3. Zaimplementuj selectory w nowej strukturze danych
  - `src/modules/products/selectors`
  - `src/modules/categories/selectors`
  - `src/modules/cart/selectors`
4. Jeszcze raz zaimplementuj logikę reducera związaną z dodawaniem produktów do koszyka w nowej strukturze (testy zostały zaktualizowane)