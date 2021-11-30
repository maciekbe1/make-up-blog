export default {
  name: "category",
  title: "Category",
  type: "document",
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
