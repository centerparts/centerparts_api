import { type IBannersRepository } from '../../../repositories/IBannersRepository'
import { type IGetOneBannerRequest } from './GetOneRecipeDTO'

export class GetOneBannerUseCase {
  constructor (private readonly bannersRepository: IBannersRepository) {}

  async execute (data: IGetOneBannerRequest) {
    if (!data.bannerId.replace(/\s+/g, '')) { throw new Error('Id do banner inválida.') }

    const banner = await this.bannersRepository.getOne(data.bannerId)
    if (!banner) throw new Error('Banner não econtrado.')

    return banner
  }
}
