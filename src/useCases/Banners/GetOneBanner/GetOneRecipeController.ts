import { type Response, type Request } from 'express'
import { type GetOneBannerUseCase } from './GetOneRecipeUseCase'

export class GetOneBannerController {
  constructor (private readonly getOneBannerUseCase: GetOneBannerUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const bannerId = request.params.id

    try {
      const banner = await this.getOneBannerUseCase.execute({ bannerId })

      return response.status(200).json(banner)
    } catch (error: Error | any) {
      return response
        .status(400)
        .json({ message: error.message || 'Erro inesperado.' })
    }
  }
}
