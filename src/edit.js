import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { Panel, PanelBody, TextControl }	from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit() {
	const [ className, setClassName ] = useState( '' );
	const [ clientID, setClientID ] = useState( '' );
	const [ clientSecret, setClientSecret ] = useState( '' );

	return (
		

		<div {...useBlockProps()}>
			<InspectorControls>
					<Panel>
						<PanelBody title='IBL Custom Block'>
							<TextControl
								label="Wordpress Site Url"
								value={ className }
								onChange={ ( value ) => setClassName( value ) }
								placeholder={'Enter Wordpress Site Url...'}
							/>
							<TextControl
								label="Client ID"
								value={ clientID }
								onChange={ ( value ) => setClientID( value ) }
								placeholder={'Enter Client ID...'}
							/>
							<TextControl
								label="Client Secret"
								value={ clientSecret }
								onChange={ ( value ) => setClientSecret( value ) }
								placeholder={'Enter Client Secret...'}
							/>
						</PanelBody>
						
					</Panel>
			</InspectorControls>
			<div class="ibl-block">
				<label>Wordpress Site <span class="acf-required">*</span></label>
				<input type="text" placeholder='Enter Wordpress Site Url...' value={ className } onChange={(e) => setClassName(e.target.value)}/>
				<label>OAuth2 API credentials:</label>
				<label class="indentlabel">Client ID: <span class="acf-required">*</span></label>
				<input class="indentInput" type="text" placeholder='Enter Client ID...' value={ clientID } onChange={(e) => setClientID(e.target.value)}/>
				<label class="indentlabel">Client Secret: <span class="acf-required">*</span></label>
				<input class="indentInput" type="text" placeholder='Enter Client Secret...' value={ clientSecret } onChange={(e) => setClientSecret(e.target.value)}/>
				<button class="btnSend">Send</button>
			</div>
		</div>
	);
}