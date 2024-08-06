import { defineType, defineField } from 'sanity'

const seo = defineType({
	title: 'SEO / Share Settings',
	name: 'seo',
	type: 'object',
	options: {
		collapsible: true,
		collapsed: true,
	},
	fields: [
		defineField({
			title: 'No Index?',
			name: 'noIndex',
			type: 'boolean',
			hidden: ({ document }) => document?._type !== 'page',
		}),
		defineField(
			{
				title: 'Meta Title',
				name: 'metaTitle',
				type: 'string',
				description: 'Title used for search engines and browsers.',
				validation: Rule =>
					Rule.max(50).warning(
						'Longer titles may be truncated by search engines',
					),
			}
		),
		defineField(
			{
				title: 'Meta Description',
				name: 'metaDesc',
				type: 'text',
				rows: 3,
				description: 'Description for search engines.',
				validation: Rule =>
					Rule.max(150).warning(
						'Longer descriptions may be truncated by search engines',
					),
			}
		),
		defineField({
			title: 'Share Graphic',
			name: 'shareGraphic',
			type: 'image',
			description: 'Share graphics will be cropped to 1200x630',
		},)
	],
})

export default seo
