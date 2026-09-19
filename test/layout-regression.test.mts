import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

const source = (path: string) =>
  readFileSync(resolve(process.cwd(), path), 'utf8')

test('keeps the particle effect contained within the full-viewport hero', () => {
  const main = source('src/components/main.tsx')

  assert.match(main, /min-h-svh/)
  assert.match(main, /LinesEffect/)
})

test('obscures decorative background behind the about content', () => {
  const home = source('src/app/page.tsx')

  assert.match(home, /bg-base-200\/95/)
  assert.match(home, /backdrop-blur-xl/)
})

test('shows the senior career move without a promotion label', () => {
  const experiences = source('src/components/about/experiences.tsx')

  assert.doesNotMatch(experiences, /Promoção em/)
})

test('labels the Horizonte preview as demonstrative data', () => {
  const project = source('src/components/project/project.tsx')

  assert.match(project, /Dados demonstrativos/)
})

test('keeps public landing captures fully visible inside their project frame', () => {
  const project = source('src/components/project/project.tsx')

  assert.match(project, /className="object-contain bg-base-100"/)
})

test('keeps every project preview in the same full-width frame', () => {
  const project = source('src/components/project/project.tsx')

  assert.match(project, /const visualClassName = 'relative aspect-\[16\/10\] border-b border-base-300 bg-base-300'/)
  assert.doesNotMatch(project, /imageLayout/)
})

test('gives navigation controls consistent horizontal breathing room', () => {
  const navbar = source('src/components/navbar/navbar.tsx')

  assert.match(navbar, /navbar mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12/)
  assert.match(navbar, /menu menu-horizontal gap-1 p-0 hidden lg:flex/)
})

test('keeps footer content on one responsive row', () => {
  const footer = source('src/components/footer/footer.tsx')

  assert.match(footer, /flex w-full flex-nowrap items-center justify-between/)
  assert.match(footer, /whitespace-nowrap text-xs sm:text-sm/)
})
