import type { TinaField } from "tinacms";
export function an_pageFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "top_image",
      label: "Header Image ",
    },
    {
      type: "string",
      name: "top_quote",
      label: "Top Quote",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Image in link previews",
    },
    {
      type: "string",
      name: "credits",
      label: "Credits",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "share",
      label: "Share",
      fields: [
        {
          type: "string",
          name: "whatsapp",
          label: "Whatsapp",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "tweet",
          label: "Tweet",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "image",
      name: "logo",
      label: "Logo",
    },
    {
      type: "image",
      name: "logo_square",
      label: "Square Logo",
    },
    {
      type: "string",
      name: "an_id",
      label: "Action Network ID",
    },
  ] as TinaField[];
}
export function bank_digital_actionFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "tagline",
      label: "tagline",
    },
    {
      type: "image",
      name: "background_image",
      label: "background_image",
    },
    {
      type: "boolean",
      name: "hide_nav",
      label: "hide_nav",
    },
    {
      type: "string",
      name: "take_action",
      label: "take_action",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "actions",
      label: "actions",
      list: true,
      fields: [
        {
          type: "string",
          name: "impact",
          label: "impact",
        },
        {
          type: "string",
          name: "heading",
          label: "heading",
        },
        {
          type: "number",
          name: "time",
          label: "time",
        },
        {
          type: "string",
          name: "blurb",
          label: "blurb",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "buttons",
          label: "buttons",
          list: true,
          fields: [
            {
              type: "string",
              name: "text",
              label: "text",
            },
            {
              type: "string",
              name: "target",
              label: "target",
            },
          ],
        },
        {
          type: "number",
          name: "counter_id",
          label: "counter_id",
        },
      ],
    },
    {
      type: "object",
      name: "facts",
      label: "facts",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "headline",
          list: true,
        },
        {
          type: "string",
          name: "quote",
          label: "quote",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "content",
          label: "content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "resources",
      label: "resources",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "text",
        },
        {
          type: "string",
          name: "target",
          label: "target",
        },
      ],
    },
  ] as TinaField[];
}
export function bank_page_2Fields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "logo",
      label: "logo",
    },
    {
      type: "string",
      name: "tagline",
      label: "tagline",
    },
    {
      type: "image",
      name: "background_image",
      label: "background_image",
    },
    {
      type: "boolean",
      name: "hide_nav",
      label: "hide_nav",
    },
    {
      type: "object",
      name: "share",
      label: "share",
      fields: [
        {
          type: "string",
          name: "intro",
          label: "intro",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "whatsapp",
          label: "whatsapp",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "instagram_post",
          label: "instagram_post",
        },
        {
          type: "object",
          name: "email",
          label: "email",
          fields: [
            {
              type: "string",
              name: "subject",
              label: "subject",
            },
            {
              type: "string",
              name: "body",
              label: "body",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "take_action",
      label: "take_action",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "take_action_instructions",
      label: "take_action_instructions",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "actions",
      label: "actions",
      list: true,
      fields: [
        {
          type: "string",
          name: "impact",
          label: "impact",
        },
        {
          type: "string",
          name: "heading",
          label: "heading",
        },
        {
          type: "string",
          name: "slug",
          label: "slug",
        },
        {
          type: "number",
          name: "time",
          label: "time",
        },
        {
          type: "string",
          name: "blurb",
          label: "blurb",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "buttons",
          label: "buttons",
          list: true,
          fields: [
            {
              type: "string",
              name: "text",
              label: "text",
            },
            {
              type: "string",
              name: "target",
              label: "target",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
        {
          type: "number",
          name: "counter_id",
          label: "counter_id",
        },
        {
          type: "string",
          name: "thank_you",
          label: "thank_you",
        },
      ],
    },
    {
      type: "object",
      name: "facts",
      label: "facts",
      fields: [
        {
          type: "object",
          name: "headline",
          label: "headline",
          list: true,
          fields: [
            {
              type: "string",
              name: "stat",
              label: "stat",
            },
            {
              type: "string",
              name: "about",
              label: "about",
            },
          ],
        },
        {
          type: "object",
          name: "quote",
          label: "quote",
          fields: [
            {
              type: "string",
              name: "text",
              label: "text",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "string",
              name: "by",
              label: "by",
            },
          ],
        },
        {
          type: "string",
          name: "content",
          label: "content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "resource_header",
      label: "resource_header",
    },
    {
      type: "object",
      name: "resources",
      label: "resources",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "text",
        },
        {
          type: "string",
          name: "target",
          label: "target",
        },
      ],
    },
  ] as TinaField[];
}
export function bank_pageFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "boolean",
      name: "hide_nav",
      label: "hide_nav",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "tagline",
      label: "tagline",
    },
    {
      type: "image",
      name: "logo",
      label: "logo",
    },
    {
      type: "image",
      name: "background_image",
      label: "Background Image",
    },
    {
      type: "image",
      name: "image",
      label: "Share Image",
    },
    {
      type: "object",
      name: "share",
      label: "Share this page content",
      fields: [
        {
          type: "string",
          name: "intro",
          label: "intro",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "whatsapp",
          label: "whatsapp",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "instagram_post",
          label: "Link to an Instagram Post to share",
        },
        {
          type: "object",
          name: "email",
          label: "email",
          fields: [
            {
              type: "string",
              name: "subject",
              label: "subject",
            },
            {
              type: "string",
              name: "body",
              label: "body",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "take_action",
      label: "Why should people take action?",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "actions",
      label: "Main 3 Actions",
      list: true,
      fields: [
        {
          type: "string",
          name: "impact",
          label: "A few words on the inpact of the action",
        },
        {
          type: "string",
          name: "heading",
          label: "heading",
        },
        {
          type: "number",
          name: "time",
          label: "time",
        },
        {
          type: "string",
          name: "blurb",
          label: "blurb",
        },
        {
          type: "object",
          name: "buttons",
          label: "buttons",
          list: true,
          fields: [
            {
              type: "string",
              name: "text",
              label: "text",
            },
            {
              type: "string",
              name: "target",
              label: "target",
            },
          ],
        },
        {
          type: "number",
          name: "counter_id",
          label: "counter_id",
        },
        {
          type: "string",
          name: "thank_you",
          label: "Thank You Box Conent",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "share",
          label: "Share This Action",
          fields: [
            {
              type: "string",
              name: "whatsapp",
              label: "Whatsapp Message",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "string",
              name: "instagram_post",
              label: "Instagram Post",
            },
            {
              type: "string",
              name: "tweet",
              label: "Tweet to send",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "object",
              name: "email",
              label: "Email to send",
              fields: [
                {
                  type: "string",
                  name: "subject",
                  label: "Subject",
                },
                {
                  type: "string",
                  name: "body",
                  label: "Body",
                  ui: {
                    component: "textarea",
                  },
                },
              ],
            },
          ],
        },
        {
          type: "string",
          name: "slug",
          label: "Slug",
        },
      ],
    },
    {
      type: "object",
      name: "facts",
      label: "facts",
      fields: [
        {
          type: "object",
          name: "headline",
          label: "Top Line Statistics",
          list: true,
          fields: [
            {
              type: "string",
              name: "stat",
              label: "stat",
            },
            {
              type: "string",
              name: "about",
              label: "about",
            },
          ],
        },
        {
          type: "string",
          name: "content",
          label: "Longer Content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "quote",
          label: "quote",
          fields: [
            {
              type: "string",
              name: "text",
              label: "The Quote",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "string",
              name: "by",
              label: "Who said this?",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "resources",
      label: "resources",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "Button Text",
        },
        {
          type: "string",
          name: "target",
          label: "A Link to the resource",
        },
      ],
    },
    {
      type: "string",
      name: "resource_header",
      label: "Resources Header",
    },
  ] as TinaField[];
}
export function block_layoutFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "object",
      name: "header",
      label: "Header",
      fields: [
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "buttons",
          label: "Buttons",
          list: true,
          fields: [
            {
              type: "string",
              name: "text",
              label: "Text",
            },
            {
              type: "string",
              name: "target",
              label: "Target",
            },
          ],
        },
        {
          type: "object",
          name: "border_bottom",
          label: "Border Bottom",
          fields: [
            {
              type: "image",
              name: "image",
              label: "Image",
            },
            {
              type: "boolean",
              name: "reflect",
              label: "Reflect?",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "blocks",
      label: "Blocks",
      list: true,
      fields: [
        {
          type: "boolean",
          name: "map",
          label: "map",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "custom_id",
          nameOverride: "id",
          label: "JumpLink",
        },
        {
          type: "object",
          name: "buttons",
          label: "Buttons",
          list: true,
          fields: [
            {
              type: "string",
              name: "text",
              label: "text",
            },
            {
              type: "string",
              name: "target",
              label: "target",
            },
            {
              type: "image",
              name: "image",
              label: "Image",
            },
            {
              type: "boolean",
              name: "new_tab",
              label: "New Tab?",
            },
          ],
        },
        {
          type: "string",
          name: "decoration",
          label: "Decoration",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "background_image",
          label: "Background Image",
        },
      ],
    },
    {
      type: "string",
      name: "invert",
      label: "Invert Color For Blocks which are...",
      options: ["odd", "even"],
    },
    {
      type: "string",
      name: "credits",
      label: "Credits",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "object",
      name: "share",
      label: "Share",
      fields: [
        {
          type: "string",
          name: "whatsapp",
          label: "Whatsapp",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "tweet",
          label: "Tweet",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
  ] as TinaField[];
}
export function configFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "email",
      label: "email",
    },
    {
      type: "string",
      name: "tagline",
      label: "tagline",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "url",
      label: "url",
    },
    {
      type: "string",
      name: "permalink",
      label: "permalink",
    },
    {
      type: "string",
      name: "background_color",
      label: "background_color",
    },
    {
      type: "image",
      name: "logo",
      label: "logo",
    },
    {
      type: "image",
      name: "logo_light",
      label: "logo_light",
    },
    {
      type: "image",
      name: "logo_square",
      label: "logo_square",
    },
    {
      type: "boolean",
      name: "invert_brand_text",
      label: "invert_brand_text",
    },
    {
      type: "boolean",
      name: "invert_accent_text",
      label: "invert_accent_text",
    },
    {
      type: "string",
      name: "instagram",
      label: "instagram",
    },
    {
      type: "string",
      name: "twitter",
      label: "twitter",
    },
    {
      type: "string",
      name: "facebook",
      label: "facebook",
    },
    {
      type: "string",
      name: "counter",
      label: "Count down to...",
    },
    {
      type: "object",
      name: "nav_links",
      label: "Navigation Links",
      list: true,
      fields: [
        {
          type: "string",
          name: "url",
          label: "url",
        },
        {
          type: "string",
          name: "title",
          label: "title",
        },
      ],
    },
    {
      type: "boolean",
      name: "future",
      label: "future",
    },
    {
      type: "string",
      name: "copyright_notice",
      label: "copyright_notice",
    },
    {
      type: "object",
      name: "collections",
      label: "collections",
      fields: [
        {
          type: "object",
          name: "posts",
          label: "posts",
          fields: [
            {
              type: "string",
              name: "permalink",
              label: "permalink",
            },
          ],
        },
        {
          type: "object",
          name: "faqs",
          label: "faqs",
          fields: [
            {
              type: "boolean",
              name: "output",
              label: "output",
            },
            {
              type: "string",
              name: "permalink",
              label: "permalink",
            },
          ],
        },
        {
          type: "object",
          name: "trainings",
          label: "trainings",
          fields: [
            {
              type: "boolean",
              name: "output",
              label: "output",
            },
          ],
        },
        {
          type: "object",
          name: "actions",
          label: "actions",
          fields: [
            {
              type: "boolean",
              name: "output",
              label: "output",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "defaults",
      label: "defaults",
      list: true,
      fields: [
        {
          type: "object",
          name: "scope",
          label: "scope",
          fields: [
            {
              type: "string",
              name: "path",
              label: "path",
            },
          ],
        },
        {
          type: "object",
          name: "values",
          label: "values",
          fields: [
            {
              type: "boolean",
              name: "sitemap",
              label: "sitemap",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "airtable",
      label: "airtable",
      fields: [
        {
          type: "object",
          name: "faqs",
          label: "faqs",
          fields: [
            {
              type: "string",
              name: "app",
              label: "app",
            },
            {
              type: "string",
              name: "table",
              label: "table",
            },
            {
              type: "string",
              name: "view",
              label: "view",
            },
          ],
        },
        {
          type: "object",
          name: "resources",
          label: "resources",
          fields: [
            {
              type: "string",
              name: "app",
              label: "app",
            },
            {
              type: "string",
              name: "table",
              label: "table",
            },
            {
              type: "string",
              name: "view",
              label: "view",
            },
          ],
        },
        {
          type: "object",
          name: "partners",
          label: "partners",
          fields: [
            {
              type: "string",
              name: "app",
              label: "app",
            },
            {
              type: "string",
              name: "table",
              label: "table",
            },
            {
              type: "string",
              name: "view",
              label: "view",
            },
            {
              type: "string",
              name: "fields",
              label: "fields",
              list: true,
            },
          ],
        },
        {
          type: "object",
          name: "trainings",
          label: "trainings",
          fields: [
            {
              type: "string",
              name: "app",
              label: "app",
            },
            {
              type: "string",
              name: "table",
              label: "table",
            },
            {
              type: "string",
              name: "view",
              label: "view",
            },
            {
              type: "string",
              name: "fields",
              label: "fields",
              list: true,
            },
            {
              type: "object",
              name: "collection",
              label: "collection",
              fields: [
                {
                  type: "string",
                  name: "slug",
                  label: "slug",
                },
                {
                  type: "string",
                  name: "layout",
                  label: "layout",
                },
                {
                  type: "string",
                  name: "content",
                  label: "content",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "jekyll_get_json",
      label: "jekyll_get_json",
      list: true,
      fields: [
        {
          type: "string",
          name: "data",
          label: "data",
        },
        {
          type: "string",
          name: "json",
          label: "json",
        },
      ],
    },
    {
      type: "object",
      name: "map",
      label: "map",
      fields: [
        {
          type: "string",
          name: "lat",
          label: "lat",
        },
        {
          type: "string",
          name: "lng",
          label: "lng",
        },
      ],
    },
    {
      type: "string",
      name: "plugins",
      label: "plugins",
      list: true,
    },
  ] as TinaField[];
}
export function digital_actionFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "comments",
      label: "Comments",
      list: true,
    },
    {
      type: "string",
      name: "tweets",
      label: "Tweets",
      list: true,
    },
    {
      type: "image",
      name: "top_image",
      label: "Header Image ",
    },
    {
      type: "string",
      name: "top_quote",
      label: "Top Quote",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Image in link previews",
    },
    {
      type: "string",
      name: "credits",
      label: "Credits",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "share",
      label: "Share",
      fields: [
        {
          type: "string",
          name: "whatsapp",
          label: "Whatsapp",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "tweet",
          label: "Tweet",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "image",
      name: "logo",
      label: "Logo",
    },
    {
      type: "image",
      name: "logo_square",
      label: "Square Logo",
    },
  ] as TinaField[];
}
export function motionsFields() {
  return [
    {
      type: "object",
      name: "Motions",
      label: "Motions",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "top_image",
      label: "Header Image ",
    },
    {
      type: "string",
      name: "top_quote",
      label: "Top Quote",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Image in link previews",
    },
    {
      type: "string",
      name: "credits",
      label: "Credits",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "share",
      label: "Share",
      fields: [
        {
          type: "string",
          name: "whatsapp",
          label: "Whatsapp",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "tweet",
          label: "Tweet",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "image",
      name: "logo",
      label: "Logo",
    },
    {
      type: "image",
      name: "logo_square",
      label: "Square Logo",
    },
  ] as TinaField[];
}
export function resourceFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "image",
      name: "top_image",
      label: "Header Image ",
    },
    {
      type: "string",
      name: "top_quote",
      label: "Top Quote",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Image in link previews",
    },
    {
      type: "string",
      name: "credits",
      label: "Credits",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function storiesFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
      required: true,
    },
    {
      type: "string",
      name: "credits",
      label: "Credits",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
  ] as TinaField[];
}
export function templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "slug",
      label: "slug",
    },
    {
      type: "string",
      name: "template",
      label: "Template",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
