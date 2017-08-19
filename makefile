sourcePngs := $(wildcard _source/images/*.png)

all: about/index.html \
	images/logo.svg \
	images/modules \
	images/profile.svg \
	images/screenshots \
	imprint/index.html \
	index.html \
	pricing/index.html \
	scripts/main.js \
	styles/screen.css \
	features/index.html \
	help/index.html \
	help/getting-started/index.html
	# login/index.html

styles/screen.css: ./_source/styles/* | styles
	./node_modules/.bin/stylus ./_source/styles/screen.styl \
		--compress \
		--out $@

scripts/main.js: ./_source/scripts/* | scripts
	./node_modules/.bin/uglifyjs $^ \
		--compress \
		--mangle \
		--output $@

index.html: _source/index.pug _source/partials/*
	mkdir -p $(@D)
	./node_modules/.bin/pug --path $< < $< > $@

%/index.html: _source/%.pug _source/partials/*
	mkdir -p $(@D)
	./node_modules/.bin/pug --path $< < $< > $@

features/index.html: _source/data/fixing-modules.yaml _source/features.pug \
	_source/partials/* _source/helpers/buildModules.js
	mkdir -p $(@D)
	node _source/helpers/buildModules.js > $@

help/index.html: _source/data/questions-and-answers.yaml _source/help.pug \
	_source/partials/* _source/helpers/buildFaq.js
	mkdir -p $(@D)
	node _source/helpers/buildFaq.js > $@

images/%.svg: _source/images/%.svg ./node_modules/svgo | images
	./node_modules/.bin/svgo $< $@

images/%.png: _source/images/%.png | images
	cp -f $< $@

images/modules: _source/images/modules | images
	rsync -a $< $(@D)
	cd $@ && optipng -strip all *.png

images/screenshots: _source/images/screenshots | images
	rsync -a $< $(@D)
	cd $@ && optipng -strip all *.png

# images/favicon.png: _source/images/favicon.png | images
# 	convert -background none $< $@

styles:
	-mkdir ./styles

scripts:
	-mkdir ./scripts

images:
	-mkdir ./images

.PHONY: clean, all, style-files, image-files
clean:
	-rm -r \
		./about \
		./features \
		./getting-started \
		./help \
		./images \
		./imprint \
		./index.html \
		./login \
		./pricing \
		./scripts \
		./styles
