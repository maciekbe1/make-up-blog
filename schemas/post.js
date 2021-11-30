export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tytuł",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      type: "string",
      title: "Krótki opis",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Zdjęcie tła",
      type: "image",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Description",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "thumnailImage",
      title: "Miniaturka",
      type: "image",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Description",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "#Tagi",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Data publikacji",
      type: "datetime",
    },
    {
      name: "body",
      title: "Treść",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
