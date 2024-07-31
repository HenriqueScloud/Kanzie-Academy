export class AppErrors extends Error {
  statusCode: number;
  constructor(status: number, massege: string) {
    super(massege);
    this.statusCode = status;
  }
}
