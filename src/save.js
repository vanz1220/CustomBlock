import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {

	return (
		<div {...useBlockProps.save()}>
			<div class="ibl-block">
				<label>Wordpress Site <span class="acf-required">*</span></label>
				<input type="text" placeholder='Enter Wordpress Site Url...' />
				<label>OAuth2 API credentials:</label>
				<label class="indentlabel">Client ID: <span class="acf-required">*</span></label>
				<input class="indentInput" type="text" placeholder='Enter Client ID...'/>
				<label class="indentlabel">Client Secret: <span class="acf-required">*</span></label>
				<input class="indentInput" type="text" placeholder='Enter Client Secret...'/>
			</div>
		</div>
	);
}