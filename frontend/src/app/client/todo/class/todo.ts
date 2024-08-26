export class Todo {
  state: boolean = false
  private _name: string = ""
  readonlyFlag: boolean = true

  public get name(): string {
    return this._name
  }

  public set name(n: string) {
    if(n == "") {
      return
    }
    this._name = n
    this.readonlyFlag = true
  }

  constructor(name: string) {
    this._name = name
  }
}
