import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/unity-template-docs/__docusaurus/debug',
    component: ComponentCreator('/unity-template-docs/__docusaurus/debug', '13c'),
    exact: true
  },
  {
    path: '/unity-template-docs/__docusaurus/debug/config',
    component: ComponentCreator('/unity-template-docs/__docusaurus/debug/config', '956'),
    exact: true
  },
  {
    path: '/unity-template-docs/__docusaurus/debug/content',
    component: ComponentCreator('/unity-template-docs/__docusaurus/debug/content', '3a1'),
    exact: true
  },
  {
    path: '/unity-template-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/unity-template-docs/__docusaurus/debug/globalData', '5c8'),
    exact: true
  },
  {
    path: '/unity-template-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/unity-template-docs/__docusaurus/debug/metadata', '368'),
    exact: true
  },
  {
    path: '/unity-template-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/unity-template-docs/__docusaurus/debug/registry', 'a0c'),
    exact: true
  },
  {
    path: '/unity-template-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/unity-template-docs/__docusaurus/debug/routes', 'cc7'),
    exact: true
  },
  {
    path: '/unity-template-docs/',
    component: ComponentCreator('/unity-template-docs/', '8fa'),
    routes: [
      {
        path: '/unity-template-docs/',
        component: ComponentCreator('/unity-template-docs/', '9b5'),
        routes: [
          {
            path: '/unity-template-docs/',
            component: ComponentCreator('/unity-template-docs/', '8cd'),
            routes: [
              {
                path: '/unity-template-docs/advanced/custom-collectors',
                component: ComponentCreator('/unity-template-docs/advanced/custom-collectors', '3bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/advanced/multi-experiment-setup',
                component: ComponentCreator('/unity-template-docs/advanced/multi-experiment-setup', 'fa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/advanced/performance-notes',
                component: ComponentCreator('/unity-template-docs/advanced/performance-notes', '963'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/api-reference/ovreyescollector',
                component: ComponentCreator('/unity-template-docs/api-reference/ovreyescollector', '3ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/api-reference/resxrdatamanager-v2',
                component: ComponentCreator('/unity-template-docs/api-reference/resxrdatamanager-v2', '225'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/api-reference/resxreyetracker',
                component: ComponentCreator('/unity-template-docs/api-reference/resxreyetracker', '6dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/api-reference/resxrplayer',
                component: ComponentCreator('/unity-template-docs/api-reference/resxrplayer', '69c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/api-reference/roundmanager',
                component: ComponentCreator('/unity-template-docs/api-reference/roundmanager', '670'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/api-reference/sessionmanager',
                component: ComponentCreator('/unity-template-docs/api-reference/sessionmanager', 'af5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/api-reference/trialmanager',
                component: ComponentCreator('/unity-template-docs/api-reference/trialmanager', '327'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/core-concepts/data-pipeline',
                component: ComponentCreator('/unity-template-docs/core-concepts/data-pipeline', '034'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/core-concepts/flow-management',
                component: ComponentCreator('/unity-template-docs/core-concepts/flow-management', '75c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/core-concepts/recording-options',
                component: ComponentCreator('/unity-template-docs/core-concepts/recording-options', 'aa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/core-concepts/reference-frames',
                component: ComponentCreator('/unity-template-docs/core-concepts/reference-frames', 'dce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/data-and-bids/bids-export-pipeline',
                component: ComponentCreator('/unity-template-docs/data-and-bids/bids-export-pipeline', '064'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/data-and-bids/continuousdata-schema',
                component: ComponentCreator('/unity-template-docs/data-and-bids/continuousdata-schema', '1d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/data-and-bids/metadata-schema',
                component: ComponentCreator('/unity-template-docs/data-and-bids/metadata-schema', 'b11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/getting-started/base-scene-explained',
                component: ComponentCreator('/unity-template-docs/getting-started/base-scene-explained', 'ce9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/getting-started/installation',
                component: ComponentCreator('/unity-template-docs/getting-started/installation', '70e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/getting-started/quick-start',
                component: ComponentCreator('/unity-template-docs/getting-started/quick-start', '8ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/unity-template-docs/',
                component: ComponentCreator('/unity-template-docs/', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
