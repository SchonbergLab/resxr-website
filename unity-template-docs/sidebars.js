// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/base-scene-explained',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/flow-management',
        'core-concepts/recording-options',
        'core-concepts/reference-frames',
        'core-concepts/data-pipeline',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/resxrplayer',
        'api-reference/resxreyetracker',
        'api-reference/resxrdatamanager-v2',
        'api-reference/ovreyescollector',
        'api-reference/sessionmanager',
        'api-reference/roundmanager',
        'api-reference/trialmanager',
      ],
    },
    {
      type: 'category',
      label: 'Data & BIDS',
      items: [
        'data-and-bids/continuousdata-schema',
        'data-and-bids/metadata-schema',
        'data-and-bids/bids-export-pipeline',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/custom-collectors',
        'advanced/multi-experiment-setup',
        'advanced/performance-notes',
      ],
    },
  ],
};

export default sidebars;
