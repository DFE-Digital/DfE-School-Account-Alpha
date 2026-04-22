//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

  // Super navigation menu toggle
  const superNavToggle = document.getElementById('super-navigation-menu-toggle')
  if (superNavToggle) {
    const controlsId = superNavToggle.getAttribute('aria-controls')
    const superNavMenu = controlsId ? document.getElementById(controlsId) : null

    const syncSuperNavState = (isExpanded) => {
      superNavToggle.setAttribute('aria-expanded', String(isExpanded))
      if (superNavMenu) superNavMenu.hidden = !isExpanded

      // `__open-button` drives the "open" styling in the existing Sass
      superNavToggle.classList.toggle(
        'gem-c-layout-super-navigation-header__open-button',
        isExpanded
      )

      const label = isExpanded
        ? superNavToggle.getAttribute('data-text-for-hide')
        : superNavToggle.getAttribute('data-text-for-show')
      if (label) superNavToggle.setAttribute('aria-label', label)
    }

    // Ensure initial DOM state matches ARIA state
    syncSuperNavState(superNavToggle.getAttribute('aria-expanded') === 'true')

    superNavToggle.addEventListener('click', () => {
      const isExpanded = superNavToggle.getAttribute('aria-expanded') === 'true'
      syncSuperNavState(!isExpanded)
    })
  }

})

// MoJ filter show/hide

import { FilterToggleButton } from "/plugin-assets/%40ministryofjustice%2Ffrontend/moj/moj-frontend.min.js";

const $filter = document.querySelector('[data-module="moj-filter"]')

new FilterToggleButton($filter, {
  bigModeMediaQuery: '(min-width: 48.0625em)',
  startHidden: true,
  toggleButton: {
    showText: 'Show filter',
    hideText: 'Hide filter',
    classes: 'govuk-button--secondary'
  },
  closeButton: {
    text: 'Close'
  }
})


