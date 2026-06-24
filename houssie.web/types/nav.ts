export type LinkGroup = {
  group: string
  items: (LinkItemWithChildren | LinkItemSingle)[]
}

export type LinkItemBase = {
  name: string
  icon: React.ReactNode
}

export type LinkItemWithChildren = LinkItemBase & {
  type: "group"
  links: Link[]
}

export type LinkItemSingle = LinkItemBase & {
  type: "single"
  links: string
}

export type Link = {
  name: string
  href: string
  icon: React.ReactNode
}
