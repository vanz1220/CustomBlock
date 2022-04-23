import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import { InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody } from '@wordpress/components';
/**
 * Internal dependencies
 */
//import Edit from './edit';
//import save from './save';


registerBlockType('create-block/ibl-block', {
	attributes: {
		wpSite: { type: 'string'},
		clientID: { type: 'string'},
		clientSecret: { type: 'string'}
	},
	edit: function (props){

		function updateSite(event){ props.setAttributes({ wpSite: event.target.value}) }
		function updateclientID(event){ props.setAttributes({ clientID: event.target.value}) }
		function updateclientSecret(event){ props.setAttributes({ clientSecret: event.target.value}) }
		// const [ className, setClassName ] = useState( '' );
		// const [ clientID, setClientID ] = useState( '' );
		// const [ clientSecret, setClientSecret ] = useState( '' );

		return	React.createElement("div", null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelBody, {
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
			class: "btnSend"
		  }, "Send")));

	},
	save: function (props){
		return React.createElement("div", {
			class: "ibl-block"
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
			class: "btnSend"
		  }, "Send"));
	}
});
