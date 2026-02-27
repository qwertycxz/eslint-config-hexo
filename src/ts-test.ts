import testConfig from './test'
import tsConfig from './ts'

export = [...tsConfig, testConfig.pop()]
