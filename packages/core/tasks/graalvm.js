'use strict'

const GraalVMModule = require('./module/graalvm.js')
const graalvmModule = new GraalVMModule()

;(async () => {
  await graalvmModule.get()
  GraalVMModule.run()
})().catch(err => {
  console.error('Error while running the tests suite against GraalVM: ' + err)
})
