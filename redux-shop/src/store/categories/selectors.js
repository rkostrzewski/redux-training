const selectCategoriesState = state => state.categories;

export const selectCategories = (state) => {
  const categories = selectCategoriesState(state)

  return Object.values(categories.byId);
}

export const selectCategoryById = (state, categoryId) => {
  const categories = selectCategoriesState(state)

  return categories.byId[categoryId];
} 