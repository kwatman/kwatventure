import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class Start extends BaseCommand {
  static commandName = 'start'
  static description = ''

  static options: CommandOptions = {}

  async run() {
    this.logger.info('Hello world from "Start"')
  }
}