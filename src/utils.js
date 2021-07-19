export const readingTime = (text) =>
	Math.ceil(text.trim().split(/\s+/).length / 225); // 225 is avg wpm

export const menuOptions = [
	{ name: 'Our Work', href: '/ourwork' },
	{ name: 'About', href: '/about' },
	{ name: 'Blog', href: '/blog' },
];

export const truncateString = (str, num) => {
	if (str.length <= num) {
		return str;
	}
	return str.slice(0, num) + '...';
};

export const blog = [
	{
		img: {
			src: 'https://unsplash.com/photos/wwqRpSNBPq4/download?force=true&w=640',
			alt: 'a man holding phone with a Nike logo',
		},
		title: 'Wellintong Quiw drops new heat',
		description: 'The artist surprise the world with the release...',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quoniamque non dubium est quin in iis, quae media dicimus, sit aliud sumendum, aliud reiciendum, quicquid ita fit aut dicitur, omne officio continetur. Iure igitur gravissimi philosophi initium summi boni a natura petiverunt et illum appetitum rerum ad naturam accommodatarum ingeneratum putaverunt omnibus, quia continentur ea commendatione naturae, qua se ipsi diligunt. Duo Reges: constructio interrete. Hi autem ponunt illi quidem prima naturae, sed ea seiungunt a finibus et a summa bonorum; Pompeius in foedere Numantino infitiando fuit, nec vero omnia timente, sed primum qui animi conscientiam non curet, quam scilicet comprimere nihil est negotii. Omnis sermo elegans sumi potest, tum varietas est tanta artium, ut nemo sine eo instrumento ad ullam rem illustriorem satis ornatus possit accedere. Quo minus animus a se ipse dissidens secumque discordans gustare partem ullam liquidae voluptatis et liberae potest. Itaque ab iis constitutio illa prima naturae, a qua tu, quoque ordiebare, his prope verbis exponitur: Omnis natura vult esse conservatrix sui, ut et salva sit et in genere conservetur suo. Quibus natura iure responderit non esse verum aliunde finem beate vivendi, a se principia rei gerendae peti; Sin ea non neglegemus neque tamen ad finem summi boni referemus, non multum ab Erilli levitate aberrabimus. Duarum enim vitarum nobis erunt instituta capienda. Cognitis autem rerum finibus, cum intellegitur, quid sit et bonorum extremum et malorum, inventa vitae via est conformatioque omnium officiorum, cum quaeritur, quo quodque referatur; <br/>Esto, fecerit, si ita vis, Torquatus propter suas utilitatesmalo enim dicere quam voluptates, in tanto praesertim viro-, num etiam eius collega P. Quem quidem vos, cum improbis poenam proponitis, inpetibilem facitis, cum sapientem semper boni plus habere vultis, tolerabilem. Nam si concederetur, etiamsi ad corpus nihil referatur, ista sua sponte et per se esse iucunda, per se esset et virtus et cognitio rerum, quod minime ille vult expetenda. Et ille, cum erubuisset: Noli, inquit, ex me quaerere, qui in Phalericum etiam descenderim, quo in loco ad fluctum alunt declamare solitum Demosthenem, ut fremitum assuesceret voce vincere. Simul atque natum animal est, gaudet voluptate et eam appetit ut bonum, aspernatur dolorem ut malum. Etenim, si et sapere expetendum sit et valere, coniunctum utrumque magis expetendum sit quam sapere solum, neque tamen, si utrumque sit aestimatione dignum, pluris sit coniunctum quam sapere ipsum separatim. Non potes ergo ista tueri, Torquate, mihi crede, si te ipse et tuas cogitationes et studia perspexeris; Quippe: habes enim a rhetoribus; Ergo in bestiis erunt secreta e voluptate humanarum quaedam simulacra virtutum, in ipsis hominibus virtus nisi voluptatis causa nulla erit? Quorum omnium quae sint notitiae, quae quidem significentur rerum vocabulis, quaeque cuiusque vis et natura sit mox videbimus. Aufidio, praetorio, erudito homine, oculis capto, saepe audiebam, cum se lucis magis quam utilitatis desiderio moveri diceret. Quae est quaerendi ac disserendi, quae logikh dicitur, iste vester plane, ut mihi quidem videtur, inermis ac nudus est. Cum efficere non possit ut cuiquam, qui ipse sibi notus sit, hoc est qui suam naturam sensumque perspexerit, vacuitas doloris et voluptas idem esse videatur. Ipse enim Metrodorus, paene alter Epicurus, beatum esse describit his fere verbis: cum corpus bene constitutum sit et sit exploratum ita futurum. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Quo modo igitur evenit, ut hominis natura sola esset, quae hominem relinqueret, quali oblivisceretur corporis, quae summum bonum non in toto homine, sed in parte hominis poneret? Idem fecisset Epicurus, si sententiam hanc, quae nunc Hieronymi est, coniunxisset cum Aristippi vetere sententia. Itaque si aut requietem natura non quaereret aut eam posset alia quadam ratione consequi. Mihi quidem Homerus huius modi quiddam vidisse videatur in iis, quae de Sirenum cantibus finxerit. Verum enim diceret, idque Socratem, qui voluptatem nullo loco numerat, audio dicentem, cibi condimentum esse famem, potionis sitim. <br/>Ergo in iis adolescentibus bonam spem esse dicemus et magnam indolem, quos suis commodis inservituros et quicquid ipsis expediat facturos arbitrabimur? Id autem eius modi est, ut additum ad virtutem auctoritatem videatur habiturum et expleturum cumulate vitam beatam, de quo omnis haec quaestio est. Illud enim rectum est quod katortwma dicebas contingitque sapienti soli, hoc autem inchoati cuiusdam officii est, non perfecti, quod cadere in non nullos insipientes potest. Tantus est igitur innatus in nobis cognitionis amor et scientiae, ut nemo dubitare possit quin ad eas res hominum natura nullo emolumento invitata rapiatur. Cum enim superiores, e quibus planissime Polemo, secundum naturam vivere summum bonum esse dixissent, his verbis tria significari Stoici dicunt, unum eius modi, vivere adhibentem scientiam earum rerum, quae natura evenirent. Cum autem ad summum bonum volunt pervenire, transiliunt omnia et duo nobis opera pro uno relinquunt, ut alia sumamus, alia expetamus, potius quam uno fine utrumque concluderent. Nam cum appetitus ille animi aliquid ad se trahere coeperit consulto, quod sibi obsit, quia-sit sibi inimicus, cum id sua causa faciet, et oderit se et simul diliget, quod fieri non potest. Qua exposita scire cupio quae causa sit, cur Zeno ab hac antiqua constitutione desciverit, quidnam horum ab eo non sit probatum; Si enim sapiens aliquis miser esse possit, ne ego istam gloriosam memorabilemque virtutem non magno aestimandam putem. Quid autem est amare, e quo nomen ductum amicitiae est, nisi velle bonis aliquem affici quam maximis, etiamsi ad se ex iis nihil redundet? Hoc est non dividere, sed frangere. At ego quem huic anteponam non audeo dicere; Iam argumenti ratione conclusi caput esse faciunt ea, quae perspicua dicunt, deinde ordinem sequuntur, tum, quid verum sit in singulis, extrema conclusio est. <br/>Hoc enim constituto in philosophia constituta sunt omnia. Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus; At tu eadem ista dic in iudicio aut, si coronam times, dic in senatu. Negat enim definiri rem placere, sine quo fieri interdum non potest, ut inter eos, qui ambigunt, conveniat quid sit id, de quo agatur, velut in hoc ipso, de quo nunc disputamus. Quis autem honesta in familia institutus et educatus ingenue non ipsa turpitudine, etiamsi eum laesura non sit, offenditur? Quo invento omnis ab eo quasi capite de summo bono et malo disputatio ducitur. Rem unam praeclarissimam omnium maximeque laudandam, penitus viderent, quonam gaudio complerentur, cum tantopere eius adumbrata opinione laetentur? Ego autem tibi, Piso, assentior usu hoc venire, ut acrius aliquanto et attentius de claris viris locorum admonitu cogitemus. Huc et illuc, Torquate, vos versetis licet, nihil in hac praeclara epistula scriptum ab Epicuro congruens et conveniens decretis eius reperietis. Similiter sensus, cum accessit ad naturam, tuetur illam quidem, sed etiam se tuetur; ',
		date: new Date(),
		author: {
			name: 'Luis Bonilla',
			img: {
				src: 'https://pbs.twimg.com/profile_images/1407147550143127556/4co4MhYu_400x400.jpg',
				alt: '',
			},
		},
	},
	{
		img: {
			src: 'https://unsplash.com/photos/wwqRpSNBPq4/download?force=true&w=640',
			alt: 'a man holding phone with a Nike logo',
		},
		title: 'Wellintong Quiw drops new heat',
		description: 'The artist surprise the world with the release...',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quoniamque non dubium est quin in iis, quae media dicimus, sit aliud sumendum, aliud reiciendum, quicquid ita fit aut dicitur, omne officio continetur. Iure igitur gravissimi philosophi initium summi boni a natura petiverunt et illum appetitum rerum ad naturam accommodatarum ingeneratum putaverunt omnibus, quia continentur ea commendatione naturae, qua se ipsi diligunt. Duo Reges: constructio interrete. Hi autem ponunt illi quidem prima naturae, sed ea seiungunt a finibus et a summa bonorum; Pompeius in foedere Numantino infitiando fuit, nec vero omnia timente, sed primum qui animi conscientiam non curet, quam scilicet comprimere nihil est negotii. Omnis sermo elegans sumi potest, tum varietas est tanta artium, ut nemo sine eo instrumento ad ullam rem illustriorem satis ornatus possit accedere. Quo minus animus a se ipse dissidens secumque discordans gustare partem ullam liquidae voluptatis et liberae potest. Itaque ab iis constitutio illa prima naturae, a qua tu, quoque ordiebare, his prope verbis exponitur: Omnis natura vult esse conservatrix sui, ut et salva sit et in genere conservetur suo. Quibus natura iure responderit non esse verum aliunde finem beate vivendi, a se principia rei gerendae peti; Sin ea non neglegemus neque tamen ad finem summi boni referemus, non multum ab Erilli levitate aberrabimus. Duarum enim vitarum nobis erunt instituta capienda. Cognitis autem rerum finibus, cum intellegitur, quid sit et bonorum extremum et malorum, inventa vitae via est conformatioque omnium officiorum, cum quaeritur, quo quodque referatur; <br/>Esto, fecerit, si ita vis, Torquatus propter suas utilitatesmalo enim dicere quam voluptates, in tanto praesertim viro-, num etiam eius collega P. Quem quidem vos, cum improbis poenam proponitis, inpetibilem facitis, cum sapientem semper boni plus habere vultis, tolerabilem. Nam si concederetur, etiamsi ad corpus nihil referatur, ista sua sponte et per se esse iucunda, per se esset et virtus et cognitio rerum, quod minime ille vult expetenda. Et ille, cum erubuisset: Noli, inquit, ex me quaerere, qui in Phalericum etiam descenderim, quo in loco ad fluctum alunt declamare solitum Demosthenem, ut fremitum assuesceret voce vincere. Simul atque natum animal est, gaudet voluptate et eam appetit ut bonum, aspernatur dolorem ut malum. Etenim, si et sapere expetendum sit et valere, coniunctum utrumque magis expetendum sit quam sapere solum, neque tamen, si utrumque sit aestimatione dignum, pluris sit coniunctum quam sapere ipsum separatim. Non potes ergo ista tueri, Torquate, mihi crede, si te ipse et tuas cogitationes et studia perspexeris; Quippe: habes enim a rhetoribus; Ergo in bestiis erunt secreta e voluptate humanarum quaedam simulacra virtutum, in ipsis hominibus virtus nisi voluptatis causa nulla erit? Quorum omnium quae sint notitiae, quae quidem significentur rerum vocabulis, quaeque cuiusque vis et natura sit mox videbimus. Aufidio, praetorio, erudito homine, oculis capto, saepe audiebam, cum se lucis magis quam utilitatis desiderio moveri diceret. Quae est quaerendi ac disserendi, quae logikh dicitur, iste vester plane, ut mihi quidem videtur, inermis ac nudus est. Cum efficere non possit ut cuiquam, qui ipse sibi notus sit, hoc est qui suam naturam sensumque perspexerit, vacuitas doloris et voluptas idem esse videatur. Ipse enim Metrodorus, paene alter Epicurus, beatum esse describit his fere verbis: cum corpus bene constitutum sit et sit exploratum ita futurum. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Quo modo igitur evenit, ut hominis natura sola esset, quae hominem relinqueret, quali oblivisceretur corporis, quae summum bonum non in toto homine, sed in parte hominis poneret? Idem fecisset Epicurus, si sententiam hanc, quae nunc Hieronymi est, coniunxisset cum Aristippi vetere sententia. Itaque si aut requietem natura non quaereret aut eam posset alia quadam ratione consequi. Mihi quidem Homerus huius modi quiddam vidisse videatur in iis, quae de Sirenum cantibus finxerit. Verum enim diceret, idque Socratem, qui voluptatem nullo loco numerat, audio dicentem, cibi condimentum esse famem, potionis sitim. <br/>Ergo in iis adolescentibus bonam spem esse dicemus et magnam indolem, quos suis commodis inservituros et quicquid ipsis expediat facturos arbitrabimur? Id autem eius modi est, ut additum ad virtutem auctoritatem videatur habiturum et expleturum cumulate vitam beatam, de quo omnis haec quaestio est. Illud enim rectum est quod katortwma dicebas contingitque sapienti soli, hoc autem inchoati cuiusdam officii est, non perfecti, quod cadere in non nullos insipientes potest. Tantus est igitur innatus in nobis cognitionis amor et scientiae, ut nemo dubitare possit quin ad eas res hominum natura nullo emolumento invitata rapiatur. Cum enim superiores, e quibus planissime Polemo, secundum naturam vivere summum bonum esse dixissent, his verbis tria significari Stoici dicunt, unum eius modi, vivere adhibentem scientiam earum rerum, quae natura evenirent. Cum autem ad summum bonum volunt pervenire, transiliunt omnia et duo nobis opera pro uno relinquunt, ut alia sumamus, alia expetamus, potius quam uno fine utrumque concluderent. Nam cum appetitus ille animi aliquid ad se trahere coeperit consulto, quod sibi obsit, quia-sit sibi inimicus, cum id sua causa faciet, et oderit se et simul diliget, quod fieri non potest. Qua exposita scire cupio quae causa sit, cur Zeno ab hac antiqua constitutione desciverit, quidnam horum ab eo non sit probatum; Si enim sapiens aliquis miser esse possit, ne ego istam gloriosam memorabilemque virtutem non magno aestimandam putem. Quid autem est amare, e quo nomen ductum amicitiae est, nisi velle bonis aliquem affici quam maximis, etiamsi ad se ex iis nihil redundet? Hoc est non dividere, sed frangere. At ego quem huic anteponam non audeo dicere; Iam argumenti ratione conclusi caput esse faciunt ea, quae perspicua dicunt, deinde ordinem sequuntur, tum, quid verum sit in singulis, extrema conclusio est. <br/>Hoc enim constituto in philosophia constituta sunt omnia. Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus; At tu eadem ista dic in iudicio aut, si coronam times, dic in senatu. Negat enim definiri rem placere, sine quo fieri interdum non potest, ut inter eos, qui ambigunt, conveniat quid sit id, de quo agatur, velut in hoc ipso, de quo nunc disputamus. Quis autem honesta in familia institutus et educatus ingenue non ipsa turpitudine, etiamsi eum laesura non sit, offenditur? Quo invento omnis ab eo quasi capite de summo bono et malo disputatio ducitur. Rem unam praeclarissimam omnium maximeque laudandam, penitus viderent, quonam gaudio complerentur, cum tantopere eius adumbrata opinione laetentur? Ego autem tibi, Piso, assentior usu hoc venire, ut acrius aliquanto et attentius de claris viris locorum admonitu cogitemus. Huc et illuc, Torquate, vos versetis licet, nihil in hac praeclara epistula scriptum ab Epicuro congruens et conveniens decretis eius reperietis. Similiter sensus, cum accessit ad naturam, tuetur illam quidem, sed etiam se tuetur; ',
		date: new Date(),
		author: {
			name: 'Luis Bonilla',
			img: {
				src: 'https://pbs.twimg.com/profile_images/1407147550143127556/4co4MhYu_400x400.jpg',
				alt: '',
			},
		},
	},
];
export const ourWork = [
	{
		img: {
			src: 'https://unsplash.com/photos/wwqRpSNBPq4/download?force=true&w=640',
			alt: 'a man holding phone with a Nike logo',
		},
		title: 'Nike’s web app',
		body: 'Making the Nike’s website experience <i>swoosh</i>.',
		date: new Date(),
	},
	{
		img: {
			src: 'https://unsplash.com/photos/wwqRpSNBPq4/download?force=true&w=640',
			alt: 'a man holding phone with a Nike logo',
		},
		title: 'Nike’s web app',
		body: 'Making the Nike’s website experience <i>swoosh</i>.',
		date: new Date(),
	},
	{
		img: {
			src: 'https://unsplash.com/photos/wwqRpSNBPq4/download?force=true&w=640',
			alt: 'a man holding phone with a Nike logo',
		},
		title: 'Nike’s web app',
		body: 'Making the Nike’s website experience <i>swoosh</i>.',
		date: new Date(),
	},
];

