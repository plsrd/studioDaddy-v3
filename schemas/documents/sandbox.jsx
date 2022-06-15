import React from 'react';

export default {
  name: 'sandbox',
  type: 'document',
  groups: [
    { name: 'curr', title: 'Current' },
    { name: 'community', title: 'Community' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'Sandbox',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'images',
      type: 'array',
      of: [{ type: 'figure' }],
    },
    {
      name: 'movie',
      title: 'Movie',
      type: 'reference',
      to: [{ type: 'movie' }],
      options: {
        filter: ({ document }) => ({
          filter: '$id in castMembers[].person._ref',
          params: {
            id: document.actor._ref,
          },
        }),
      },
    },
  ],
};
