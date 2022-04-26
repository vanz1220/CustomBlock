import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, ColorPalette } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl  } from '@wordpress/components';
import './style.scss';
/**
 * Internal dependencies
 */
//import Edit from './edit';
//import save from './save';


registerBlockType('create-block/ibl-block', {
	attributes: {
		wpSite: { type: 'string'},
		clientID: { type: 'string'},
		clientSecret: { type: 'string'},
		bg_color: { type: 'string', default: '#000000' },
        text_color: { type: 'string', default: '#ffffff' }
	},
	edit: function (props){

		
		function updateSite(event){ props.setAttributes({ wpSite: event.target.value}) }
		function updateclientID(event){ props.setAttributes({ clientID: event.target.value}) }
		function updateclientSecret(event){ props.setAttributes({ clientSecret: event.target.value}) }
		// const [ className, setClassName ] = useState( '' );
		// const [ clientID, setClientID ] = useState( '' );
		// const [ clientSecret, setClientSecret ] = useState( '' );

		function onChangeTextColor(event){props.setAttributes({text_color: event})}
		function onChangeBGColor(event){props.setAttributes({bg_color: event})}

		return React.createElement("div", null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/ React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelBody, {
			title: "IBL Custom Block"
		  }, React.createElement("label", null, "Wordpress Site ", /*#__PURE__*/React.createElement("span", {
			class: "acf-required"
		  }, "*")),/*#__PURE__*/React.createElement("input", {
			type: "text",
			value: props.attributes.wpSite,
			onChange:  updateSite,
			placeholder: 'Enter Wordpress Site Url...'
		  }), React.createElement("br", null), React.createElement("label", null, "OAuth2 API credentials:"), React.createElement("br", null),/*#__PURE__*/React.createElement("label", {
			class: "indentlabel"
		  }, "Client ID: ", /*#__PURE__*/React.createElement("span", {
			class: "acf-required"
		  }, "*")),/*#__PURE__*/React.createElement("input", {
			type: "text",
			value: props.attributes.clientID,
			onChange:  updateclientID,
			placeholder: 'Enter Client ID...'
		  }), React.createElement("br", null),React.createElement("label", {
			class: "indentlabel"
		  }, "Client Secret: ", /*#__PURE__*/React.createElement("span", {
			class: "acf-required"
		  }, "*")),/*#__PURE__*/React.createElement("input", {
			type: "text",
			value: props.attributes.clientSecret,
			onChange:  updateclientSecret,
			placeholder: 'Enter Client Secret...'			
		  })))), React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelBody, {
			title: "Button Background Color"
		  }, /*#__PURE__*/React.createElement(ColorPalette // Element Tag for Gutenberg standard colour selector
		  , {
			onChange: onChangeBGColor // onChange event callback
		  
		  }))), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelBody, {
			title: "Button Text Color"
		  }, /*#__PURE__*/React.createElement(ColorPalette, {
			onChange: onChangeTextColor // onChange event callback
		  
		  })))), /*#__PURE__*/React.createElement("div", {
			class: "ibl-block"
		  }, /*#__PURE__*/React.createElement("label", null, "Wordpress Site ", /*#__PURE__*/React.createElement("span", {
			class: "acf-required"
		  }, "*")), /*#__PURE__*/React.createElement("input", {
			type: "text",
			placeholder: "Enter Wordpress Site Url...",
			value: props.attributes.wpSite,
			onChange: updateSite
		  }), /*#__PURE__*/React.createElement("label", null, "OAuth2 API credentials:"), /*#__PURE__*/React.createElement("label", {
			class: "indentlabel"
		  }, "Client ID: ", /*#__PURE__*/React.createElement("span", {
			class: "acf-required"
		  }, "*")), /*#__PURE__*/React.createElement("input", {
			class: "indentInput",
			type: "text",
			placeholder: "Enter Client ID...",
			value: props.attributes.clientID,
			onChange: updateclientID
		  }), /*#__PURE__*/React.createElement("label", {
			class: "indentlabel"
		  }, "Client Secret: ", /*#__PURE__*/React.createElement("span", {
			class: "acf-required"
		  }, "*")), /*#__PURE__*/React.createElement("input", {
			class: "indentInput",
			type: "text",
			placeholder: "Enter Client Secret...",
			value: props.attributes.clientSecret,
			onChange: updateclientSecret
		  }), /*#__PURE__*/React.createElement("button", {
			class: "btnSend",
			style: {
				backgroundColor: props.attributes.bg_color,
				color: props.attributes.text_color
			  }
		  }, "Send")));

	},
	save: function (props){
		return React.createElement("div", {
			class: "ibl-block2"
		  }, /*#__PURE__*/React.createElement("label", null, "Wordpress Site ", /*#__PURE__*/React.createElement("span", {
			class: "acf-required"
		  }, "*")), /*#__PURE__*/React.createElement("input", {
			type: "text",
			placeholder: "Enter Wordpress Site Url...",
			value: props.attributes.wpSite
		  }), /*#__PURE__*/React.createElement("label", null, "OAuth2 API credentials:"), /*#__PURE__*/React.createElement("label", {
			class: "indentlabel"
		  }, "Client ID: ", /*#__PURE__*/React.createElement("span", {
			class: "acf-required"
		  }, "*")), /*#__PURE__*/React.createElement("input", {
			class: "indentInput",
			type: "text",
			placeholder: "Enter Client ID...",
			value: props.attributes.clientID
		  }), /*#__PURE__*/React.createElement("label", {
			class: "indentlabel"
		  }, "Client Secret: ", /*#__PURE__*/React.createElement("span", {
			class: "acf-required"
		  }, "*")), /*#__PURE__*/React.createElement("input", {
			class: "indentInput",
			type: "text",
			placeholder: "Enter Client Secret...",
			value: props.attributes.clientSecret
		  }), /*#__PURE__*/React.createElement("button", {
			class: "btnSend",
			style: {
				backgroundColor: props.attributes.bg_color,
				color: props.attributes.text_color
			  }
		  }, "Send"));
	}
});
