module.exports = {
    apps: [
      {
        name: 'katkamarket.com',
        port: '80',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  