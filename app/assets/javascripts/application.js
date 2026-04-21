//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

})

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
