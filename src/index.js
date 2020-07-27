aventum.hooks.addFilter(
  'SideBarMenu',
  'Aventum/AventumSampleDashboardExtension/addMenuItems',
  (menu, $this) => {
    menu.push({
      icon: '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>',
      title: 'Sample Extension',
      items: [
        {
          name: 'sampleExtensionList',
          title: 'Sample Extension List',
          link: `/sample-extension/list`
        },
        {
          name: 'newSampleExtension',
          title: 'Add Sample Extension',
          link: `/sample-extension/new`
        }
      ]
    })

    return menu
  }
)
