export type TMenuData = TCategory[];

export type TCategory = {
  categoryName: string,
  subcategories: {
    subCategoryName: string,
    items: TMenuItem[],
  }[],
};

export type TMenuItem = {
  name: string,
  description: string,
  photoUrl: string,
  price: number,
  unit: string,
  scale: number,
  isScaled: number,
  cost: number,
}
