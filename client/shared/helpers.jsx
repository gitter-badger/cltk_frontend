Template.registerHelper('Config', () => Config);

Template.registerHelper('NCSchemas', () => NCSchemas);

Template.registerHelper('socialMedia', () => _.map(Config.socialMedia, obj => obj));

Template.registerHelper('Utils', () => Utils);

Template.registerHelper('currentRoute', () => {
	if (Router && Router.current && Router.current()) {
		return Router.current();
	}
	return null;
});

Template.registerHelper('isRouteReady', () =>
	Router && Router.current && Router.current() && Router.current()._waitlist._notReadyCount === 0);

Template.registerHelper('joinArray', array => array.join(', '));

Template.registerHelper('isNoun', pos => pos === 'noun');

Template.registerHelper('isPronoun', pos => pos === 'pronoun');

Template.registerHelper('isAdjective', pos => pos === 'adjective');

Template.registerHelper('isVerb', pos => pos === 'verb');

Template.registerHelper('isParticiple', pos => pos === 'participle');

Template.registerHelper('isOtherPOS', pos =>
	['noun', 'pronoun', 'adjective', 'verb', 'participle'].indexOf(pos) < 0);
