import { registerBlockType } from '@wordpress/blocks';
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
		clientSecret: { type: 'string'}
	},
	edit: function (props){

		function updateSite(event){ props.setAttributes({ wpSite: event.target.value}) }
		function updateclientID(event){ props.setAttributes({ clientID: event.target.value}) }
		function updateclientSecret(event){ props.setAttributes({ clientSecret: event.target.value}) }

		return	React.createElement("div", {
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
		  }, "Send"));
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
