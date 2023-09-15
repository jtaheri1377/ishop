export class ProductAd {
  constructor(public img: string, public id: number) { }
}

export class SliderAd {
  constructor(public img: string, public id: number, public pId: string) { }
}

export class CategoryAd {
  constructor(public id: string, public img: string, public name: string) { }
}


export class SliderItem {
  constructor(
    public id: string,
    public img: string,
    public name: string,
    public price: string,
    public pId: string,
    public amount: number,
    public commentCount?: number,
    public stars?: number,
    public other_price?: string,
    public off?: string,
    public categoryId?: string
  ) { }
}

export class Slider_H_Item {
  constructor(
    public id: string,
    public profile_img: string,
    public images: string[],
    public place: string,
    public pId: string,
    public store: string,
    public name: string,
    public price: string,
    public commentCount?: number,
    public stars?: number,
    public other_price?: string,
    public off?: string
  ) { }
}
