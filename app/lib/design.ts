import designData from '../../design.json'

export interface DesignData {
  meta: {
    name: string
    language: string
    description: string
    favicon: string
    ogImage: string
  }
  theme: {
    logoPath: string
    extractPrimaryFromLogo: boolean
    palette: {
      primary: string
      primaryContrast: string
      accent: string
      bg: string
      fg: string
      muted: string
      card: string
      border: string
    }
    radius: number
    maxWidth: number
    font: {
      heading: string
      body: string
    }
    buttons: {
      primary: { shape: string; shadow: string }
      ghost: { shape: string }
    }
  }
  navigation: {
    brand: string
    items: Array<{
      label: string
      href: string
      variant?: string
    }>
    sticky: boolean
  }
  pages: Array<{
    id: string
    anchor?: string
    sections: Array<any>
  }>
  social: {
    instagram: string
  }
}

export function getDesignData(): DesignData {
  return designData as DesignData
}

export function getPageById(id: string) {
  return designData.pages.find(page => page.id === id)
}

export function getSectionByType(pageId: string, type: string) {
  const page = getPageById(pageId)
  return page?.sections.find(section => section.type === type)
}
