import { System } from '@kwatventure/sdk'

export default class SystemService {
  protected systems: System[]

  constructor(systems: System[]) {
    this.systems = systems
    console.log('Started system manager wiht the follwoing systems:', systems)
  }

  async addSystem(system: System) {
    console.log('Adding system...')
    this.systems.push(system)
  }
}
