import { Pages, PAGE_PREFIX } from 'constants/PageConsts'
import { CategoryTree } from 'datastructures/category/CategoryTree'

export default function activateCurrentCategories(tree: CategoryTree) {
  const currentEndpoint = getCurrentEndpointDecoded()
  const page = findCurrentPageByEndpoint(currentEndpoint)
  const currentSlug = getCurrentSlug(currentEndpoint, page)

  switch (page) {
    case 'INDEX':
      break
    default:
      tree.activateCurrentCategory(currentSlug)
  }
}

function getCurrentEndpointDecoded() {
  return decodeURIComponent(window.location.pathname)
}

function getCurrentSlug(currentEndpoint: string, page: Pages) {
  const pagePrefix = PAGE_PREFIX[page]
  return currentEndpoint.split(pagePrefix)[1]
}

function findCurrentPageByEndpoint(currentEndpoint: string) {
  const pageKeys = Object.keys(PAGE_PREFIX) as Pages[]
  const originPage = pageKeys.find(key =>
    currentEndpoint.startsWith(PAGE_PREFIX[key]),
  )
  throwIfPageNotFound(originPage)
  return originPage!
}

function throwIfPageNotFound(page?: Pages) {
  if (!page) {
    throw new Error('CategoryContext가 올바르지 않은 페이지에서 생성됨')
  }
}
