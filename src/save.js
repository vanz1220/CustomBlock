/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	return (
		// <p {...useBlockProps.save()}>
		// 	{__('Ibl Block – hello from the saved content!', 'ibl-block')}
		// </p>,
		<div {...useBlockProps.save()}>
		<label>Wordpress Site <span class="acf-required">*</span>
		</label>
		<input type="url" Placeholder="Enter Wordpress Url..." required="required"></input>
		<label>OAuth2 API credentials</label>
		<label>Client ID <span class="acf-required">*</span></label>
		<input type="text" Placeholder="Enter Client ID..." required="required"></input>
		<label >Client Secret <span class="acf-required">*</span></label>
		<input type="password" Placeholder="Enter Client Password..." required="required"></input>
	</div>
	);
}
