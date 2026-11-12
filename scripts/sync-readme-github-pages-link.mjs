/**
 * Reemplaza README.md por un título y la URL de GitHub Pages (base + nombre del repo).
 * Se invoca desde `npm run serve`.
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const README_PATH = path.join(ROOT, 'README.md')

// Si el remoto no dice de quién es el repo, se asume la organización histórica.
const GH_PAGES_OWNER_FALLBACK = 'ecoredsena-santander'
const README_TITLE = '# URL WEB'

function gitOriginUrl() {
  try {
    return execSync('git remote get-url origin', {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim()
  } catch {
    return null
  }
}

function repoSlugFromGitOrigin() {
  const url = gitOriginUrl()
  if (!url) return null
  const match = url.match(/(?:[/:])([^/]+?)(?:\.git)?$/i)
  return match ? match[1] : null
}

// La organización sale del propio remoto: con la base fija, un repo de
// ECORED-TOLIMA imprimía la URL de Santander, que no existe.
function ownerFromGitOrigin() {
  const url = gitOriginUrl()
  if (!url) return null
  const match = url.match(/(?:[/:])([^/:]+)\/[^/]+?(?:\.git)?$/i)
  return match ? match[1].toLowerCase() : null
}

function repoSlugFallback() {
  return path.basename(ROOT)
}

function buildReadme(url) {
  return `${README_TITLE}\n\n[${url}](${url})\n`
}

function syncReadme() {
  const slug = repoSlugFromGitOrigin() ?? repoSlugFallback()
  const owner = ownerFromGitOrigin() ?? GH_PAGES_OWNER_FALLBACK
  const url = `https://${owner}.github.io/${slug}/`
  fs.writeFileSync(README_PATH, buildReadme(url), 'utf8')
  console.info(`[sync-readme-github-pages-link] README actualizado → ${url}`)
}

syncReadme()
