export const message = {
  name: 'message',
  title: 'Message',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'slackAuthor',
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'string',
    },
  ],
  // preview: {
  //   select: {
  //     title: 'content',
  //     author: 'author.slackName',
  //     isSanity: 'author.isSanity',
  //     timestamp: 'timestamp',
  //   },
  //   prepare({ title, author, timestamp, isSanity }) {
  //     const ts = new Date(timestamp * 1000);
  //     return {
  //       title,
  //       subtitle: `${author}, ${ts.toDateString()} ${ts.toLocaleTimeString([], {
  //         hour12: true,
  //         hour: 'numeric',
  //         minute: '2-digit',
  //       })}`,
  //       media: isSanity ? (
  //         <SanityMonogram width='80%' height='80%' />
  //       ) : (
  //         <div style={{ fontSize: '1.75em' }}>👤</div>
  //       ),
  //     };
  //   },
  // },
};
