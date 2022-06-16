import priorities from '../inputs/priorities';
import statuses from '../inputs/statuses';

export const ticket = {
  type: 'document',
  name: 'ticket',
  title: 'Ticket',
  liveEdit: true,
  fields: [
    {
      title: 'Permalink',
      type: 'url',
      name: 'permalink',
      readOnly: true,
    },
    // {
    //   title: 'Internal Slack thread',
    //   description: 'Link to internal thread/discussion (if any)',
    //   type: 'url',
    //   name: 'internalSlackThreadUrl',
    // },
    // {
    //   title: 'Summary',
    //   type: 'text',
    //   name: 'summary',
    //   rows: 5,
    //   description:
    //     'A short description of what the question actually is about.',
    // },
    // {
    //   title: 'Priority (SLA-only)',
    //   type: 'number',
    //   name: 'priority',
    //   options: {
    //     list: priorities,
    //   },
    // },
    // {
    //   title: 'Status',
    //   type: 'string',
    //   name: 'status',
    //   options: {
    //     list: statuses,
    //   },
    // },
    // {
    //   title: 'Blocked Reason',
    //   type: 'string',
    //   name: 'blockedReason',
    //   hidden: ({ document }) => document.status !== 'blocked',
    // },
    // {
    //   title: 'Planned Follow-up Date',
    //   type: 'date',
    //   name: 'plannedFollowUpDate',
    //   hidden: ({ document }) => document.status !== 'planned',
    // },
    // {
    //   name: 'threadCreated',
    //   type: 'datetime',
    //   title: 'Created',
    //   readOnly: true,
    //   hidden: true,
    // },
    // {
    //   name: 'threadUpdated',
    //   type: 'datetime',
    //   title: 'Last updated',
    //   readOnly: true,
    //   hidden: true,
    // },
    // {
    //   name: 'threadFirstClosed',
    //   type: 'datetime',
    //   title: 'Closed',
    //   readOnly: true,
    //   hidden: true,
    // },
    // {
    //   name: 'threadClosed',
    //   type: 'datetime',
    //   title: 'Closed',
    //   readOnly: true,
    //   hidden: true,
    // },
    // {
    //   title: 'Team',
    //   name: 'team',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{ type: 'person' }],
    //       options: {
    //         filter: ({ document }) => {
    //           const ids = document.team
    //             .map(person => person._ref)
    //             .filter(Boolean);
    //           return {
    //             filter: '!(_id in $ids)',
    //             params: { ids },
    //           };
    //         },
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: 'Channel name',
    //   type: 'string',
    //   name: 'channelName',
    //   readOnly: true,
    // },
    // {
    //   title: 'Author name',
    //   type: 'string',
    //   name: 'authorName',
    //   readOnly: true,
    // },
    // {
    //   title: 'Opened by',
    //   name: 'openedBy',
    //   type: 'reference',
    //   to: [{ type: 'person' }],
    //   readOnly: true,
    // },
    // {
    //   title: 'Opened by Slack user',
    //   type: 'string',
    //   name: 'openedByUser',
    //   readOnly: true,
    //   hidden: true,
    // },
    // {
    //   title: 'Closed by',
    //   type: 'string',
    //   name: 'closedBy',
    //   readOnly: true,
    //   hidden: true,
    // },
    // {
    //   title: 'Thread',
    //   type: 'array',
    //   name: 'thread',
    //   of: [{ type: 'message' }],
    //   readOnly: true,
    // },
  ],
  // initialValue: {
  //   status: 'open',
  //   action: 'none',
  // },
  preview: {
    select: {
      channelName: 'channelName',
      status: 'status',
      summary: 'summary',
      tags: 'tags',
      firstMessage: 'thread.0.content',
      thread: 'thread',
      slug: 'slug.current',
      plannedFollowUpDate: 'plannedFollowUpDate',
    },
    prepare({
      channelName,
      status,
      summary,
      tags,
      firstMessage,
      thread,
      slug,
      plannedFollowUpDate,
    }) {
      const regex = /[^\/]+\/([a-zA-Z0-9]+).*/;
      const isStaleView = window.location.pathname.includes('stale');

      const tagsList =
        tags !== undefined ? `${tags.map(t => t.value).join(', ')}` : '';

      let followUpDate =
        plannedFollowUpDate === undefined
          ? ''
          : `Follow up ${plannedFollowUpDate} `;

      return {
        title: summary || firstMessage,
        subtitle: `${followUpDate}${
          channelName && `[#${channelName}]`
        } ${tagsList}`,
      };
    },
  },
  // orderings: [
  //   {
  //     title: 'Thread Updated, New',
  //     name: 'threadUpdatedDesc',
  //     by: [{ field: 'threadUpdated', direction: 'desc' }],
  //   },
  //   {
  //     title: 'Thread Updated, Old',
  //     name: 'threadUpdatedAsc',
  //     by: [{ field: 'threadUpdated', direction: 'asc' }],
  //   },
  // ],
};
