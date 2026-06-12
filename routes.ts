import type { RouteDefinition } from 'pelelajs'
import { Ruleta } from './src/ruleta'

export const routes: RouteDefinition[] = [
  { path: '/', component: Ruleta },
  { path: '*', component: Ruleta },
]
