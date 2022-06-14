export default {
  name: 'projectImageRow',
  title: 'Project Images Row',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'centered',
      title: 'Center',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      name: 'name',
      image: 'image',
      originalName: 'image.asset.originalFilename',
      centered: 'centered',
    },
    prepare({ image, centered, name, originalName }) {
      return {
        media: image,
        title: name || originalName,
        subtitle: `Image centered: ${centered ? 'true' : 'false'}`,
      };
    },
  },
};
