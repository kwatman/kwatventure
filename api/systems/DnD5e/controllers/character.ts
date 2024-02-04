import { HttpContext } from '@adonisjs/core/http'

export default class PluginsController {
  async getActivePlugins({ response }: HttpContext) {
    return response.json({
      message: 'Hello World',
    })
  }
}
