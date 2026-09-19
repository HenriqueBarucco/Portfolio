import assert from 'node:assert/strict'
import test from 'node:test'
import { portfolio } from '../src/data/portfolio.ts'

test('highlights Henrique current senior backend role', () => {
  assert.equal(portfolio.identity.title, 'Desenvolvedor Backend Sênior')

  const luizalabsExperiences = portfolio.experiences.filter(
    (experience) => experience.company === 'Luizalabs',
  )

  assert.equal(luizalabsExperiences.length, 1)
  assert.deepEqual(
    luizalabsExperiences[0]?.roles.map(({ role, startDate, endDate }) => ({
      role,
      startDate,
      endDate,
    })),
    [
      {
        role: 'Desenvolvedor Backend Sênior',
        startDate: 'Novembro de 2025',
        endDate: null,
      },
      {
        role: 'Desenvolvedor Backend Pleno',
        startDate: 'Dezembro de 2023',
        endDate: 'Novembro de 2025',
      },
    ],
  )
})

test('keeps Henrique location in the about narrative instead of the hero data', () => {
  assert.equal('location' in portfolio.identity, false)
  assert.match(portfolio.about[0] || '', /Ribeirão Preto, SP/)
})

test('presents Calcula AI as a public product with verified destinations', () => {
  const calculaAi = portfolio.projects.find((project) => project.title === 'Calcula AI')

  assert.equal(calculaAi?.visibility, 'Público')
  assert.equal(calculaAi?.image, '/calcula-ai-landing.png')
  assert.deepEqual(calculaAi?.links, [
    {
      label: 'Abrir site',
      href: 'https://calcula-ai.henriquebarucco.com.br/',
      kind: 'demo',
    },
    {
      label: 'Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.henriquebarucco.calculaai',
      kind: 'store',
    },
  ])
})

test('shows Plataforma IEPT with its official platform and repository destinations', () => {
  const iept = portfolio.projects.find((project) => project.title === 'Plataforma IEPT')

  assert.equal(iept?.visibility, 'Privado')
  assert.equal(iept?.image, '/plataforma-iept-dashboard-completo.png')
  assert.deepEqual(iept?.links, [
    {
      label: 'Abrir plataforma',
      href: 'https://planejamento.iepaulodetarso.org/dashboard',
      kind: 'platform',
    },
    {
      label: 'Repositórios',
      href: 'https://github.com/orgs/Plataforma-IEPT/repositories',
      kind: 'github',
    },
  ])
})

test('preserves existing project media while keeping a replaceable Continuum preview', () => {
  const easyWhatsApp = portfolio.projects.find((project) => project.title === 'Easy WhatsApp')
  const continuum = portfolio.projects.find((project) => project.title === 'Continuum')
  const chronos = portfolio.projects.find((project) => project.title === 'Chronos')
  const horizonte = portfolio.projects.find((project) => project.title === 'Horizonte')

  assert.equal(easyWhatsApp?.image, '/easy-whatsapp.png')
  assert.equal(continuum?.image, '/continuum-dashboard-overview.png')
  assert.equal(chronos?.image, undefined)
  assert.equal(horizonte?.image, undefined)
})

test('keeps private products free from invented live demos', () => {
  assert.ok(portfolio.projects.some((project) => project.title === 'Continuum'))
  assert.ok(portfolio.projects.some((project) => project.title === 'Chronos'))

  const privateProjects = portfolio.projects.filter(
    (project) => project.visibility === 'Privado',
  )

  assert.ok(privateProjects.length > 0)
  assert.ok(
    privateProjects.every((project) =>
      project.links.every((link) => link.kind !== 'demo'),
    ),
  )
})
