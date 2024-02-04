/*
|--------------------------------------------------------------------------
| HTTP kernel file
|--------------------------------------------------------------------------
|
| The HTTP kernel file is used to register the middleware with the server
| or the router.
|
*/

import router from '@adonisjs/core/services/router'
import server from '@adonisjs/core/services/server'

// fs.readdir('./systems', { withFileTypes: true }, (err, files) => {
//   if (err) {
//     console.error(`Error reading directory: ./systems`, err)
//     return
//   }

//   files.forEach((file) => {
//     const fullPath = path.join('./systems', file.name)

//     if (file.isDirectory()) {
//       // If the directory is named 'dist' or it's any other directory, recurse into it
//       if (file.name === 'dist' || file.name !== 'dist') {
//         loadJSFiles(fullPath)
//       }
//     } else if (file.isFile() && path.extname(fullPath) === '.js') {
//       // If the file is a JavaScript file, import it
//       import(fullPath).catch((error) => {
//         console.error(`Error importing file: ${fullPath}`, error)
//       })
//     }
//   })
// })

/**
 * The error handler is used to convert an exception
 * to a HTTP response.
 */
server.errorHandler(() => import('#exceptions/handler'))

/**
 * The server middleware stack runs middleware on all the HTTP
 * requests, even if there is no route registered for
 * the request URL.
 */
server.use([
  () => import('#middleware/container_bindings_middleware'),
  () => import('#middleware/force_json_response_middleware'),
  () => import('@adonisjs/cors/cors_middleware'),
])

/**
 * The router middleware stack runs middleware on all the HTTP
 * requests with a registered route.
 */
router.use([() => import('@adonisjs/core/bodyparser_middleware')])

/**
 * Named middleware collection must be explicitly assigned to
 * the routes or the routes group.
 */
export const middleware = router.named({})
