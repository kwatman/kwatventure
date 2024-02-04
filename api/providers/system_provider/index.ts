import type { ApplicationService } from '@adonisjs/core/types'
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url' // Import the required function
import SystemService from '#services/system_service'
import { type System, getSystems } from '@kwatventure/sdk'
import logger from '@adonisjs/core/services/logger'

export default class SystemProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  async register() {
    let systemNames: string[] = []

    const data = fs.readFileSync('./package.json', 'utf-8')
    const jsonData = JSON.parse(data)

    //get dependencies from package.json starting with kwatventure-system
    for (let dependecy in jsonData.dependencies) {
      if (dependecy.startsWith('kwatventure-system')) {
        systemNames.push(dependecy)
      }
    }
    console.log('Found the following extensions:', systemNames)

    let systems: System[] = await getSystems(systemNames)
    console.log('Imported systems:', systems)

    this.app.container.singleton(SystemService, () => {
      return new SystemService(systems)
    })
  }

  /**
   * The container bindings have booted
   */
  async boot() {}

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
