

exports = (function() {
	
	function check(raw, expected) {
		var tokens = window.reedy.parse4(raw),
			res = [], i;
		
		for (i = 0; i < tokens.length; i++) {
			res.push(tokens[i].toString())
		}
		
		assert.equalArray(res, expected, raw);
	}
	
	
	var assert = require("../assert.js");
	
	
	assert.profile("parser4");
	
	check("снег, у \" входа - елка.",                           ["снег,","у","\" входа -","елка."]);
	check("перевод A. Préchac’а). Сочетание",                   ["перевод","A. Préchac’а).","Сочетание"]);
	check("ну Й.К.Л. Прильвиц... понятно",                      ["ну","Й.К.Л. Прильвиц...","понятно"]);
	check("сказал \"ну, конечно ...\" и ушёл",                  ["сказал","\"ну,","конечно ...\"","и","ушёл"]);
	check("присутствующих, - …на двадцать",                     ["присутствующих, -","…на","двадцать"]);
	check("присутствующих) - …на двадцать",                     ["присутствующих) -","…на","двадцать"]);
	check("\"ну, конечно ...\"— сказал и ушёл",                 ["\"ну,","конечно ...\"—","сказал","и","ушёл"]);
	
	check("(какой-то текст.)",                                  ["(какой-то","текст.)"]);
	check("в 2001 (?) из",                                      ["в","2001","(?)","из"]);
	check("с грустью (и болью?) сказал",                        ["с","грустью","(и","болью?)","сказал"]);
	check("говорят: \"как собак\".",                            ["говорят:","\"как","собак\"."]);
	
	check("из-за хутора )))",                                   ["из-за","хутора )))"]);
	check("смайликов отсыпать? :)",                             ["смайликов","отсыпать?",":)"]);
	check("вот это да 0_о",                                     ["вот","это","да","0_о"]);
	
	check("или так [^_^] вот !",                                ["или","так","[^_^]","вот !"]);
	check("текст (...) текст",                                  ["текст","(...)","текст"]);
	check("текст [...] текст",                                  ["текст","[...]","текст"]);
	
	check("22:22 29.03.2014",                                   ["22:22","29.03.2014"]);
	check("так считают 0:07 уже",                               ["так","считают","0:07","уже"]);
	check("так считают 0:07:123 уже",                           ["так","считают","0:07:123","уже"]);
	
	check("- Прего![2]",                                        ["- Прего![2]"]);
	check("«Пресня Палас»",                                     ["«Пресня","Палас»"]);
	
	check("«Пресня\nПалас»",                                    ["«Пресня","Палас»"]);
	check("весьма\n\"интересную\"",                             ["весьма","\"интересную\""]);
	check("весьма\n( интересную )",                             ["весьма","( интересную )"]);
	check("кричал:\n- Она",                                     ["кричал:","- Она"]);
	
	check("• Гипертрофированный протекционизм",                 ["• Гипертрофированный","протекционизм"]);
	check("Следующие\n• Гипертрофированный протекционизм",      ["Следующие","• Гипертрофированный","протекционизм"]);
	check("Следующие:\n• Гипертрофированный протекционизм",     ["Следующие:","• Гипертрофированный","протекционизм"]);
	check("Следующие:\n1)Гипертрофированный протекционизм",     ["Следующие:","1)Гипертрофированный","протекционизм"]);
	check("протестующих а) наймитами Запада и б) создал",       ["протестующих","а)","наймитами","Запада","и","б)","создал"]);
	
	check("распределения +-5 это такая",                        ["распределения","+-5","это","такая"]);
	check("распределения P(X) (X={xi}), это такая",             ["распределения","P(X)","(X={xi}),","это","такая"]);
	
	return assert.profileEnd();
	
})();
