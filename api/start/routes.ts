/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PluginsController = () => import('#controllers/plugins_controller')

router.get('plugins', [PluginsController, 'getActivePlugins'])
router.get('/', async () => {
  return {
    hello: 'world',
  }
})
