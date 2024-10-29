(()=>{function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var c in o)({}).hasOwnProperty.call(o,c)&&(e[c]=o[c])}return e},e.apply(null,arguments)}!function(t,o,c,l,a,s){l=wp.blockEditor||wp.editor;var r=o.addFilter,n=t.__,i=c.hasBlockSupport,u=l.InspectorControls,d=a.SelectControl,m=s.createHigherOrderComponent,b=["core/paragraph","core/heading","core/list","core/code","core/preformatted","core/table","core/columns","core/column","core/group","core/image"];r("blocks.registerBlockType","advgb/registerCustomStyleClass",(function(t){return b.includes(t.name)&&(t.attributes=e(t.attributes,{customStyle:{type:"string"},identifyColor:{type:"string"}})),t})),void 0!==advgbBlocks.customStyles&&advgbBlocks.customStyles&&advgbBlocks.customStyles.unshift({id:0,label:n("Select a block style","advanced-gutenberg"),value:"",identifyColor:""}),r("editor.BlockEdit","advgb/customStyles",(function(t){return function(o){return[React.createElement(t,e({key:"block-edit-custom-class-name"},o)),o.isSelected&&b.includes(o.name)&&React.createElement(u,{key:"advgb-custom-controls"},React.createElement("div",{className:"advgb-custom-styles-wrapper"},React.createElement(d,{label:[n("Block styles","advanced-gutenberg"),React.createElement("span",{className:"components-panel__color-area",key:"customstyle-identify",style:{background:o.attributes.identifyColor,verticalAlign:"text-bottom",borderRadius:"50%",border:"none",width:"16px",height:"16px",display:"inline-block",marginLeft:"10px"}})],help:n("This option let you add custom style for the current block","advanced-gutenberg"),value:o.attributes.customStyle,options:advgbBlocks.customStyles.map((function(e,t){return e.title&&(advgbBlocks.customStyles[t].label=e.title),e.name&&(advgbBlocks.customStyles[t].value=e.name),e})),onChange:function(e){var t=advgbBlocks.customStyles.filter((function(t){return t.value===e}))[0].identifyColor;o.setAttributes({customStyle:e,identifyColor:t,backgroundColor:void 0,textColor:void 0,fontSize:void 0})}})))]}})),r("blocks.getSaveContent.extraProps","advgb/loadFrontendCustomStyles",(function(e,t,o){return i(t,"customStyle",!0)&&o.customStyle&&(void 0===e.className?e.className=o.customStyle:(e.className+=" "+o.customStyle,e.className=e.className.trim())),e}));var y=m((function(t){return function(o){if(!b.includes(o.name)||!i(o.name,"customStyle",!0))return React.createElement(t,o);var c=o.attributes.customStyle;return React.createElement(t,e({},o,{className:"".concat(c)}))}}),"withStyleClasses");wp.hooks.addFilter("editor.BlockListBlock","advgb/loadBackendCustomStyles",y)}(wp.i18n,wp.hooks,wp.blocks,wp.blockEditor,wp.components,wp.compose)})();
//# sourceMappingURL=custom-styles.js.map