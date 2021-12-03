import {
  FaPaperclip,
  IoColorPaletteOutline,
  FaAlignRight,
  FaAlignCenter,
  FaAlignJustify,
} from "react-icons/fa";
import React from "react";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;
const highlightRender = (props) => (
  <span style={{ backgroundColor: "yellow" }}>{props.children}</span>
);
const h2Style = (props) => (
  <h2 style={{ fontSize: "1.5rem" }}>{props.children}</h2>
);
const h3Style = (props) => (
  <h3
    style={{
      fontSize: "1.125rem",
    }}
  >
    {props.children}
  </h3>
);
const normalStyle = (props) => (
  <p style={{ marginTop: "0", marginBottom: "0", fontSize: "1rem" }}>
    {props.children}
  </p>
);

const align = (props) => {
  return <div style={{ textAlign: props.mark }}>{props.children}</div>;
};

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  validation: (Rule) => Rule.required(),
  of: [
    {
      type: "block",
      styles: [
        {
          title: "Normal",
          value: "normal",
          blockEditor: {
            render: normalStyle,
          },
        },
        {
          title: "H2",
          value: "h2",
          blockEditor: {
            render: h2Style,
          },
        },
        {
          title: "H3",
          value: "h3",
          blockEditor: {
            render: h3Style,
          },
        },
        { title: "Quote", value: "blockquote" },
        {
          title: "Highlight",
          value: "highlight",
          blockEditor: {
            icon: highlightIcon,
            render: highlightRender,
          },
        },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          { title: "Code", value: "code" },
          {
            title: "Right",
            value: "right",
            blockEditor: {
              icon: FaAlignRight,
              render: align,
            },
          },
          {
            title: "Center",
            value: "center",
            blockEditor: {
              icon: FaAlignCenter,
              render: align,
            },
          },
          {
            title: "Justify",
            value: "justify",
            blockEditor: {
              icon: FaAlignJustify,
              render: align,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [
                  { type: "post" },
                  // other types you may want to link to
                ],
              },
            ],
            blockEditor: {
              icon: FaPaperclip,
            },
          },
          {
            name: "link",
            type: "object",
            title: "External link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              },
            ],
          },
          {
            name: "color",
            type: "color",
            title: "Color",
            blockEditor: {
              icon: IoColorPaletteOutline,
            },
          },
        ],
      },
    },
    {
      type: "image",
      fields: [
        {
          title: "Position",
          name: "position",
          type: "string",
          options: {
            list: [
              {
                title: "Center",
                value: "center",
              },
              {
                title: "Left",
                value: "left",
              },
              {
                title: "Right",
                value: "right",
              },
            ],
            layout: "radio",
            isHighlighted: true,
          },
        },
        {
          type: "text",
          name: "alt",
          title: "Description",
          options: { isHighlighted: true },
        },
      ],
      options: {
        hotspot: true,
      },
    },
  ],
};
