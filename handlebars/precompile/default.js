(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['default'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "	<li>\r\n		"
    + alias2((helpers.initial || (depth0 && depth0.initial) || alias1).call(depth0,(depth0 != null ? depth0.firstName : depth0),{"name":"initial","hash":{},"data":data}))
    + " "
    + alias2(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + " - \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"unless","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</li>\r\n";
},"2":function(depth0,helpers,partials,data) {
    return "			<i>active</i>\r\n";
},"4":function(depth0,helpers,partials,data) {
    return "			<i>inactive</i>\r\n";
},"6":function(depth0,helpers,partials,data) {
    return "			( what a loser!)\r\n";
},"8":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<p>Vehicle: "
    + alias3(((helper = (helper = helpers.make || (depth0 != null ? depth0.make : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"make","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.model || (depth0 != null ? depth0.model : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"model","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"year","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<h1>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n<ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.people : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n"
    + ((stack1 = helpers['with'].call(depth0,(depth0 != null ? depth0.vehicle : depth0),{"name":"with","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();