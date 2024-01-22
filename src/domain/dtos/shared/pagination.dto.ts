import { Prisma } from "@prisma/client";
import { BadRequestException } from "@src/domain/exceptions/bad-request.exception";

export class PaginationDto {
  constructor(
    public readonly page: number,
    public readonly limit: number,
    public readonly search: string,
    public readonly column: string,
    public readonly order: string,
    public readonly all = false
  ) {}

  static fromObject(
    payload: { page?: any; limit?: any; search?: string; column?: string; order?: string; all?: boolean } = {
      page: 1,
      limit: 10,
      search: "",
      column: "",
      order: "",
      all: false,
    }
  ): PaginationDto {
    if (payload?.all) return new PaginationDto(1, 0, "", "", "", true);

    payload.page = parseInt(payload.page as string);

    payload.limit = parseInt(payload.limit as string);

    if (payload?.page < 1) throw new BadRequestException("La pagina debe ser mayor a 0");

    if (payload?.limit < 1) throw new BadRequestException("El limite debe ser mayor a 0");

    if (isNaN(payload?.page)) throw new BadRequestException("La pagina debe ser un numero");

    if (isNaN(payload?.limit)) throw new BadRequestException("El limite debe ser un numero");

    return new PaginationDto(payload?.page, payload?.limit, payload?.search, payload?.column, payload?.order, payload?.all);
  }

  get forPrisma() {
    return {
      orderBy: {
        [this.column]: this.order,
      },
      skip: (this.page - 1) * this.limit,
      take: this.limit,
    };
  }
}
