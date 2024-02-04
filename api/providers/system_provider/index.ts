import type { ApplicationService } from '@adonisjs/core/types'
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url' // Import the required function
import SystemService from '#services/system_service'
import { type System } from '@kwatventure/sdk'

export default class SystemProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    let systems: System[] = []

    fs.readdir('./systems', async (err, files) => {
      if (err) {
        console.error('Error reading systems directory', err)
        return
      }

      //if file is a directory
      for (let file of files) {
        let filePath = path.resolve(process.cwd(), 'systems', file)

        if (fs.lstatSync(path.resolve(filePath)).isDirectory()) {
          // import the index.ts file in it
          let system = await import(pathToFileURL(path.resolve(filePath, 'system.js')).href)
          systems.push(system)
        }
      }

      console.log('systems', systems)

      this.app.container.singleton(SystemService, () => {
        return new SystemService(systems)
      })
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
