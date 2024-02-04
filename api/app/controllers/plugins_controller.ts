import SystemService from '#services/system_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
// import SystemManager from '@ioc:Systems/Manager'

@inject()
export default class PluginsController {
  constructor(systemService: SystemService) {
    console.log('plugins controller')
  }

  async getActivePlugins({ response }: HttpContext) {
    return response.json({
      message: 'Hello World',
    })
  }
}