export const ourWorkPosts = [
	{
		type: 'Website',
		title: 'Nike’s web app',
		body: "<p class='post-text'>Constant change makes producing quality drawing sets nearly impossible. Checkset recognizes that the industry faces increasingly volatile parameters such as budgets, timelines, and unpredictable clients.</p><h3 class='post-subtitle'>Our Approach</h3><p class='post-text'>Constant change makes producing quality drawing sets nearly impossible. Checkset recognizes that the industry faces increasingly volatile parameters such as budgets, timelines, and unpredictable clients.</p>",
		imgCarousel: [
			{
				src: '/assets/post-carousel-0.png',
				alt: '',
			},
			{
				src: '/assets/post-carousel-1.png',
				alt: '',
			},
			{
				src: '/assets/post-carousel-2.png',
				alt: '',
			},
		],
	},
	{
		type: 'Website',
		title: 'Nike’s web app',
		body: "<p class='post-text'>Constant change makes producing quality drawing sets nearly impossible. Checkset recognizes that the industry faces increasingly volatile parameters such as budgets, timelines, and unpredictable clients.</p><h3 class='post-subtitle'>Our Approach</h3><p class='post-text'>Constant change makes producing quality drawing sets nearly impossible. Checkset recognizes that the industry faces increasingly volatile parameters such as budgets, timelines, and unpredictable clients.</p>",
		imgCarousel: [
			{
				src: '/assets/post-carousel-0.png',
				alt: '',
			},
			{
				src: '/assets/post-carousel-1.png',
				alt: '',
			},
			{
				src: '/assets/post-carousel-2.png',
				alt: '',
			},
		],
	},
	{
		type: 'Website',
		title: 'Nike’s web app',
		body: "<p class='post-text'>Constant change makes producing quality drawing sets nearly impossible. Checkset recognizes that the industry faces increasingly volatile parameters such as budgets, timelines, and unpredictable clients.</p><h3 class='post-subtitle'>Our Approach</h3><p class='post-text'>Constant change makes producing quality drawing sets nearly impossible. Checkset recognizes that the industry faces increasingly volatile parameters such as budgets, timelines, and unpredictable clients.</p>",
		imgCarousel: [
			{
				src: '/assets/post-carousel-0.png',
				alt: '',
			},
			{
				src: '/assets/post-carousel-1.png',
				alt: '',
			},
			{
				src: '/assets/post-carousel-2.png',
				alt: '',
			},
		],
	},
];
