export class Comment {
  constructor(
    public id: number,
    public date: string,
    public userName: string,
    public rating: number,
    public text: string,
    public like: number,
    public dislike: number,
    public img?: string
  ) { }
}
