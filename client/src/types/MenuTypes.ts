export type TMenuData = TCategory[];

export type TCategory = {
  categoryName: string,
  subcategories: {
    subCategoryName: string,
    items: TMenuItem[],
  }[],
};

export type TMenuItem = {
  id: number,
  name: string,
  category: string,
  subCategory: string,
  description: string,
  photoUrl: string,
  price: number,
  unit: string,
  scale: number,
  isScaled: boolean,
  cost: number,
}

export type TMenuItemCreate = {
  name: string,
  description: string,
  photoUrl: string,
  category: string,
  subCategory: string,
  price: number,
  unit: string,
  scale: number,
  isScaled: boolean,
}

export type TScaleBaseResponse = {
  base: number,
}
